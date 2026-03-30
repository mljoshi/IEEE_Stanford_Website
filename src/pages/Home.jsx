import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Zap, BookOpen, Users } from 'lucide-react'
import ParticleCanvas from '../components/ParticleCanvas'
import { upcomingData } from '../data/eventsPageData'
import UpcomingCard from '../components/UpcomingCard'

/** Animated counter that counts up when scrolled into view. */
function StatCounter({ value, suffix = '', label }) {
  const [display, setDisplay] = useState(0)
  const elRef = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = elRef.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const start = Date.now()
        const dur = 1600
        const tick = () => {
          const p = Math.min((Date.now() - start) / dur, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          setDisplay(Math.round(eased * value))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        obs.disconnect()
      }
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [value])

  return (
    <div className="stat-item" ref={elRef}>
      <div className="stat-number">
        {display}<span className="stat-suffix">{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

const programs = [
  {
    Icon: Zap,
    title: 'Industry & Research',
    body: 'Real-world talks from engineers building chips, systems, and ML infrastructure. Past speakers include Jensen Huang, Steve Wozniak, and Andy Bechtolsheim.',
  },
  {
    Icon: BookOpen,
    title: 'Academics & Mentorship',
    body: 'Guidance on EE & CS courses, research groups, graduate school, and hardware career paths.',
  },
  {
    Icon: Users,
    title: 'Community',
    body: 'A few well-run events each quarter. We keep things small enough that everyone has a chance to connect meaningfully.',
  },
]

export default function Home() {
  const preview = upcomingData.filter(e => e.date !== null).slice(0, 3)

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-dark">
        <ParticleCanvas />
        <div className="hero-dark-inner">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            IEEE @ Stanford
          </div>
          <h1 className="hero-dark-title">
            Hardware, software,<br />and systems at Stanford.
          </h1>
          <p className="hero-dark-sub">
            A focused community for students who like circuits, chips,<br className="hide-sm" />
            systems, and infrastructure.
          </p>
          <div className="hero-button-row">
            <Link to="/events" className="btn-glow">See Events</Link>
            <Link to="/contact" className="btn-ghost">Get Involved</Link>
          </div>
        </div>
        <div className="scroll-hint" aria-hidden="true">
          <svg width="20" height="28" viewBox="0 0 20 28" fill="none">
            <rect x="6.5" y="0.5" width="7" height="14" rx="3.5" stroke="currentColor" strokeWidth="1.2" />
            <line x1="10" y1="4" x2="10" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M4 20l6 7 6-7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <StatCounter value={25} label="Years active" />
            <StatCounter value={50} suffix="+" label="Events hosted" />
            <StatCounter value={25} suffix="+" label="Notable speakers" />
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="section programs-section">
        <div className="container">
          <div className="section-kicker">What we do</div>
          <h2 className="section-title">Three things we care about.</h2>
          <div className="programs-grid">
            {programs.map(({ Icon, title, body }) => (
              <div className="program-card" key={title}>
                <div className="program-icon-wrap">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="program-title">{title}</h3>
                <p className="program-body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UPCOMING PREVIEW ── */}
      {preview.length > 0 && (
        <section className="section upcoming-preview-section">
          <div className="container">
            <div className="section-kicker">Events</div>
            <h2 className="section-title">What's coming up.</h2>
            {preview.map((ev, i) => (
              <UpcomingCard key={ev.id} {...ev} index={i} />
            ))}
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link to="/events" className="see-all-link">View all events →</Link>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
