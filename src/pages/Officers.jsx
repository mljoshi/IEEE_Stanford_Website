import React from 'react'
import OfficerCard from '../components/OfficerCard'

export default function Officers() {
  const baseUrl = import.meta.env.BASE_URL
  const officers = [
  {
    id: 1,
    img: `${baseUrl}img/officers/luke.jpeg`,
    name: 'Luke Qiao',
    major: 'MS in Electrical Engineering',
    role: 'Chair',
    bio: 'He focuses on PCB and IC design, analog/RF engineering, and hardware systems. He has worked in R&D at Sandia National Laboratories, design verification at Apple, and CubeSat power electronics at Stanford. In his free time, he enjoys playing piano and exploring music technology.',
    href: 'https://www.linkedin.com/in/luke-qiao/'
  },
  {
    id: 2,
    img: `${baseUrl}img/officers/ethan.jpg`,
    name: 'Ethan Song',
    major: 'BS in Electrical Engineering',
    role: 'Vice Chair',
    bio: 'He is interested in photonics, semiconductors, and hardware systems. His experience includes event organizing at Duke University and involvement in various engineering activities at Stanford. Outside academics, he enjoys playing piano, MMA, swimming, and running.',
    href: 'https://www.linkedin.com/in/ethan-s0ng/'
  },
  {
    id: 3,
    img: `${baseUrl}img/officers/hannah.jpeg`,
    name: 'Hannah Shu',
    major: 'BS in Electrical Engineering',
    role: 'Finance & Funding',
    bio: 'She focuses on signal processing, sensing systems, and perception for autonomous vehicles. She helps organize TreeHacks and manages finances for the IEEE Stanford Student Branch. In her free time, she enjoys photography and playing violin.',
    href: 'https://www.linkedin.com/in/hannah-shu/'
  },
  {
    id: 4,
    img: `${baseUrl}img/officers/milly.png`,
    name: 'Milly Wong',
    major: 'BS in Electrical Engineering; MS in Computer Science',
    role: 'Marketing & Outreach',
    bio: 'She is interested in healthcare technologies, sensing systems, and hardware–software integration. She works on prototyping an ultrasound-based continuous blood pressure sensor and contributes to CubeSat and healthcare design teams on campus. Outside academics, she enjoys reading widely.',
    href: 'https://www.linkedin.com/in/millyyuwong/'
  },
  {
    id: 5,
    img: `${baseUrl}img/officers/kierra.jpeg`,
    name: 'Kierra',
    major: 'BS in Electrical Engineering',
    role: 'Event Operations',
    bio: 'She studies physical science and technology within electrical engineering and is involved in event coordination for the branch. She enjoys watching basketball and playing tennis in her free time.',
    href: 'https://www.linkedin.com/in/kierra-barr/'
  },
  {
    id: 6,
    img: `${baseUrl}img/officers/brant.png`,
    name: 'Brant Bueno',
    major: 'BS in Electrical Engineering',
    role: 'Industry Liaison',
    bio: 'He is interested in embedded systems and the intersection of AI/ML with hardware. His experience includes interning at Amazon on modular computer vision devices and supporting corporate relations through SHPE and the Computer Forum. Outside academics, he enjoys organizing, community outreach, and spending time with friends.',
    href: '#'
  },
  {
    id: 7,
    img: `${baseUrl}img/officers/weston.png`,
    name: 'Weston Keller',
    major: 'BS in Electrical Engineering and Music',
    role: 'Industry Liaison',
    bio: 'He focuses on neuroscience, brain–computer interfaces, and interdisciplinary applications of electrical engineering. He is currently studying abroad in Japan and exploring cross-cultural perspectives in engineering and music.',
    href: 'https://www.linkedin.com/in/weston-keller/'
  },
  {
    id: 8,
    img: `${baseUrl}img/officers/conejo.jpg`,
    name: 'Fabian Israel Conejo',
    major: 'BS in Sustainable Systems and Power Engineering (IDMEN)',
    role: 'Event Ops and Finance',
    bio: 'He is passionate about sustainable energy systems and the intersection of electrical engineering with modern power infrastructure. His work centers on designing environmentally responsible engineering solutions.',
    href: 'https://www.linkedin.com/in/fabian-cornejo-8b9423282/'
  },
  {
    id: 9,
    img: `${baseUrl}img/officers/nubia.png`,
    name: 'Nubia Correa',
    major: 'BS in Electrical Engineering',
    role: 'Marketing and Outreach',
    bio: 'She specializes in hardware–software systems and machine learning, with research in deep-learning motion correction for cardiac PET imaging. She also supports outreach and advocacy efforts for IEEE and Women in Electrical Engineering. She is passionate about expanding access to opportunities in STEM.',
    href: 'https://www.linkedin.com/in/nubia-correa/'
  },
  {
    id: 10,
    img: `${baseUrl}img/officers/ege.png`,
    name: 'Ege Turan',
    major: 'BS/MS in Electrical Engineering',
    role: 'Industry Liaison',
    bio: 'He focuses on hardware systems, mechatronics, and sensing technology. He also works as a Lab Assistant at lab64, helping students develop projects from concept to completion.',
    href: 'https://www.linkedin.com/in/ege-turan/'
  },
  {
    id: 11,
    img: `${baseUrl}img/officers/joshi.jpeg`,
    name: 'Joshiro Lawrence',
    major: 'BS in Computer Science',
    role: 'Website Developer',
    bio: 'He is interested in machine learning, signal processing, educational technology, and pure mathematics. Outside the classroom, he enjoys hockey, reading, gaming, and long-distance running.',
    href: 'https://www.linkedin.com/in/joshiro-lawrence/'
  },
  {
    id: 12,
    img: `${baseUrl}img/officers/thomaslee.jpg`,
    name: 'Thomas Lee',
    major: 'Electrical Engineering',
    role: 'Faculty Counselor',
    bio: 'He provides academic and professional guidance for the IEEE Stanford Student Branch. He supports student initiatives and helps foster connections between industry and the academic community.',
    href: 'https://profiles.stanford.edu/thomas-lee'
  }
];

  const industryAdvisors = [
  {
    id: 13,
    img: `${baseUrl}img/officers/kim.jpeg`,
    name: 'T. Kim Parnell, PhD, PE',
    role: 'IEEE Life Senior Member',
    bio: 'He specializes in forensic engineering, product failures, and patent-related technical analysis. With over 30 years of experience, he has consulted for federal cases and contributed to major industrial investigations. He remains active in IEEE and ASME and frequently presents on failure mechanisms and engineering design.',
    href: 'https://www.linkedin.com/in/ParnellPEC'
  },
  {
    id: 14,
    img: `${baseUrl}img/officers/mohan.png`,
    name: 'Mohan Sankaran',
    role: 'IEEE Senior Member',
    bio: 'He has two decades of experience across fintech, secure mobile systems, artificial intelligence, and cybersecurity. He contributes to the IEEE-USA AI Policy Committee and serves as a peer reviewer and technical session chair for IEEE conferences.',
    href: 'https://www.linkedin.com/in/mohan-sankaran'
  },
  {
    id: 15,
    img: `${baseUrl}img/officers/tom.jpg`,
    name: 'Tom Coughlin',
    role: 'IEEE President (2024)',
    bio: 'He is a digital storage analyst and consultant with over 40 years of industry experience in engineering and senior management roles. He leads Coughlin Associates, publishes technical reports and books, and contributes regularly to industry media. He is an IEEE Fellow and has held leadership positions across IEEE-USA, Region 6, and professional organizations such as SNIA and SMPTE.',
    href: 'https://www.linkedin.com/in/thomas-coughlin-41a65/'
  }
];


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
      <OfficerCard key={officer.id} img={officer.img} name={officer.name} role={officer.role} major={officer.major} bio={officer.bio} href={officer.href} />
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
