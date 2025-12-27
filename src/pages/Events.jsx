import React, { useEffect, useRef } from 'react'
import UpcomingCard from '../components/UpcomingCard';
import { pastHighlightData, upcomingData } from '../data/eventsPageData';
import PastHighlightCard from '../components/PastHighlightCard';

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
      <h3 className="text-center">Upcoming</h3>

      {/* UPCOMING */}
      <div>
        {upcomingData.map((upcoming) => {
          return <UpcomingCard key={upcoming.id} {...upcoming}/>
        })}
      </div>

      {/* PAST HIGHLIGHTS */}
  <h2 className="section-title" style={{ fontSize: '1.2rem', marginTop: '3rem' }}>Past Highlights</h2>
      <div className="highlight-list">
        {pastHighlightData.map((highlight => {
          return <PastHighlightCard key={highlight.id} {...highlight} />
        }))}
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