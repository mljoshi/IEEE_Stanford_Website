import { Link } from 'react-router-dom'
import Reveal from './Reveal'

// Hand-written events open their /event/:id page; Luma events (href) open on luma.com.
export default function UpcomingCard({ id, dateStr, title, details, image, href, index = 0 }) {
  const content = (
    <>
      {image && (
        <div className="event-card-thumb">
          <img src={image} alt={title} loading="lazy" />
        </div>
      )}
      <span className="event-card-date">{dateStr}</span>
      <div className="event-card-body">
        <div className="event-card-title">
          <span>{title}</span>
          <span className="event-card-date--mobile">{dateStr}</span>
          <span className="event-card-arrow" aria-hidden="true">{href ? '↗' : '→'}</span>
        </div>
        <p className="event-card-desc">{details}</p>
      </div>
    </>
  )

  return (
    <Reveal delay={index * 60}>
      {href ? (
        <a href={href} target="_blank" rel="noreferrer" className="event-card event-card--interactive">
          {content}
        </a>
      ) : (
        <Link to={`/event/${id}`} className="event-card event-card--interactive">
          {content}
        </Link>
      )}
    </Reveal>
  )
}
