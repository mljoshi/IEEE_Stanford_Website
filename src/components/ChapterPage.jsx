import { PageHeader } from './Section'

export default function ChapterPage({ kicker, title, description, actions, children }) {
  return (
    <section className="section page-content">
      <div className="container">
        <PageHeader kicker={kicker} title={title} description={description} />
        {actions && <div className="btn-row">{actions}</div>}
        {children}
      </div>
    </section>
  )
}
