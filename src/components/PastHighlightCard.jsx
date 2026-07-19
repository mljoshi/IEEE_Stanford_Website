import Reveal from './Reveal'

export default function PastHighlightCard({ dateStr, title, details, index = 0 }) {
  return (
    <Reveal delay={index * 50} as="article" className="highlight-card highlight-card--interactive">
      <div className="highlight-card-meta">{dateStr}</div>
      <div className="highlight-card-title">{title}</div>
      <p className="highlight-card-desc">{details}</p>
    </Reveal>
  )
}
