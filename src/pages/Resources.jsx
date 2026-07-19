import { Link } from 'react-router-dom'
import { PageHeader } from '../components/Section'

const baseUrl = import.meta.env.BASE_URL

const resources = [
  {
    id: 'scv',
    title: 'IEEE Santa Clara Valley Section',
    paragraphs: [
      'The Stanford IEEE Student Branch is part of the IEEE Santa Clara Valley Section — one of the most active IEEE sections in the world.',
    ],
    link: { label: 'Visit IEEE-SCV Section', href: 'https://www.ieee.org/communities/scv.html' },
  },
  {
    id: 'egrid',
    title: 'eGrid — Bay Area IEEE Events',
    paragraphs: [
      'Aggregates IEEE chapter events across the Bay Area — talks, seminars, workshops, and networking.',
    ],
    link: { label: 'View eGrid', href: 'https://egrid.ieeesfbac.org' },
  },
  {
    id: 'cnsv',
    title: "IEEE-CNSV (Consultants' Network)",
    paragraphs: [
      'Monthly presentations on consulting, entrepreneurship, and engineering topics — in-person and via Zoom.',
    ],
    link: { label: 'CaliforniaConsultants.org', href: 'https://www.californiaconsultants.org' },
  },
  {
    id: 'svec',
    title: 'Silicon Valley Engineering Council',
    paragraphs: [
      'Represents engineering societies across Silicon Valley. Hosts Engineers Week and student scholarships.',
    ],
    link: { label: 'SVEC.org', href: 'https://www.svec.org' },
  },
  {
    id: 'ecj',
    title: 'Electrical & Computer Journal (ECJ)',
    paragraphs: [
      "Stanford IEEE's student-run journal — browse past issues and submission history.",
    ],
    link: { label: 'ECJ archive', href: `${baseUrl}ecj/index.html`, external: false },
  },
]

export default function Resources() {
  return (
    <section className="section page-content">
      <div className="container">
        <PageHeader
          kicker="Resources"
          title="Bay Area IEEE & engineering."
          description={
            <>
              Organizations and newsletters connected to IEEE SCV and Silicon Valley. For Stanford chapters, see{' '}
              <Link to="/chapters">Chapters</Link>.
            </>
          }
        />

        <div className="card-grid card-grid--2">
          {resources.map(({ id, title, paragraphs, link }) => (
            <article key={id} className="card">
              <h3 className="card-title">{title}</h3>
              {paragraphs.map((p, i) => (
                <p key={i} className="card-body">{p}</p>
              ))}
              <p style={{ marginTop: '0.75rem', marginBottom: 0 }}>
                <a
                  href={link.href}
                  {...(link.external !== false ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  {link.label} →
                </a>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
