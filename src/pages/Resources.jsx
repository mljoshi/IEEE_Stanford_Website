import React from 'react'

export default function Resources() {
  return (
    <section className="section">
    <div className="container">
      <div className="section-kicker">Resources</div>
      <h1 className="section-title">Bay Area IEEE & Engineering Opportunities</h1>
      <p className="section-description">
        Key organizations, newsletters, and local engineering communities connected to the 
        IEEE Santa Clara Valley Section and the broader Silicon Valley ecosystem.
      </p>

      {/* SCV SECTION */}
      <details className="year-details">
        <summary className="year-summary">
          <strong>IEEE Santa Clara Valley (SCV) Section</strong>
        </summary>
        <div className="year-body">
          <p>
            The Stanford IEEE Student Branch is part of the IEEE Santa Clara Valley Section, one of the
            most active IEEE sections in the world. The SCV Section organizes major technical talks,
            student support programs, and professional activities across Silicon Valley.
          </p>
          <p>
            <a href="https://www.ieee.org/communities/scv.html" target="_blank">
              Visit IEEE-SCV Section
            </a>
          </p>
        </div>
      </details>

      {/* eGRID */}
      <details className="year-details">
        <summary className="year-summary">
          <strong>eGrid — Upcoming IEEE Talks & Chapter Meetings</strong>
        </summary>
        <div className="year-body">
          <p>
            eGrid aggregates every IEEE Chapter event across the Bay Area, including technical
            talks, seminars, workshops, and networking events across dozens of IEEE societies.
          </p>
          <p>
            <a href="https://egrid.ieeesfbac.org" target="_blank">View eGrid Newsletter</a>
          </p>
        </div>
      </details>

      {/* CNSV */}
      <details className="year-details">
        <summary className="year-summary">
          <strong>IEEE-CNSV (Consultants’ Network of Silicon Valley)</strong>
        </summary>
        <div className="year-body">
          <p>
            CNSV is an IEEE-affiliated professional group with monthly presentations on the 
            2nd Tuesday of each month. Meetings are available both in-person and via Zoom and 
            cover consulting, entrepreneurship, and cutting-edge engineering topics.
          </p>
          <p>
            <a href="https://www.californiaconsultants.org" target="_blank">
              Visit CaliforniaConsultants.org
            </a>
          </p>
        </div>
      </details>

      {/* SVEC */}
      <details className="year-details">
        <summary className="year-summary">
          <strong>Silicon Valley Engineering Council (SVEC)</strong>
        </summary>
        <div className="year-body">
          <p>
            SVEC represents multiple engineering societies across Silicon Valley. They host the annual 
            Engineers Week Banquet and provide competitive engineering scholarships for students.
          </p>
          <p>
            Scholarship applications are currently open—see details at:
          </p>
          <p>
            <a href="https://www.svec.org" target="_blank">Visit SVEC.org</a>
          </p>
        </div>
      </details>

    </div>
  </section>
  )
}
