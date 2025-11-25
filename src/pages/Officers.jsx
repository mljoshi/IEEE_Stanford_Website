import React from 'react'
import OfficerCard from '../components/OfficerCard'

export default function Officers() {
  const officers = [
    { id: 1, img: '/img/officers/luke.jpeg', name: 'Luke Qiao', role: 'Chair', bio: 'Luke Qiao is a junior and coterm MS student at Stanford University studying Electrical Engineering. He is passionate about anything involving PCB/IC design, analog/RF engineering, hardware, and music tech. He has previously worked on R&D work at Sandia National Laboratories, design verification at Apple and power electronics of a CubeSat at Stanford. Luke also loves music, and has been playing piano for 12 years.', href: 'https://www.linkedin.com/in/luke-qiao/' },
    { id: 2, img: '/img/officers/ethan.jpg', name: 'Ethan Song', role: 'Vice Chair', bio: 'Sophomore majoring in Electrical Engineering. Previously attended Duke University where he was Event Organizer for the student branch. Interested in photonics, semincoductors, and hardware systems. Outside of school, he enjoys playing piano, MMA, swimming, and running. Big fan of dogs and cats, has one of each at home.', href: 'https://www.linkedin.com/in/ethan-s0ng/' },
    { id: 3, img: '/img/officers/hannah.jpeg', name: 'Hannah Shu', role: 'Finance & Funding', bio: 'Hannah Shu is a junior at Stanford University majoring in Electrical Engineering. She is interested in signal processing, perception/sensing for autonomous vehicles, and AI systems. On campus, she helps organize TreeHacks with a focus on marketing and serves as the financial officer for the IEEE Stanford Student Branch. Outside of school, she enjoys photography and playing violin.', href: 'https://www.linkedin.com/in/hannah-shu/' },
    { id: 4, img: '/img/officers/milly.png', name: 'Milly', role: 'Marketing & Outreach', bio: 'Milly Wong is a junior studying Electrical Engineering with a Master’s in Computer Science on the hardware–software track. She is passionate about healthcare technologies, especially sensing systems, and works in Professor James Landay’s lab prototyping an ultrasound-based continuous blood pressure sensor, drawing on prior experience with EEG research. On campus, she is part of the Stanford Space Initiative’s CubeSat team and the Stanford Healthcare Design Challenge, where she explores how better system-level and mixed-signal design can improve real-world systems. Outside of school, Milly enjoys reading widely.', href: 'https://www.linkedin.com/in/millyyuwong/' },
    { id: 5, img: '/img/officers/kierra.jpeg', name: 'Kierra', role: 'Event Operations', bio: 'Junior majoring in EE on the physical science and tech track, outside of school I like to watch basketball and play tennis.', href: 'https://www.linkedin.com/in/kierra-barr/' },
    { id: 6, img: '/img/officers/brant.png', name: 'Brant Bueno', role: 'Industry Liason', bio: `Sophomore studying Electrical Engineering. I'm originally from Minnesota and proudly Ecuadorian. On campus, I lead Stanford Funbotics, bringing STEM to underrepresented communities, and serve as the corporate relations officer in Stanford’s SHPE chapter, building a strong Latino engineering network. I’m especially drawn to the intersection of embedded systems and AI/ML. Last summer, I interned at Amazon, focusing on modular computer vision devices. I work part-time with Stanford's Computer Forum, connecting students and tech companies. Outside of academia, I love to organize emails and hanging out with my friends in Gamma Zeta Alpha!`, href: '#' },
    { id: 7, img: '/img/officers/weston.png', name: 'Weston Keller', role: 'Industry Liason', bio: `Junior studying Electrical Engineering and Music. Studying abroad in Japan and interested in neuroscience/BCIs.`, href: 'https://www.linkedin.com/in/weston-keller/' },
    { id: 8, img: '/img/officers/conejo.jpg', name: 'Fabian Israel Conejo', role: 'Event Ops and Finance', bio: `Sophomore pursuing an Individually Designed Major in Engineering (IDMEN), tentatively titled Sustainable Systems and Power Engineering. Passionate about the intersection of sustainability, energy, and electrical engineering as it relates to modern power systems.`, href: 'https://www.linkedin.com/in/fabian-cornejo-8b9423282/' },
    { id: 9, img: '/img/officers/nubia.png', name: 'Nubia Correa', role: 'Marketing and Outreach', bio: `Nubia Correa is a senior studying Electrical Engineering at Stanford University, specializing in hardware-software systems and machine learning. She currently conducts research in Dr. Craig Levin's Molecular Imaging Instrumentation Lab (MIIL) on deep learning motion-correction algorithms for cardiac PET imaging. As Marketing & Outreach Officer for Stanford's IEEE Student Branch and Advocacy & Industry Chair for Women in Electrical Engineering club, she is passionate about connecting students to opportunities in technology and expanding access to STEM.`, href: 'https://www.linkedin.com/in/nubia-correa/' },
    { id: 10, img: '/img/officers/ege.png', name: 'Ege Turan', role: 'Industry Liason', bio: `I handle industry relations and connections. I’m a BS/MS EE student focused on hardware systems engineering, mechatronics, and sensing technology. I’m also a Lab Assistant at lab64, Stanford’s EE-run makerspace, where I help students bring their projects to life end-to-end.`, href: 'https://www.linkedin.com/in/ege-turan/' },
    { id: 11, img: '/img/officers/joshi.jpeg', name: 'Joshiro Lawrence', role: 'Website Developer', bio: `Joshiro Lawrence is a junior majoring in Computer Science. He is interested in machine learning, signal processing, educational technology, and pure math. Outside of the classroom, he enjoys playing hockey, reading, video games, and long-distance running.`, href: 'https://www.linkedin.com/in/joshiro-lawrence/' },
    { id: 12, img: '/img/officers/thomaslee.jpg', name: 'Thomas Lee', role: 'Faculty Counselor', bio: `Provides guidance on academic and professional direction for the branch.`, href: 'https://profiles.stanford.edu/thomas-lee' }
  ]
  const industryAdvisors = [
    {
      id: 13,
      img: '/img/officers/kim.jpeg',
      name: 'T. Kim Parnell, PhD, PE',
      role: 'IEEE Life Senior Member',
      bio: `Mechanical engineering expert specializing in forensic analysis, product failures, and patent disputes. With over 30 years of experience, he provides clear, defensible technical insight for high-stakes litigation as founder of Parnell Engineering & Consulting. A Life Senior Member of IEEE and ASME Fellow, he has led major engineering initiatives, collaborated with Stanford researchers, and presented nationally on failure mechanisms. His career includes expert testimony in numerous federal cases and forensic work on major industrial incidents such as the 1988 PEPCON explosion.`,
      href: 'https://www.linkedin.com/in/ParnellPEC'
    },
    {
      id: 14,
      img: '/img/officers/mohan.png',
      name: 'Mohan Sankaran',
      role: 'IEEE Senior Member',
      bio: `Experienced engineer with two decades of hands-on work across fintech, secure mobile systems, artificial intelligence, and cybersecurity. A Senior Member of IEEE, he contributes to the IEEE-USA AI Policy Committee (AIPC). He serves as a peer reviewer and has chaired technical sessions at IEEE conferences.`,
      href: 'https://www.linkedin.com/in/mohan-sankaran'
    },
    {
      id: 15,
      img: '/img/officers/tom.jpg',
      name: 'Tom Coughlin',
      role: 'IEEE President (2023)',
      bio: `Digital storage analyst and business/technology consultant. He has over 40 years in the data storage industry with engineering and senior management positions. Coughlin Associates consults, publishes books and market and technology reports and puts on digital storage and memory-oriented events. He is a regular contributor for forbes.com and M&E organization websites. He is an IEEE Fellow, 2025 IEEE Past President, Past-President IEEE-USA, Past Director IEEE Region 6 and Past Chair Santa Clara Valley IEEE Section, and is also active with SNIA and SMPTE.`,
      href: 'https://www.linkedin.com/in/thomas-coughlin-41a65/'
    }
  ]

  return (
    <>
        <section className="section">
        <div className="container">
            <div className="section-kicker">Team</div>
            <h1 className="section-title">2024–2025 officer team</h1>
            <p className="section-description">
                The Stanford IEEE Student Branch is being rebuilt after the pandemic.
                Roles are intentionally simple so new officers can plug in quickly and future years inherit a structure that actually works.
            </p>

    {/* ===================== CURRENT OFFICERS ===================== */}
  <div className="officer-grid">
    {officers.map(officer => (
      <OfficerCard key={officer.id} img={officer.img} name={officer.name} role={officer.role} bio={officer.bio} href={officer.href} />
    ))}
  </div>
    {/* ===================== INDUSTRY ADVISORS ===================== */}
    <div className="advisor-section">
        <div className="section-kicker">Advisors</div>
        <h2 className="section-title">Industry advisors</h2>
        <div className="officer-grid">
            {industryAdvisors.map(iA => (
              <OfficerCard key={iA.id} img={iA.img} name={iA.name} role={iA.role} bio={iA.bio} href={iA.href} />
            ))}
        </div>
    </div>
    {/*  ===================== PAST LEADERSHIP (UNCHANGED) ===================== */}
    {/* Past leadership TODO: turn these into container(s) to map */}
    <div className="past-officers">
        <div className="section-kicker">Legacy</div>
        <h2 className="section-title">Past leadership &amp; officers</h2>
        <p className="past-intro">
          Stanford IEEE has been run by many generations of students. Below is a curated archive of
          past officers and roles, so future teams can see the lineage they are building on.
        </p>

        {/* 2015-2016 */}
        <details className="year-details">
          <summary className="year-summary">
            <span className="year-label">2015–2016 </span>
            <span className="year-subtitle">Co-Chairs: Gary Lee &amp; Jeremy Bregman</span>
          </summary>
          <div className="year-body">
            <ul>
              <li><span className="year-role">Co-Chairs:</span> Gary Lee, Jeremy Bregman</li>
              <li><span className="year-role">Financial Officer:</span> Michael Leung</li>
              <li><span className="year-role">Industry Liaisons:</span> Jeremy Bregman, Karen Yang</li>
              <li><span className="year-role">Faculty Liaison:</span> Justin Doong</li>
              <li><span className="year-role">Women in Engineering Chair:</span> Neeharika Madduri</li>
              <li><span className="year-role">Executive Board Member:</span> Roshni Cooper</li>
              <li><span className="year-role">General Board Members:</span> Negin Behzadian, Olivier Jin, Richard Mu, Logan Su, Dan Yu, Anna Zeng</li>
            </ul>
          </div>
        </details>

        {/* 2014 */}
        <details className="year-details">
          <summary className="year-summary">
            <span className="year-label">2013–2014 </span>
            <span className="year-subtitle">Chair: Jai Sajnani · Vice Chair: Roshni Cooper</span>
          </summary>
          <div className="year-body">
            <ul>
              <li><span className="year-role">Chair:</span> Jai Sajnani</li>
              <li><span className="year-role">Vice Chair:</span> Roshni Cooper</li>
              <li><span className="year-role">EDS Chair:</span> Vijay Narasimhan</li>
              <li><span className="year-role">Women in Engineering Coordinator:</span> Nina Vaidya</li>
              <li><span className="year-role">Financial Officer:</span> Tian Zhao</li>
              <li><span className="year-role">Branding Officer:</span> Gary Lee</li>
              <li><span className="year-role">Outreach Officer:</span> Justin Doong</li>
              <li><span className="year-role">Women in Engineering Coordinator:</span> Naomi Chetan Shah</li>
              <li><span className="year-role">PuzzleMasters:</span> Iretiayo Akinola, Adekunle Awonjinrin</li>
              <li><span className="year-role">Community Impact Officer:</span> Vanessa Friedemann</li>
              <li><span className="year-role">Social Officer:</span> Adebia Ntoso</li>
              <li><span className="year-role">Academic/Faculty Liaison:</span> Vivek Jain</li>
              <li><span className="year-role">General Officer:</span> Mark Kwon</li>
            </ul>
          </div>
        </details>

        {/* 2013 */}
        <details className="year-details">
          <summary className="year-summary">
            <span className="year-label">2012–2013 </span>
            <span className="year-subtitle">Chair: Roshni Cooper · Vice Chair: Howard Ro</span>
          </summary>
          <div className="year-body">
            <ul>
              <li><span className="year-role">Chair:</span> Roshni Cooper</li>
              <li><span className="year-role">Vice Chair:</span> Howard Ro</li>
              <li><span className="year-role">EDS Leader:</span> Vijay Narasimhan</li>
              <li><span className="year-role">Women in Engineering Leader:</span> Uche Monu</li>
              <li><span className="year-role">Industry Liaisons:</span> Jai Sajnani, Zachary Kaufman, Nina Vaidya</li>
              <li><span className="year-role">Faculty Liaison:</span> Scott Powers</li>
              <li><span className="year-role">Corporate Liaison:</span> Tian Zhao</li>
              <li><span className="year-role">Social Officer:</span> Vivek Jain</li>
              <li><span className="year-role">General Officers:</span> Rahul Pandey, Vinith Misra, Annie Chiu</li>
              <li><span className="year-role">Webmaster:</span> Akshay Agrawal</li>
            </ul>

            <p className="year-bio">
              Roshni and team expanded technical talks, industry partnerships, and mentoring, while
              running the New Frontiers in Computing conference with local IEEE chapters.
            </p>
          </div>
        </details>

        {/* 2012 */}
        <details className="year-details">
          <summary className="year-summary">
            <span className="year-label">2011–2012 </span>
            <span className="year-subtitle">President: Howard Ro</span>
          </summary>
          <div className="year-body">
            <ul>
              <li><span className="year-role">President:</span> Howard Ro</li>
              <li><span className="year-role">General Officer / Corporate Liaison:</span> Rahul Pandey</li>
              <li><span className="year-role">EDS Leader:</span> Vijay Narasimhan</li>
              <li><span className="year-role">Financial Officer:</span> Sameep Mehrotra</li>
              <li><span className="year-role">Public Relations Officer:</span> Long (Peter) Zou</li>
              <li><span className="year-role">Professional Org/Mentoring Officer:</span> Roshni Cooper</li>
              <li><span className="year-role">Mentoring &amp; Outreach:</span> Corinne Horn</li>
              <li><span className="year-role">Corporate Liaisons:</span> Pranav Pai, Tian Zhao</li>
              <li><span className="year-role">Academic Liaison:</span> Hongxia Zhong</li>
            </ul>

            <p className="year-bio">
              This team focused on mentorship, academic connections, and outreach programming,
              especially for younger students and prospective engineers.
            </p>
          </div>
        </details>

        {/* 2010-2011 (Frank's era) */}
        <details className="year-details">
          <summary className="year-summary">
            <span className="year-label">2010–2011 </span>
            <span className="year-subtitle">Chair: Frank Nothaft · Vice Chair: James Chen</span>
          </summary>
          <div className="year-body">
            <ul>
              <li><span className="year-role">Chair:</span> Frank Nothaft</li>
              <li><span className="year-role">Vice Chair:</span> James Chen</li>
              <li><span className="year-role">Secretary/Treasurer:</span> Justin Hou</li>
              <li><span className="year-role">Professional Activities:</span> Steven Soneff, Mingyu Kim, Johnson Hsieh</li>
              <li><span className="year-role">Student Activities:</span> Frank Lin, Katherine Chen</li>
              <li><span className="year-role">Educational Activities:</span> James Hsi</li>
              <li><span className="year-role">Webmaster:</span> Tracy Chou</li>
              <li><span className="year-role">Grill Sergeants:</span> Ian Wong, Vincent Mei</li>
              <li><span className="year-role">Advisers:</span> Siddharth Jonathan, Nitin Dua</li>
            </ul>

            <p className="year-bio">
              Under Frank and James, Stanford IEEE grew its mix of technical talks, industry events,
              and social gatherings — including the legendary BBQs led by Grill Sergeants Ian and Vincent.
            </p>
          </div>
        </details>

        {/* 2001-2002 */}
        <details className="year-details">
          <summary className="year-summary">
            <span className="year-label">2001–2002 </span>
            <span className="year-subtitle">President: Clara Shih</span>
          </summary>
          <div className="year-body">
            <ul>
              <li><span className="year-role">President:</span> Clara Shih</li>
              <li><span className="year-role">Vice President:</span> Eric Tao</li>
              <li><span className="year-role">Treasurer:</span> Jon Effrat</li>
              <li><span className="year-role">Secretary:</span> Terence Chia</li>
              <li><span className="year-role">Internal Affairs Coordinator:</span> Chiung-Fu Shih</li>
              <li><span className="year-role">VP Internal / Campus Activities:</span> Patrick Wong</li>
              <li><span className="year-role">Corporate Liaisons:</span> Pierre Ponce, Vidya Chander, Elizabeth Williams</li>
              <li><span className="year-role">Undergraduate Coordinator:</span> Marlayna Lyndra Tuiasosopo</li>
              <li><span className="year-role">Graduate Coordinator:</span> Ryan Barrett</li>
              <li><span className="year-role">Professional Liaisons:</span> Manoneet Singh, Jonathan David, Ken Doniger</li>
              <li><span className="year-role">Webmaster:</span> Eric Sun</li>
              <li><span className="year-role">Faculty Sponsor:</span> Prof. Edward McCluskey</li>
            </ul>

            <p className="year-bio">
              This early-2000s team built core traditions in corporate outreach, professional liaisons,
              and mentoring that later branches would inherit and expand.
            </p>
          </div>
        </details>

      </div>
    </div>
    </section>
    </>
  )
}
