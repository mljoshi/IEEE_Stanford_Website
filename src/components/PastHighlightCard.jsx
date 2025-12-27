export default function PastHighlightCard(props) {
  return (
    <article className="highlight-card">
      <div className="event-meta">{props.dateStr}</div>
      <div className="event-title">{props.title}</div>
      <p className="event-meta">{props.details}</p>
    </article>
  )
}