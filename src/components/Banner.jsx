import { getBannerEvent } from '../data/eventsPageData';
import { Link } from 'react-router-dom';

export default function Banner() {
  const event = getBannerEvent();

  if (!event) return null;

  const label = event.isOngoing ? 'Ongoing' : 'Upcoming';

  return (
    <div className="event-banner">
      <Link to={`/event/${event.id}`} className="event-banner-link">
        <span className="event-banner-dot" aria-hidden="true" />
        <span>{label} — {event.title} · {event.dateStr}</span>
        <span className="event-banner-arrow" aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
