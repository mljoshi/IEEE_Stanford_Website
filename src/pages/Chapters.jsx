import React from 'react'
import { Link } from 'react-router-dom'
import {
  branchCalendarUrl,
  chapters,
  chaptersPageMeta,
  // formingChapterBlurb,
} from '../data/chaptersPageData'

export default function Chapters() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-kicker">{chaptersPageMeta.kicker}</div>
        <h1 className="section-title">{chaptersPageMeta.title}</h1>
        <p className="section-description">{chaptersPageMeta.description}</p>

        <p className="section-description" style={{ marginTop: '-0.5rem' }}>
          For all upcoming branch events, see our{' '}
          <a href={branchCalendarUrl} target="_blank" rel="noreferrer">
            Luma calendar
          </a>{' '}
          and the{' '}
          <Link to="/events">Events</Link> page. For Bay Area chapter talks across the section, see{' '}
          <Link to="/resources">Resources</Link> (eGrid).
        </p>

        {chapters.map((ch) => (
          <details key={ch.id} className="year-details" open={false}>
            <summary className="year-summary">
              <strong>{ch.summaryTitle}</strong>
              {ch.badge ? (
                <span
                  style={{
                    marginLeft: '0.5rem',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    opacity: 0.75,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}
                >
                  {ch.badge}
                </span>
              ) : null}
            </summary>
            <div className="year-body">
              {ch.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {ch.chapterPage ? (
                <div className="contact-btn-row" style={{ marginTop: '0.75rem' }}>
                  <Link to={ch.chapterPage.path} className="contact-btn">
                    {ch.chapterPage.label}
                  </Link>
                </div>
              ) : null}
              {ch.links?.length ? (
                <p>
                  {ch.links.map((link, i) => (
                    <React.Fragment key={link.href}>
                      {i > 0 ? ' · ' : null}
                      <a href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    </React.Fragment>
                  ))}
                </p>
              ) : null}
            </div>
          </details>
        ))}

        {/* <details className="year-details">
          <summary className="year-summary">
            <strong>{formingChapterBlurb.summaryTitle}</strong>
          </summary>
          <div className="year-body">
            {formingChapterBlurb.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p>
              {formingChapterBlurb.links.map((link, i) => (
                <React.Fragment key={link.href}>
                  {i > 0 ? ' · ' : null}
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                </React.Fragment>
              ))}
            </p>
          </div>
        </details> */}
      </div>
    </section>
  )
}
