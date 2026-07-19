const STUDENT_MAILING_LIST_URL = 'https://forms.gle/bCdLGNa4bYvpxj3f7'
const BRANCH_EMAIL = 'ieee@ee.stanford.edu'

export default function Contact() {
  return (
    <section className="section page-content">
      <div className="container">
        <header className="page-header">
          <p className="section-kicker">Contact</p>
          <h1 className="page-title">Get in touch.</h1>
          <p className="page-description">
            Students, alumni, faculty, and industry partners — we'd love to hear from you.
          </p>
        </header>

        <div className="contact-grid">
          <div className="contact-card">
            <h3>For students</h3>
            <p>Join the mailing list for event announcements, or reach out to get involved.</p>
            <div className="btn-row" style={{ justifyContent: 'flex-start' }}>
              <a href={STUDENT_MAILING_LIST_URL} className="btn btn-primary" target="_blank" rel="noreferrer">
                Mailing list
              </a>
              <a href="https://www.linkedin.com/company/stanford-ieee/" className="btn btn-secondary" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
            <p className="contact-card-note">
              Want to help with events or outreach? Email{' '}
              <a href={`mailto:${BRANCH_EMAIL}`}>{BRANCH_EMAIL}</a>.
            </p>
          </div>

          <div className="contact-card">
            <h3>For alumni</h3>
            <p>
              Stay connected — reunions, speaker opportunities, and mentoring current students.
            </p>
            <div className="btn-row" style={{ justifyContent: 'flex-start' }}>
              <a href={`mailto:${BRANCH_EMAIL}?subject=Alumni%20mailing%20list`} className="btn btn-primary">
                Join alumni list
              </a>
            </div>
            <p className="contact-card-note">
              Email us to be added to the alumni list while we update the signup form.
            </p>
          </div>

          <div className="contact-card">
            <h3>For partners</h3>
            <p>
              Speakers and partners in semiconductors, photonics, compute, networking, and AI hardware.
            </p>
            <div className="btn-row" style={{ justifyContent: 'flex-start' }}>
              <a
                href={`mailto:${BRANCH_EMAIL}?subject=Partnership%20interest%20with%20Stanford%20IEEE`}
                className="btn btn-primary"
              >
                Partnership interest
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
