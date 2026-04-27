import React from 'react'


export default function EDS() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-kicker">EDS Student Chapter</div>
        <h1 className="section-title">Electron Devices Society</h1>
        <p className="section-description">
          We are the Stanford IEEE Electron Devices Society (EDS) student branch chapter. We organize technical talks, workshops, and networking around semiconductor devices, solid-state electronics, and micro/nano fabrication, aligned with campus research in device physics, IC process, and hardware.
        </p>

        <div className="contact-btn-row">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfQfyJxnFP3W_WyYjT_ofSeo_y9nYnISbUV3-6LmPTno1RBRQ/viewform" className="contact-btn" target="_blank" rel="noopener noreferrer">
            Interest Form
          </a>

          <a href="https://eds.ieee.org/" className="contact-btn" target="_blank" rel="noopener noreferrer">
            Learn More About IEEE EDS
          </a>
        </div>

        <div className="contact-grid-2col">
          <div className="contact-card">
            <h3>Board</h3>
            <p>
              <strong>Chair:</strong> Grace Sun
              <br />
              <a href="mailto:gracesn@stanford.edu">gracesn@stanford.edu</a>
            </p>
          </div>

          <div className="contact-card">
            <h3>Get involved</h3>
            <p>
              We welcome speakers from industry and academia. Interested in presenting your work or collaborating on events?
            </p>

            <div className="contact-btn-row">
              <a href="mailto:gracesn@stanford.edu" className="contact-btn">
                Contact the Chair
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
