import { getBannerEvent } from '../data/eventsPageData';
import { Link } from 'react-router-dom';

export default function Banner() {
  const event = getBannerEvent();
  
  if (!event) return null;
  
  return (
    <div className="bg-[#8c1515] py-2 px-4 text-center text-sm font-medium">
      <Link to={`/event/${event.id}`} className="text-white hover:text-gray-300 hover:underline">
        Upcoming Event! • {event.title} • {event.dateStr}
      </Link>
    </div>
  );
}
