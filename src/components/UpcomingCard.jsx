export default function UpcomingCard(props) {
  const baseUrl = import.meta.env.BASE_URL
  return (
    <a href={`${baseUrl}event/${props.id}`} className="block">
      <div className="upcoming-card flex items-start gap-2 sm:gap-3">
        <div className="upcoming-left hidden sm:block sm:w-[84px] shrink-0 text-sm sm:text-base leading-snug break-words whitespace-normal">{props.dateStr}</div>
        <div className="upcoming-right flex-1 min-w-0">
          <h4 className="text-black leading-tight flex items-center gap-2">
            <span className="min-w-0 break-words">{props.title}</span>
            <span className="sm:hidden text-neutral-700 text-xs font-semibold max-w-[120px] break-words whitespace-normal">{props.dateStr}</span>
            <span className="ml-auto text-red-900 font-bold leading-none text-xl sm:text-2xl" aria-hidden="true">→</span>
          </h4>
          <p className="leading-relaxed break-words">{props.details}</p>
        </div>
      </div>
    </a>
  )
}