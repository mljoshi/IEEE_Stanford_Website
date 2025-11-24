import React, { useEffect, useRef } from 'react'

export default function Events() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const cards = container.querySelectorAll('.highlight-card');
    if (!cards.length) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });
    cards.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);
  return (
    <section className="section">
  <div className="container" ref={containerRef}>

      <div className="section-kicker">Events</div>
      <h3>Upcoming</h3>

      {/* UPCOMING */}
      <div className="upcoming-card">
        <div className="upcoming-left">2025–2026</div>
        <div className="upcoming-right">
          <h4>Upcoming Stanford IEEE Events</h4>
          <p>Our winter quarter schedule will be announced soon. Join the mailing list to stay updated.</p>
        </div>
      </div>

      {/* PAST HIGHLIGHTS */}
  <h2 className="section-title" style={{ fontSize: '1.2rem', marginTop: '3rem' }}>Past Highlights</h2>
      <div className="highlight-list">

        <article className="highlight-card">
          <div className="event-meta">2009–2010</div>
          <div className="event-title">Jensen Huang · Tegra & NVIDIA's Mobile Strategy</div>
          <p className="event-meta">Founder & CEO of NVIDIA. One of the most influential leaders in AI and computing.</p>
        </article>

        <article className="highlight-card">
          <div className="event-meta">2008–2009</div>
          <div className="event-title">Marissa Mayer · Google: Creativity & Innovation</div>
          <p className="event-meta">Former CEO of Yahoo. Early Google leader and Silicon Valley pioneer.</p>
        </article>

        <article className="highlight-card">
          <div className="event-meta">2009–2010</div>
          <div className="event-title">Mark Horowitz · Trends in VLSI Automation</div>
          <p className="event-meta">Stanford EE professor, Rambus co-founder, pioneer of modern VLSI design.</p>
        </article>

        <article className="highlight-card">
          <div className="event-meta">2010–2011</div>
          <div className="event-title">Clara Shih · Stanford IEEE Tech Talk</div>
          <p className="event-meta">Founder of Hearsay Systems, former Salesforce exec, Starbucks Board member.</p>
        </article>

        <article className="highlight-card">
          <div className="event-meta">2011–2012</div>
          <div className="event-title">Martin Hellman · Public Key Cryptography</div>
          <p className="event-meta">Turing Award winner and co-inventor of modern cryptography.</p>
        </article>

        <article className="highlight-card">
          <div className="event-meta">2011–2012</div>
          <div className="event-title">Fei-Fei Li · Lunch with CS/EE Faculty</div>
          <p className="event-meta">Co-director of Stanford HAI, world leader in computer vision and AI.</p>
        </article>

        <article className="highlight-card">
          <div className="event-meta">2011–2012</div>
          <div className="event-title">Naveen Verma · Embedded DSP to Embedded AI</div>
          <p className="event-meta">Dean of Engineering at Princeton; expert in ML hardware & biosensing.</p>
        </article>

        <article className="highlight-card">
          <div className="event-meta">2008–2009</div>
          <div className="event-title">Craig Weissman · Salesforce.com Platform</div>
          <p className="event-meta">Founding CTO of Salesforce Platform, co-founder of Duetto (cloud SaaS).</p>
        </article>

        <article className="highlight-card">
          <div className="event-meta">2008–2009</div>
          <div className="event-title">Burak GökTürk · Visual Search & Riya/Like.com</div>
          <p className="event-meta">Founder of Like.com (acquired by Google). Vision & AI leader.</p>
        </article>

        <article className="highlight-card">
          <div className="event-meta">2011–2012</div>
          <div className="event-title">Tom Coughlin · Mountains of Data</div>
          <p className="event-meta">IEEE President (2023). Leading voice in storage and data systems.</p>
        </article>

      </div>

      {/* COMPLETE ARCHIVE */}
  <h3 className="section-title" style={{ fontSize: '1.1rem', marginTop: '2.8rem' }}>Complete Archive</h3>

      <div className="archive-container">

        <details>
          <summary>2013–2014</summary>
          <div className="year-events">
            <p>Walmart Labs · Big/Fast/Heterogenous Data — Feb 12, 2013</p>
          </div>
        </details>

        <details>
          <summary>2011–2012</summary>
          <div className="year-events">
            <p>Feedback Communication Systems — Nov 30, 2011</p>
            <p>Embedded AI Biomedical Sensors — Nov 16, 2011</p>
            <p>Groupon Tech Talk — Nov 14, 2011</p>
            <p>Lunch with Women Faculty — Nov 10, 2011</p>
            <p>Body Area Networks — Oct 26, 2011</p>
            <p>Millibits to Terabits — Oct 21, 2011</p>
            <p>EDS Discussion — Oct 21, 2011</p>
            <p>Big/Little Sister Mentorship — Oct 20, 2011</p>
            <p>Twitter Tech Talk — Oct 18, 2011</p>
            <p>Women Engineers Picnic — Oct 10, 2011</p>
            <p>Boeing Ethics Talk — Oct 7, 2011</p>
            <p>IEEE BBQ Night — Oct 6, 2011</p>
            <p>Public Key Crypto — Sep 28, 2011</p>
            <p>Mountains of Data — Sep 15, 2011</p>
          </div>
        </details>

        <details>
          <summary>2010–2011</summary>
          <div className="year-events">
            <p>New Frontiers in Computing — July 16, 2011</p>
            <p>Industry vs B-School vs Grad School — May 5, 2011</p>
            <p>ESD Distinguished Lecture — Apr 14, 2011</p>
            <p>Writing Productivity Workshop — Apr 6, 2011</p>
            <p>Lockheed Systems Engineering — Mar 29, 2011</p>
            <p>IEEE/ACM Pi Day — Mar 14, 2011</p>
            <p>IP Law & Entrepreneurship — Mar 2, 2011</p>
            <p>Flow of Information in Networks — Feb 22, 2011</p>
            <p>GOLD Opportunities — Feb 17, 2011</p>
            <p>Clash of the Bay Mixer — Feb 13, 2011</p>
            <p>Apple Networking Night — Jan 25, 2011</p>
            <p>Social Media & Web Search — Jan 10, 2011</p>
            <p>Mentorship Kickoff — Jan 5, 2011</p>
          </div>
        </details>

        <details>
          <summary>2009–2010</summary>
          <div className="year-events">
            <p>Tomographic Imaging — Nov 4, 2010</p>
            <p>Congressional Fellowship Info — Nov 4, 2010</p>
            <p>NVIDIA Tegra Strategy (Huang) — Nov 1, 2010</p>
            <p>Trends in VLSI (Horowitz) — Oct 26, 2010</p>
            <p>Clara Shih Tech Talk — Oct 24, 2010</p>
            <p>Twitter Tech Talk — Oct 19, 2010</p>
            <p>IEEE BBQ Night — Sep 24, 2010</p>
            <p>Back to School BBQ — Sep 27, 2009</p>
            <p>EE vs CS Orientation — Oct 2, 2009</p>
            <p>Mentorship Kickoff — Oct 5, 2009</p>
            <p>Schlumberger Info Session — Oct 6, 2009</p>
          </div>
        </details>

        <details>
          <summary>2008–2009</summary>
          <div className="year-events">
            <p>IEEE BBQ — Oct 6, 2008</p>
            <p>KLA-Tencor Session — Oct 20, 2008</p>
            <p>Marvell Info Session — Oct 28, 2008</p>
            <p>Orbital Sciences — Feb 1, 2008</p>
            <p>Marvell (Wong/Yu/Fang) — Jan 28, 2008</p>
            <p>Salesforce.com Talk — Dec 3, 2007</p>
            <p>Google (Marissa Mayer) — Nov 28, 2007</p>
            <p>Visual Search (GökTürk) — Nov 2, 2007</p>
            <p>Entrepreneurship in Latin America — Oct 29, 2007</p>
          </div>
        </details>

      </div>

    </div>
  </section>
    )
}