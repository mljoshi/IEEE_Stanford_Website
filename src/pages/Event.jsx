import { useParams } from "react-router-dom";
import { upcomingEventsRaw } from "../data/eventsPageData";

export default function Event() {
  const { id } = useParams()
  const eventId = Number(id)
  const baseUrl = import.meta.env.BASE_URL

  const event = upcomingEventsRaw.find(e => e.id === eventId)

  if (!event) {
    return (
      <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '1rem' }}>404</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-2)', marginBottom: '2rem' }}>Event not found</p>
          <a href={`${baseUrl}events`} className="btn-glow">
            Back to Events
          </a>
        </div>
      </section>
    )
  }

  return (
    <section className="section">
      <div className="container">
        {/* Nav row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem' }}>
          <a
            href={`${baseUrl}events`}
            style={{
              color: 'var(--red-accessible)',
              fontWeight: 600,
              fontSize: '0.9rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              transition: 'var(--transition)',
            }}
          >
            ← Back to Events
          </a>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.18em' }}>
            Event Details
          </span>
        </div>

        {/* Date badge */}
        <div style={{ marginBottom: '1.25rem' }}>
          <span className="hero-badge" style={{ animation: 'none', fontSize: '0.72rem' }}>
            <span className="hero-badge-dot" />
            {event.longDateStr}
          </span>
        </div>

        {/* Title */}
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '2rem', maxWidth: '40rem' }}>
          {event.title}
        </h1>

        {/* Body */}
        <div style={{ maxWidth: '48rem' }}>
          <p style={{ fontSize: '1.08rem', lineHeight: 1.8, color: 'var(--text-2)' }}>
            {event.longDetails}
          </p>
        </div>
      </div>
    </section>
  )
}
