import React from 'react'

const CHAIR_EMAIL = 'sq51e51@stanford.edu'
const MAILING_LIST_URL = 'mailto:sq51e51@stanford.edu' // TODO: replace with actual mailing list URL

export default function PES() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-kicker">PES Student Chapter</div>
        <h1 className="section-title">Power &amp; Energy Society</h1>
        <p className="section-description">
          We are the Stanford IEEE Power &amp; Energy Society (PES) student branch chapter. We organize technical talks, workshops, and networking around power systems, energy conversion, grid modernization, and power electronics, aligned with IEEE PES activities and standards work.
        </p>

        <div className="contact-btn-row">
          <a href={MAILING_LIST_URL} className="contact-btn" target="_blank" rel="noopener noreferrer">
            Join Mailing List
          </a>

          <a href="https://www.ieee-pes.org/" className="contact-btn" target="_blank" rel="noopener noreferrer">
            Learn More About IEEE PES
          </a>
        </div>

        <div className="contact-grid-2col">
          <div className="contact-card">
            <h3>Board</h3>
            <p>
              <strong>Chair:</strong> Fabian Cornejo
              <br />
              <a href={`mailto:${CHAIR_EMAIL}`}>{CHAIR_EMAIL}</a>
            </p>
          </div>

          <div className="contact-card">
            <h3>Get involved</h3>
            <p>
              We welcome speakers from industry and academia. Interested in presenting your work or collaborating on events?
            </p>

            <div className="contact-btn-row">
              <a href={`mailto:${CHAIR_EMAIL}`} className="contact-btn">
                Contact the Chair
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
