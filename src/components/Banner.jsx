import { getBannerEvent, useLumaEvents } from '../data/lumaEvents';
import { Link } from 'react-router-dom';

export default function Banner() {
  const luma = useLumaEvents();
  const event = luma.status === 'ready' ? getBannerEvent(luma.upcoming) : null;

  if (!event) return null;

  const label = event.isOngoing ? 'Ongoing' : 'Upcoming';
  const content = (
    <>
      <span className="event-banner-dot" aria-hidden="true" />
      <span>{label} — {event.title} · {event.dateStr}</span>
      <span className="event-banner-arrow" aria-hidden="true">{event.href ? '↗' : '→'}</span>
    </>
  );

  return (
    <div className="event-banner">
      {event.href ? (
        <a href={event.href} target="_blank" rel="noreferrer" className="event-banner-link">
          {content}
        </a>
      ) : (
        <Link to={`/event/${event.id}`} className="event-banner-link">
          {content}
        </Link>
      )}
    </div>
  );
}
