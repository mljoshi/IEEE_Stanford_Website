# Luma events Worker

A small Cloudflare Worker that serves the IEEE Stanford Luma calendar as JSON, so
the website can show upcoming and past events without anyone editing code.

**How it works**

1. Every 15 minutes, a cron trigger downloads the public Luma calendar feed
   (`api.lu.ma/ics/...`), adds each event's cover image and short description
   from Luma's public, undocumented API (the one luma.com itself uses), and saves
   the result in Workers KV. Covers are refreshed every run. Descriptions are
   fetched once per event and re-checked daily for upcoming events.
   (luma.com event pages block requests from Cloudflare Workers, so the Worker
   can't read them directly.)
2. When someone visits the site, the browser requests the Worker URL, and the
   Worker returns the saved JSON (with the CORS header the Luma feed lacks).
3. The site's Upcoming and Recent lists come straight from that JSON, and each
   card links to its luma.com page. The only hand-written additions are past
   events that were never on Luma (`notOnLuma` in `src/data/eventsPageData.jsx`).
   Featured events stay hand-written.

If the Worker is ever down, the site hides its Upcoming and Recent sections.
If Luma changes its undocumented API, events still show (titles, dates, and links come
from the feed), just without new covers or descriptions. Refresh warnings show up in
the Worker's logs in the Cloudflare dashboard.

Everything fits in Cloudflare's free plan (100k requests/day, 1k KV writes/day;
the cron uses ~96).

## Deploying

Live at <https://ieee-stanford-events.ieee-stanford.workers.dev> (account subdomain
`ieee-stanford`), with KV namespace `EVENTS` (id in `wrangler.toml`).
After changing `src/index.js`, redeploy from the repo root:

```bash
npm run worker:deploy
```

The site doesn't need a rebuild for Worker changes.

### Setting it up from scratch

Only needed if the Cloudflare account changes. Use a shared club Cloudflare account,
not a personal one, so this keeps working after officers graduate.

```bash
cd worker/luma-events
npx wrangler login
npx wrangler kv namespace create EVENTS
```

Put the printed `id` in `wrangler.toml`, then run `npm run worker:deploy`. Wrangler
prints the Worker URL. Put it in `LUMA_EVENTS_URL` in `src/data/lumaEvents.js`,
then rebuild and deploy the site.

## Local testing

From the repo root, in two terminals:

```bash
npm run worker:dev
```

```bash
npm run dev:local-events
```

The local Worker uses its own local KV, so it never touches production data. It
refreshes on the first request. To run the 15-minute refresh step by hand:

```bash
curl "http://127.0.0.1:8787/cdn-cgi/local/scheduled"
```

## Changing the calendar

The calendar ID is `CALENDAR_ID` at the top of `src/index.js`.
