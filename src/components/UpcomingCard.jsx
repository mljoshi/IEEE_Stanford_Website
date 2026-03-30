import { useRef, useEffect } from 'react'

export default function UpcomingCard({ id, dateStr, title, details, index = 0 }) {
  const cardRef = useRef(null)
  const baseUrl = import.meta.env.BASE_URL

  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('visible')
        obs.disconnect()
      }
    }, { threshold: 0.15 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <a href={`${baseUrl}event/${id}`} className="block">
      <div
        className="upcoming-card flex items-start gap-2 md:gap-3"
        ref={cardRef}
        style={{ '--stagger': index }}
      >
        <div className="upcoming-left hidden md:block md:w-[84px] shrink-0 text-sm md:text-base leading-snug break-words whitespace-normal">{dateStr}</div>
        <div className="upcoming-right flex-1 min-w-0">
          <h4 className="text-black leading-tight flex items-center gap-2">
            <span className="min-w-0 break-words">{title}</span>
            <span className="md:hidden text-neutral-700 text-xs font-semibold max-w-[120px] break-words whitespace-normal">{dateStr}</span>
            <span className="upcoming-arrow ml-auto font-bold leading-none text-xl md:text-2xl" style={{ color: 'var(--red-accessible)' }} aria-hidden="true">→</span>
          </h4>
          <p className="leading-relaxed break-words">{details}</p>
        </div>
      </div>
    </a>
  )
}