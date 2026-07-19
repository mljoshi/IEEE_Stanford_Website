import { Link, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { upcomingEventsRaw } from '../data/eventsPageData'

export default function Event() {
  const { id } = useParams()
  const eventId = Number(id)
  const event = upcomingEventsRaw.find((e) => e.id === eventId)

  if (!event) {
    return (
      <section className="section event-not-found">
        <div>
          <h1>404</h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Event not found.</p>
          <Link to="/events" className="btn btn-primary">Back to events</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="section page-content">
      <div className="container">
        <Reveal>
          <Link to="/events" className="event-detail-back">← Back to events</Link>
        </Reveal>

        <Reveal delay={80}>
          <article className="event-detail">
            <div className="event-detail-badge">{event.longDateStr}</div>
            <h1 className="event-detail-title">{event.title}</h1>

            {event.image && (
              <img
                src={event.image}
                alt={event.title}
                className="event-detail-image"
                loading="lazy"
              />
            )}

            <div className="event-detail-body">
              {typeof event.longDetails === 'string' ? (
                <p>{event.longDetails}</p>
              ) : (
                event.longDetails
              )}
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
