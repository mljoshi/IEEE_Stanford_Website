import { getBannerEvent } from '../data/eventsPageData';
import { Link } from 'react-router-dom';

export default function Banner() {
  const event = getBannerEvent();

  if (!event) return null;

  const label = event.isOngoing ? 'Ongoing Event!' : 'Upcoming Event!';

  return (
    <div className="bg-[#8c1515] py-2 px-4 text-center text-sm font-medium">
      <Link to={`/event/${event.id}`} className="text-white hover:text-gray-300 hover:underline">
        {label} • {event.title} • {event.dateStr}
      </Link>
    </div>
  );
}
