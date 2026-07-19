import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function FeaturedHighlightCard({
  title,
  dateStr,
  details,
  image,
  placeholderLabel,
  id,
  pressLink,
  index = 0,
}) {
  return (
    <Reveal as="article" className="featured-card featured-card--interactive" delay={index * 70}>
      <Link to={`/event/${id}`} className="featured-card-link">
        <div className="featured-card-media">
          {image ? (
            <img src={image} alt={title} loading="lazy" />
          ) : (
            <div className="featured-card-placeholder">
              {placeholderLabel || title}
            </div>
          )}
        </div>
        <div className="featured-card-content">
          <div className="featured-card-meta">{dateStr}</div>
          <h3 className="featured-card-title">{title}</h3>
          <p className="featured-card-desc">{details}</p>
        </div>
      </Link>
      {pressLink && (
        <a
          href={pressLink}
          className="featured-card-press"
          target="_blank"
          rel="noreferrer"
        >
          Press coverage →
        </a>
      )}
    </Reveal>
  )
}
