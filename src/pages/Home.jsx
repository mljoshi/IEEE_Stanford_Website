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
          A focused community for students who like circuits, chips,<br />
          systems, and infrastructure.
        </p>

        <div className="hero-button-row">
          <Link to="/events" className="hero-btn hero-btn-primary">See Events</Link>
          <Link to="/contact" className="hero-btn hero-btn-secondary">Get Involved</Link>
        </div>
        
        {/* <div className="flex flex-col md:flex-row place-items-center">
          <div className="hero-mini-card hover-zoom mx-2 my-2 md:[min-height:225px]">
            <h3>What is IEEE?</h3>
            <p classname="text-sm">
              IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.
            </p>
          </div>
          <div className="hero-mini-card hover-zoom mx-2 my-2 md:[min-height:225px]">
            <h3>What we do</h3>
            <ul>
              <li>Invite engineers & alumni for technical talks.</li>
              <li>Mentor undergrads on EE/CS classes & careers.</li>
              <li>Run small socials: project nights, BBQs, Pi Day.</li>
            </ul>
          </div>

        </div> */}
      </div>
    </section>

    {/* PROGRAMS */}
    {/* <section className="section">
      <div className="container">
        <div className="section-kicker">Programs</div>
        <h2 className="section-title">Three things we care about.</h2>

        <div className="card-grid">
          <div className="card hover-zoom">
            <div className="card-title">Industry & Research</div>
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
    </section>*/}

  </>
  )
}
