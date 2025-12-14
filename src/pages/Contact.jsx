import React from 'react'

export default function Contact() {
  return (
    <section className="section">
    <div className="container">
      <div className="section-kicker">Contact</div>
      <h1 className="section-title">Get in touch with the branch.</h1>
      <p className="section-description">
        Whether you’re a student, alum, faculty member, or industry partner, we’d love to hear from you.
      </p>

      <div className="contact-grid-2col">

        {/* STUDENTS */}
        <div className="contact-card">
          <h3>For students</h3>
          <p>Email us anytime with questions or to get involved.</p>

          <p><strong>General questions:</strong> ieee@ee.stanford.edu</p>
          <a href="https://forms.gle/bCdLGNa4bYvpxj3f7" className="contact-btn" target="_blank">
            Join Mailing List
          </a>

          <br /><br />
          <a href="https://www.linkedin.com/groups/16220002/" className="contact-btn" target="_blank">
            LinkedIn Group
          </a>

          <p style={{marginTop:"1rem"}}>
            Interested in helping with events, logistics, or outreach?  
            Send a short message and we’ll follow up with next steps.
          </p>
        </div>

        {/* ALUMNI / PARTNERS */}
        <div className="contact-card">
          <h3>For alumni & partners</h3>
          <p>
            We're looking for speakers and partners in semiconductors, photonics, compute systems, networking, and AI hardware.
          </p>

          <p><strong>Speaking / tech talks:</strong> ieee@ee.stanford.edu</p>
          <p><strong>Sponsorships:</strong> ieee@ee.stanford.edu</p>

          <a href="mailto:ieee@ee.stanford.edu" className="contact-btn">
            Email the Branch
          </a>

          <p style={{marginTop:"1rem"}}>
            Happy to coordinate tech talks, recruiting visits, and collaborations.
          </p>
        </div>

      </div>

    </div>
  </section>
  )
}
