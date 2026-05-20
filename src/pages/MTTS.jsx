import React from 'react'

export default function MTTS() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-kicker">MTT-S Student Chapter</div>
        <h1 className="section-title">Microwave Theory and Techniques Society</h1>
        <p className="section-description">
          We are the Stanford IEEE Microwave Theory and Techniques Society (MTT-S) student branch chapter. We organize technical talks, workshops, and networking events centered around microwave engineering, wireless communications, and RF circuit design.
        </p>

        <div className="contact-btn-row">
          <a
            href="https://mailman.stanford.edu/mailman/listinfo/ieee-mtts-list"
            className="contact-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Mailing List
          </a>

          <a href="https://www.mtt.org/" className="contact-btn" target="_blank" rel="noopener noreferrer">
            Learn More About IEEE MTT-S
          </a>
        </div>

        <div className="contact-grid-2col">
          <div className="contact-card">
            <h3>Board</h3>
            <p>
              <strong>Chair:</strong> Geneva Ecola
              <br />
              <a href="mailto:gecola@stanford.edu">gecola@stanford.edu</a>
              <br />
              <strong>Vice Chair:</strong> Austin Rothschild
              <br />
              <a href="mailto:austinxr@stanford.edu">austinxr@stanford.edu</a>
              <br />
              <strong>Treasurer:</strong> Tejus Rao
              <br />
              <strong>Secretary:</strong> Faris Alghamdi
            </p>
          </div>

          <div className="contact-card">
            <h3>Get involved</h3>
            <p>
              We welcome speakers from industry and academia. Interested in presenting your work or collaborating on events?
            </p>

            <div className="contact-btn-row">
              <a href="mailto:gecola@stanford.edu" className="contact-btn">
                Contact the Chair
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
