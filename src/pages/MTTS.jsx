import ChapterPage from '../components/ChapterPage'

export default function MTTS() {
  return (
    <ChapterPage
      kicker="MTT-S Student Chapter"
      title="Microwave Theory and Technology"
      description="Technical talks, workshops, and networking around microwave engineering, wireless communications, and RF circuit design."
      actions={
        <>
          <a
            href="https://mailman.stanford.edu/mailman/listinfo/ieee-mtts-list"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Mailing list
          </a>
          <a href="https://www.mtt.org/" className="btn btn-secondary" target="_blank" rel="noreferrer">
            IEEE MTT-S
          </a>
        </>
      }
    >
      <section className="events-section">
        <h3>Upcoming Events</h3>
        <div className="events-list">
          <div className="event-card">
            <div className="event-date">
              <span className="event-month">SEP</span>
              <span className="event-day">17</span>
            </div>
            <div className="event-details">
              <h4>Electrical Enigineering Graduate Student Resource Fair</h4>
              <p className="event-meta">12:00 PM &middot; Packard Grove</p>
              <p>Come learn more about our student branch chapter!</p>
            </div>
          </div>
          <div className="event-card">
            <div className="event-date">
              <span className="event-month">OCT</span>
              <span className="event-day">09</span>
            </div>
            <div className="event-details">
              <h4>IEEE AP-S Distinguished Lecturer Workshop</h4>
              <p className="event-meta">Allen 101X Building</p>
              <p>
                A joint AP-S/MTT-S workshop featuring five distinguished lecturers:
                Sima Noghanian (CRN), Nacer Chatat (NASA/Caltech), Zhen Peng (University
                of Illinois), Richard E. Hodges (JPL), and Levent Sevgi (Istanbul
                Technical University). Organized by the IEEE Joint AP/MTT Student
                Branch Chapter.
              </p>
            </div>
          </div>
          <div className="event-card">
            <div className="event-date">
              <span className="event-month">OCT</span>
              <span className="event-day">29</span>
            </div>
            <div className="event-details">
              <h4>SciML Seminar: Prof. Costas Sarris</h4>
              <p className="event-meta">4:00 PM &middot; Packard 204</p>
              <p>
                Professor Costas Sarris (Electrical and Computer Engineering, University
                of Toronto) presents a seminar on scientific machine learning (SciML).
              </p>
            </div>
          </div>
          <div className="event-card">
            <div className="event-date">
              <span className="event-month">OCT</span>
              <span className="event-day">07</span>
            </div>
            <div className="event-details">
              <h4>LeCroy Seminar &amp; Equipment Demo</h4>
              <p className="event-meta">5:00 PM &middot; Location TBD</p>
              <p>
                A lecture followed by hands-on demo stations covering high-speed signal
                testing and measurement equipment, presented by LeCroy/Teledyne. Pizza
                provided.
              </p>
            </div>
          </div>
          <div className="event-card">
            <div className="event-date">
              <span className="event-month">TBD</span>
              <span className="event-day">--</span>
            </div>
            <div className="event-details">
              <h4>MTT-S Distinguished Lecture: Mahmoud Wagih</h4>
              <p className="event-meta">2:00 PM &middot; Lecture Room (booked 1:30–3:30 PM)</p>
              <p>
                Talk on sustainable and biodegradable electronics, covering carbon accounting methods,
                major contributors to electronics' carbon footprint, and the performance of sustainable
                materials.
              </p>
            </div>
            <div className="event-card">
              <div className="event-date">
                <span className="event-month">NOV</span>
                <span className="event-day">17</span>
              </div>
              <div className="event-details">
                <h4>MTT-S DML Talk: Dr. Chung-Tse Michael Wu</h4>
                <p className="event-meta">3:00 PM PT &middot; Zoom (link TBD)</p>
                <p>
                  "Sensing, Tracking, and Secured Communication with Artificial
                  Electromagnetic Materials" — Dr. Wu (Associate Professor, National
                  Taiwan University; formerly Rutgers) discusses metamaterial-based
                  leaky-wave antennas and their applications in real-time sensing,
                  remote monitoring, and secure wireless communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="contact-grid">
        <div className="contact-card">
          <h3>Board</h3>
          <p>
            <strong>Chair:</strong> Geneva Ecola —{' '}
            <a href="mailto:gecola@stanford.edu">gecola@stanford.edu</a>
            <br />
            <strong>Vice Chair:</strong> Austin Rothschild —{' '}
            <a href="mailto:austinxr@stanford.edu">austinxr@stanford.edu</a>
            <br />
            <strong>Treasurer:</strong> Tejus Rao—{' '}
            <a href="mailto:tejus@stanford.edu">tejus@stanford.edu</a>
            <br />
            <strong>Secretary:</strong> Faris Alghamdi
          </p>
        </div>
        <div className="contact-card">
          <h3>Get involved</h3>
          <p>We welcome speakers from industry and academia.</p>
          <a href="mailto:gecola@stanford.edu" className="btn btn-secondary">Contact the chair</a>
        </div>
      </div>
    </ChapterPage>
  )
}
