import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function UpcomingCard({ id, dateStr, title, details, image, index = 0 }) {
  return (
    <Reveal delay={index * 60}>
      <Link to={`/event/${id}`} className="event-card event-card--interactive">
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
            <span className="event-card-arrow" aria-hidden="true">→</span>
          </div>
          <p className="event-card-desc">{details}</p>
        </div>
      </Link>
    </Reveal>
  )
}
