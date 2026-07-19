import Reveal from './Reveal'

export default function Section({
  kicker,
  title,
  description,
  children,
  className = '',
  compact = false,
  wide = false,
  id,
  animateHeader = true,
}) {
  const header = (kicker || title || description) && (
    <header className="section-header">
      {kicker && <p className="section-kicker">{kicker}</p>}
      {title && <h2 className="section-title">{title}</h2>}
      {description && <p className="section-description">{description}</p>}
    </header>
  )

  return (
    <section
      id={id}
      className={`section${compact ? ' section--compact' : ''}${className ? ` ${className}` : ''}`}
    >
      <div className={`container${wide ? ' container-wide' : ''}`}>
        {animateHeader && header ? <Reveal>{header}</Reveal> : header}
        {children}
      </div>
    </section>
  )
}

export function PageHeader({ kicker, title, description }) {
  return (
    <Reveal>
      <header className="page-header">
        {kicker && <p className="section-kicker">{kicker}</p>}
        {title && <h1 className="page-title">{title}</h1>}
        {description && <p className="page-description">{description}</p>}
      </header>
    </Reveal>
  )
}
