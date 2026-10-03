// Cloudflare Worker: serves IEEE Stanford's Luma calendar as CORS-enabled JSON.
//
// - A cron trigger (every 15 min) downloads the public Luma ICS feed, adds each
//   event's cover image and short description from Luma's public API, and stores
//   the result in KV.
// - GET requests just read that stored JSON, so visitors never wait on Luma.
//
// Everything is fetched from api.lu.ma. luma.com event pages block requests
// coming from Cloudflare Workers, so they can't be used.

const CALENDAR_ID = 'cal-LO8vEyiS1bADtaM'
const LUMA_API = 'https://api.lu.ma'
const ICS_URL = `${LUMA_API}/ics/get?entity=calendar&id=${CALENDAR_ID}`
const KV_KEY = 'events-v1'

// Free-plan Workers get 50 outbound requests per run; stay well under it.
const MAX_DESCRIPTION_FETCHES_PER_RUN = 20
// Upcoming events can still change (edited blurb); past ones can't.
const UPCOMING_REFRESH_MS = 24 * 60 * 60 * 1000
const DESCRIPTION_MAX_CHARS = 300

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
}

export default {
  async fetch(request, env, ctx) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS })
    }
    if (request.method !== 'GET') {
      return new Response('Method not allowed', { status: 405, headers: CORS_HEADERS })
    }

    let data = await env.EVENTS.get(KV_KEY, 'json')
    if (!data) {
      // First request after deploy, before the cron has run.
      try {
        data = await refresh(env)
      } catch (err) {
        console.error('Refresh failed:', err)
        return json({ error: 'Could not load the Luma calendar.' }, 502)
      }
    }
    return json(data, 200, 300)
  },

  async scheduled(event, env, ctx) {
    ctx.waitUntil(refresh(env))
  },
}

async function refresh(env) {
  const res = await fetch(ICS_URL)
  if (!res.ok) throw new Error(`Luma ICS returned ${res.status}`)
  const events = parseIcs(await res.text())

  // Reuse details from the last run so we only fetch what's new or stale.
  const previous = (await env.EVENTS.get(KV_KEY, 'json')) || { events: [] }
  const known = new Map(previous.events.map((e) => [e.id, e]))
  const now = Date.now()

  for (const ev of events) {
    const old = known.get(ev.id)
    if (old) {
      ev.image = old.image
      ev.description = old.description
      ev.descriptionFetchedAt = old.descriptionFetchedAt
    }
  }

  // Covers: two requests cover the whole calendar, so refresh them every run.
  try {
    const covers = await fetchCovers()
    for (const ev of events) ev.image = covers.get(ev.id) || ev.image
  } catch (err) {
    console.warn('Cover fetch failed, keeping previous covers:', err)
  }

  // Descriptions: one request per event, so only fetch new or stale ones.
  const needsDescription = events
    .filter((ev) => {
      if (!ev.descriptionFetchedAt) return true
      const isUpcoming = Date.parse(ev.end) > now
      return isUpcoming && now - ev.descriptionFetchedAt > UPCOMING_REFRESH_MS
    })
    // Newest first, so upcoming and recent events get details before old ones.
    .sort((a, b) => Date.parse(b.start) - Date.parse(a.start))
    .slice(0, MAX_DESCRIPTION_FETCHES_PER_RUN)

  await Promise.all(
    needsDescription.map(async (ev) => {
      try {
        // If Luma's response shape changes and nothing is found, keep what we had.
        ev.description = (await fetchDescription(ev.id)) || ev.description
        ev.descriptionFetchedAt = now
      } catch (err) {
        console.warn(`Description fetch failed for ${ev.id}, will retry:`, err)
      }
    })
  )

  const data = { updated: new Date(now).toISOString(), events }
  await env.EVENTS.put(KV_KEY, JSON.stringify(data))
  return data
}

// ---------- Luma API (undocumented, used by luma.com itself) ----------

async function lumaApi(path) {
  const res = await fetch(`${LUMA_API}${path}`, { headers: { Accept: 'application/json' } })
  if (!res.ok) throw new Error(`${path} returned ${res.status}`)
  return res.json()
}

// Map of event id → resized cover image URL, for every event on the calendar.
async function fetchCovers() {
  const covers = new Map()
  for (const period of ['past', 'future']) {
    let cursor = null
    for (let page = 0; page < 5; page++) {
      const query = new URLSearchParams({ calendar_api_id: CALENDAR_ID, period, pagination_limit: '50' })
      if (cursor) query.set('pagination_cursor', cursor)
      const data = await lumaApi(`/calendar/get-items?${query}`)
      for (const entry of data.entries || []) {
        const ev = entry.event
        if (ev?.api_id && ev.cover_url) covers.set(ev.api_id, resizeCover(ev.cover_url))
      }
      if (!data.has_more || !data.next_cursor) break
      cursor = data.next_cursor
    }
  }
  return covers
}

async function fetchDescription(eventId) {
  const data = await lumaApi(`/event/get?event_api_id=${encodeURIComponent(eventId)}`)
  return summarize(proseMirrorText(data.description_mirror))
}

// Luma stores descriptions as a ProseMirror document; flatten it to plain text.
function proseMirrorText(node) {
  if (!node) return ''
  if (node.type === 'text') return node.text || ''
  if (node.type === 'hard_break') return ' '
  const inner = (node.content || []).map(proseMirrorText).join('')
  return node.type === 'doc' ? inner : `${inner} `
}

function summarize(text) {
  const clean = text.replace(/\s+/g, ' ').trim()
  if (clean.length <= DESCRIPTION_MAX_CHARS) return clean || null
  const cut = clean.slice(0, DESCRIPTION_MAX_CHARS)
  // Break at the last word boundary; a single huge token (e.g. a URL) is cut as-is.
  const lastSpace = cut.lastIndexOf(' ')
  return `${lastSpace > 0 ? cut.slice(0, lastSpace) : cut}…`
}

function resizeCover(url) {
  // Covers are usually on Luma's CDN, but can also be stock photos (e.g. Unsplash).
  const lumaPrefix = 'https://images.lumacdn.com/'
  if (!url.startsWith(lumaPrefix)) return url
  return `${lumaPrefix}cdn-cgi/image/format=auto,fit=cover,dpr=1,quality=80,width=400/${url.slice(lumaPrefix.length)}`
}

// ---------- ICS feed ----------

function parseIcs(text) {
  // Long ICS lines are "folded" onto continuation lines that start with a space.
  const lines = text.replace(/\r?\n[ \t]/g, '').split(/\r?\n/)
  const events = []
  let current = null

  for (const line of lines) {
    if (line === 'BEGIN:VEVENT') {
      current = {}
    } else if (line === 'END:VEVENT') {
      if (current) events.push(toEvent(current))
      current = null
    } else if (current) {
      const colon = line.indexOf(':')
      if (colon === -1) continue
      const name = line.slice(0, colon).split(';')[0]
      current[name] = unescapeIcs(line.slice(colon + 1))
    }
  }

  return events.filter(Boolean).sort((a, b) => Date.parse(a.start) - Date.parse(b.start))
}

function toEvent(raw) {
  if (!raw.UID || !raw.DTSTART || !raw.SUMMARY) return null
  if (raw.STATUS === 'CANCELLED') return null

  const id = raw.UID.split('@')[0]
  const shortLink = raw.DESCRIPTION?.match(/https:\/\/(?:luma\.com|lu\.ma)\/[\w-]+/)?.[0]
  const location = raw.LOCATION && !/^https?:\/\//.test(raw.LOCATION) ? raw.LOCATION : null
  const start = parseIcsDate(raw.DTSTART)

  return {
    id,
    title: raw.SUMMARY,
    start,
    end: raw.DTEND ? parseIcsDate(raw.DTEND) : start,
    location,
    url: shortLink || `https://luma.com/event/${id}`,
    image: null,
    description: null,
  }
}

function parseIcsDate(value) {
  // Luma uses UTC timestamps (20260203T010000Z); also accept all-day dates.
  const m = value.match(/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})Z?)?$/)
  if (!m) return new Date(value).toISOString()
  const [, y, mo, d, h = '00', mi = '00', s = '00'] = m
  return `${y}-${mo}-${d}T${h}:${mi}:${s}Z`
}

function unescapeIcs(value) {
  return value.replace(/\\([nN,;\\])/g, (_, c) => (c === 'n' || c === 'N' ? '\n' : c))
}

function json(body, status = 200, maxAge = 0) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...CORS_HEADERS,
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': maxAge ? `public, max-age=${maxAge}` : 'no-store',
    },
  })
}
