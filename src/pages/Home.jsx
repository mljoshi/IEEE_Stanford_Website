import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>

    {/* HERO */}
    <section className="hero hero-strong">
      <div className="container hero-inner">

        <h1 className="hero-big-title">Hardware, software, and systems at Stanford.</h1>
        <p className="hero-tagline">
          A focused community for students who like real circuits, chips,<br />
          systems, and infrastructure.
        </p>

        <div className="hero-button-row">
          <a className="hero-btn hero-btn-primary" href="events">See Events</a>
          <a className="hero-btn hero-btn-secondary" href="contact">Get Involved</a>
        </div>

        <div className="hero-mini-card hover-zoom">
          <h3>What we do</h3>
          <ul>
            <li>Invite engineers & alumni for technical talks.</li>
            <li>Mentor undergrads on EE/CS classes & careers.</li>
            <li>Run small socials: project nights, BBQs, Pi Day.</li>
          </ul>
        </div>

      </div>
    </section>

    {/* PROGRAMS */}
    <section className="section">
      <div className="container">
        <div className="section-kicker">Programs</div>
        <h2 className="section-title">Three things we care about.</h2>

        <div className="card-grid">
          <div className="card hover-zoom">
            <div className="card-title">Industry & research</div>
            <div className="card-body">
              Real-world talks from people building chips, systems, and ML infra.
            </div>
          </div>

          <div className="card hover-zoom">
            <div className="card-title">Students</div>
            <div className="card-body">
              Mentoring on classes, research groups, and hardware career routes.
            </div>
          </div>

          <div className="card hover-zoom">
            <div className="card-title">Community</div>
            <div className="card-body">
              A few well-run events each quarter instead of random pizza talks.
            </div>
          </div>
        </div>
      </div>
    </section>

  {/* REBOOT */}
  <section className="section" style={{ background: '#fafafa' }}>
      <div className="container">
        <div className="section-kicker">This year</div>
        <div className="mini-card hover-zoom">
          <h3 className="section-title">2025–2026 reboot.</h3>
          <ul className="reboot-list">
            <li>Clear playbooks for rooms, funding, and speakers.</li>
            <li>Simpler officer roles with clean handoff docs.</li>
            <li>Closer relationship with IEEE Santa Clara Valley + EE dept.</li>
            <li>A mailing list that actually survives turnover.</li>
          </ul>
        </div>

        <div className="reboot-card">
          <h3>Want to help?</h3>
          <p>If you care about chips, systems, or photonics, come help shape the rebuild.</p>
          <Link to="/contact" className="reboot-link">Contact us →</Link>
        </div>

      </div>
    </section>

  </>
  )
}
