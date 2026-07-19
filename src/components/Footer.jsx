import { Link } from 'react-router-dom'

const BRANCH_EMAIL = 'ieee@ee.stanford.edu'
const MAILING_LIST = 'https://forms.gle/bCdLGNa4bYvpxj3f7'
const LUMA_CALENDAR = 'https://luma.com/calendar/cal-LO8vEyiS1bADtaM'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer-inner">
        <div className="site-footer-brand">
          <span className="site-footer-name">Stanford IEEE</span>
          <span className="site-footer-tagline">Student Branch · Est. 2001</span>
        </div>

        <nav className="site-footer-nav" aria-label="Footer">
          <Link to="/events">Events</Link>
          <Link to="/team">Team</Link>
          <Link to="/chapters">Chapters</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="site-footer-links">
          <a href={MAILING_LIST} target="_blank" rel="noreferrer">Mailing list</a>
          <a href={LUMA_CALENDAR} target="_blank" rel="noreferrer">Calendar</a>
          <a href="https://www.linkedin.com/company/stanford-ieee/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${BRANCH_EMAIL}`}>{BRANCH_EMAIL}</a>
        </div>

        <p className="site-footer-copy">
          © {new Date().getFullYear()} Stanford IEEE Student Branch
        </p>
      </div>
    </footer>
  )
}
