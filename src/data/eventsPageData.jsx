// All upcoming events - add date field for events with specific dates
const baseUrl = import.meta.env.BASE_URL
export const upcomingEventsRaw = [
  {
    id: 1,
    date: null, // No specific date
    title: "Upcoming Stanford IEEE Events",
    dateStr: "2025–2026",
    details: <>Our spring quarter schedule will be announced soon. Join the <a href="https://forms.gle/bCdLGNa4bYvpxj3f7" target="_blank">mailing list</a> to stay updated! Browse upcoming events on our <a href="https://luma.com/calendar/cal-LO8vEyiS1bADtaM" target="_blank" rel="noreferrer">Luma calendar</a>.</>,
    longDateStr: "2025–2026",
    longDetails: <>Our spring quarter schedule will be announced soon. Join the <a href="https://forms.gle/bCdLGNa4bYvpxj3f7" target="_blank">mailing list</a> to stay updated! Browse upcoming events on our <a href="https://luma.com/calendar/cal-LO8vEyiS1bADtaM" target="_blank" rel="noreferrer">Luma calendar</a>.</>
  },
  {
    id: 2,
    date: new Date('2026-01-08T19:00:00'),
    title: "2026 Impact of AI on Consumer Technology Products",
    shortDateStr: "1/8/26",
    dateStr: "Thursday, 1/8 @ 7:00 PM",
    details: "An interactive panel on AI in consumer tech, featuring speakers from Samsung, Voler Systems, OpenTechWorks, and more.",
    longDateStr: "Jan 8, 2026 · Panel starts 7:00 PM PST",
    longDetails: (
            <>
                <p>
                    Interactive panel + networking on AI in consumer tech (smart health, ecosystems).
                </p>
                <p className="mt-3">
                    <a href="https://attend.ieee.org/consumer-ai/" target="_blank" rel="noreferrer">Event site</a>
                </p>
                <p className="mt-3">
                    Speakers: Praveen Raja (<b>Samsung</b> VP, Head of Digital Health), Miguel Adao (<b>Voler Systems</b> President & CEO), Adam Drobot (<b>OpenTechWorks</b> Board Chairman), Paolo Bonato (<b>Spaulding Rehab</b> Motion Analysis Lab Director), Michael Condry (prev. <b>Intel</b> Client Division CTO), moderated by Stuart Lipoff.
                </p>
            </>
        )
  },
  {
    id: 3,
    date: new Date('2026-02-02T17:00:00'),
    title: "IEEE x Wozniak",
    shortDateStr: "2/2/26",
    dateStr: "Monday, 2/2 @ 5:00 PM",
    details: "A remarkable fireside chat with Steve Wozniak, Apple co-founder and visionary technologist!",
    longDateStr: "Monday, Feb 2, 2026 · 5:00 PM PST",
    longDetails: (
            <>
                <img src={`${baseUrl}img/events/woz/woz.JPG`} alt="Steve Wozniak" style={{width: '100%', borderRadius: '8px', marginBottom: '1rem'}} />
                <p>
                    A remarkable fireside chat with Steve Wozniak, Apple co-founder and visionary technologist!
                </p>
                <p className="mt-3">
                    <a href="https://stanforddaily.com/2026/02/05/wozniak-urges-to-pursue-technology/" target="_blank" rel="noreferrer">Read coverage in Stanford Daily →</a>
                </p>
            </>
        )
  },
  {
    id: 4,
    date: new Date('2026-02-23T17:00:00'),
    title: "IEEE x Bechtolsheim",
    shortDateStr: "2/23/26",
    dateStr: "Monday, 2/23 @ 5:00 PM",
    details: "We welcomed Andy Bechtolsheim, co-founder of Sun Microsystems and Arista Networks!",
    longDateStr: "Monday, Feb 23, 2026 · 5:00 PM PST",
    longDetails: (
            <>
                <img src={`${baseUrl}img/events/bechtolsheim/bechtolsheim.JPG`} alt="Andy Bechtolsheim" style={{width: '100%', borderRadius: '8px', marginBottom: '1rem'}} />
                <p>
                    IEEE Stanford hosted Andy Bechtolsheim, co-founder of Sun Microsystems and Arista Networks, who is one of Silicon Valley's most legendary angel investors and the person who wrote the first check to Google.
                </p>
            </>
        )
  },
  {
    id: 5,
    date: new Date('2026-02-25T17:30:00'),
    title: "Espressif Systems: ESP32, IoT & Embedded",
    shortDateStr: "2/25/26",
    dateStr: "Wednesday, 2/25 @ 5:30 PM",
    details: "We hosted Espressif Systems—the team behind ESP32. They covered IoT/embedded products, recruitment, and Q&A.",
    longDateStr: "Wednesday, Feb 25, 2026 · 5:30 PM PST",
    longDetails: (
      <>
        <img src={`${baseUrl}img/events/espressif/espressif.jpg`} alt="Espressif Systems" style={{width: '100%', borderRadius: '8px', marginBottom: '1rem'}} />
        <p>
          IEEE Stanford hosted Espressif Systems, the company behind the ESP32 family of Wi-Fi/BLE microcontrollers widely used in robotics, IoT, and embedded systems.
        </p>
        <p className="mt-3">
          The session covered a company introduction, product and solutions overview, recruitment opportunities, and an open Q&A.
        </p>
      </>
    )
  },
  {
    id: 6,
    date: new Date('2026-03-02T17:00:00'),
    title: "IEEE x Engelhardt",
    shortDateStr: "3/2/26",
    dateStr: "Monday, 3/2 @ 5:00 PM",
    details: "We hosted Mike Engelhardt—creator of QSpice and LTSpice, the universal analog circuit simulators.",
    longDateStr: "Monday, Mar 2, 2026 · 5:00 PM PST",
    longDetails: (
      <>
        <img src={`${baseUrl}img/events/engelhardt/mike.jfif`} alt="Mike Engelhardt" style={{width: '100%', borderRadius: '8px', marginBottom: '1rem'}} />
        <p>
          IEEE Stanford hosted Mike Engelhardt, the creator of QSpice and LTSpice, the universal analog electronic circuit simulators every EE is familiar with.
        </p>
      </>
    )
  },
  {
    id: 7,
    date: new Date('2026-03-09T17:00:00'),
    title: "Silimate x IEEE",
    shortDateStr: "3/9/26",
    dateStr: "Monday, 3/9 @ 5:00 PM",
    details: "We hosted Silimate—the AI copilot for chip designers. YC-backed founders designing chips 40x faster.",
    longDateStr: "Monday, Mar 9, 2026 · 5:00 PM PST",
    longDetails: (
      <>
        <img src={`${baseUrl}img/events/silimate/silimate.jfif`} alt="Silimate x IEEE" style={{width: '100%', borderRadius: '8px', marginBottom: '1rem'}} />
        <p>
          IEEE Stanford hosted Silimate, the AI copilot for chip designers, with agentic workflows and AI-native core tools.
        </p>
        <p className="mt-3">
          Founded in 2023 and backed by Y Combinator, Silimate raised a multi-million dollar seed round in 2023 and reached profitability within 2 years. The team is largely from Stanford, with people joining from NVIDIA and Apple, and is fully in-person in Mountain View, CA.
        </p>
        <p className="mt-3"><b>Speakers:</b></p>
        <p className="mt-2">
          <b>Ann Wu</b> (co-founder &amp; CEO) designed several generations of chips at Apple, helped manage AI chip programs at Meta, and led product strategy at Celestial AI (acquired by Marvell). She earned a BS in Electrical Engineering (minor in CS) from UIUC and an MS in Electrical Engineering from Stanford.
        </p>
        <p className="mt-2">
          <b>Akash Levy</b> (co-founder &amp; CTO) has taped out multiple chips, published 14 papers on circuit design, and holds 2 patents in the Electronic Design Automation (EDA) field. His technical expertise spans EDA, AI, and cloud through his time at NVIDIA, AWS, and Synopsys. He earned a BS in Electrical Engineering (minor in Physics/CS) from Princeton and a PhD in Electrical Engineering from Stanford.
        </p>
      </>
    )
  },
  {
    id: 8,
    date: new Date('2026-04-15T17:00:00'),
    title: "OpenAI Hardware x IEEE",
    shortDateStr: "4/15/26",
    dateStr: "Wednesday, 4/15 @ 5:00 PM",
    details: "We hosted a fireside chat with Richard Ho, Head of Hardware at OpenAI.",
    longDateStr: "Wednesday, Apr 15, 2026 · 5:00–6:00 PM PST",
    longDetails: (
      <>
        <img src={`${baseUrl}img/events/openai/richard.jpg`} alt="Richard Ho, OpenAI Hardware" style={{width: '100%', borderRadius: '8px', marginBottom: '1rem'}} />
        <p>
          IEEE Stanford hosted a fireside chat with Richard Ho, Head of Hardware at OpenAI.
        </p>
      </>
    )
  },
  {
    id: 9,
    date: new Date('2026-04-22T17:00:00'),
    title: "Trackonomy Systems x IEEE",
    shortDateStr: "4/22/26",
    dateStr: "Wednesday, 4/22 @ 5:00 PM",
    details: "We hosted a tech talk and recruiting session with Trackonomy Systems and CEO Dr. Erik Volkerink.",
    longDateStr: "Wednesday, Apr 22, 2026 · 5:00–6:00 PM PST",
    longDetails: (
      <>
        <p>
          IEEE Stanford hosted Trackonomy for a tech talk and recruiting session on IoT and embedded systems, with CEO Dr. Erik Volkerink (former CTO of Flex, Stanford EE PhD) and members of their engineering and recruiting teams.
        </p>
      </>
    )
  },
  {
    id: 10,
    date: new Date('2026-04-29T17:00:00'),
    title: "Shih x IEEE/Cap&Gown",
    shortDateStr: "4/29/26",
    dateStr: "Wednesday, 4/29 @ 5:00 PM",
    details: "We hosted a fireside with Clara Shih (Meta Business AI, Salesforce AI, Hearsay), co-hosted with Cap & Gown.",
    longDateStr: "Wednesday, Apr 29, 2026 · 5:00–6:00 PM PST",
    longDetails: (
      <>
        <p>
          IEEE Stanford and Cap &amp; Gown hosted Clara Shih (Stanford CS co-term &apos;04, MS &apos;05) for a fireside on her path through Google, Hearsay, Salesforce AI, and Meta Business AI, and on careers in an AI-heavy hiring market.
        </p>
        <p className="mt-3">
          <a href="https://stanforddaily.com/2026/05/01/former-salesforce-ai-ceo-clara-shih-04-m-s-05-urges-students-to-embrace-failure-stay-authentic/" target="_blank" rel="noreferrer">Stanford Daily coverage →</a>
        </p>
      </>
    )
  },
  {
    id: 11,
    date: new Date('2026-05-07T17:00:00'),
    title: "NetApp CEO x IEEE",
    shortDateStr: "5/7/26",
    dateStr: "Thursday, 5/7 @ 5:00 PM",
    details: "We hosted a fireside chat with NetApp CEO George Kurian.",
    longDateStr: "Thursday, May 7, 2026 · 5:00–6:00 PM PST",
    longDetails: (
      <>
        <p>
          IEEE Stanford hosted a fireside chat with George Kurian, CEO of NetApp.
        </p>
      </>
    )
  },
  {
    id: 12,
    date: new Date('2026-05-18T17:00:00'),
    title: "Cerebras CEO/CTO x IEEE",
    shortDateStr: "5/18/26",
    dateStr: "Monday, 5/18 @ 5:00 PM",
    details: "Fireside with Cerebras founders Andrew Feldman and Sean Lie.",
    longDateStr: "Monday, May 18, 2026 · 5:00–6:00 PM PST",
    longDetails: (
      <>
        <p>
          Fireside with Andrew Feldman (CEO) and Sean Lie (CTO), founders of Cerebras.
        </p>
        <p className="mt-3">
          <a href="https://luma.com/kahupbqf" target="_blank" rel="noreferrer">Register on Luma →</a>
        </p>
      </>
    )
  },
  {
    id: 13,
    date: new Date('2026-04-29T11:00:00'),
    title: "Samsung x IEEE EDS/MTTS",
    shortDateStr: "4/29/26",
    dateStr: "Wednesday, 4/29 @ 11:00 AM",
    details: "We hosted a small lunch with Samsung semiconductor and device-solutions leaders for students in semiconductors, memory, and RF/LSI.",
    longDateStr: "Wednesday, Apr 29, 2026 · 11:00 AM–12:00 PM PST",
    longDetails: (
      <>
        <p>
          IEEE Stanford hosted a small-group lunch for students focused on semiconductors, memory, and RF/LSI with Dr. Kee-Bong Song (SVP, System LSI Research, Samsung Device Solutions Research America), Dr. Joonhoi Hur (CVP, Advanced Circuits and Systems Lab, Samsung Electronics), Dr. Kwang Hun Kim (Sr. Director, Samsung Semiconductor; visiting scholar), and Dr. Hamid Rategh (Sr. Director, Samsung Semiconductor Innovation Center).
        </p>
      </>
    )
  },
  {
    id: 14,
    date: new Date('2026-05-12T16:30:00'),
    title: "HP x IEEE",
    shortDateStr: "5/12/26",
    dateStr: "Tuesday, 5/12 @ 4:30 PM",
    details: "We hosted a fireside with Manoj Leelanivas, President of HP Solutions, at Packard 101—on enterprise IT, AI, and his path from Juniper to HPE.",
    longDateStr: "Tuesday, May 12, 2026 · 4:30–5:30 PM PST",
    longDetails: (
      <>
        <p>
          IEEE Stanford hosted a fireside chat with Manoj Leelanivas, President of HP Solutions.
        </p>
        <p className="mt-3">
          Manoj served as the Chief Operating Officer of Juniper Networks, a $5B+ global leader acquired by HPE in July 2025. Previously, Manoj was President and CEO of Cyphort, a pioneer in security analytics technology. He earlier held multiple senior leadership roles at Juniper, including EVP of Sales for Advanced Technologies and EVP/GM of the Software Business Group. He serves on the boards of Automation Anywhere, a global leader in Agentic Process Automation, and Forescout Technologies, a Cybersecurity leader.
        </p>
        <p className="mt-3">
          Manoj holds degrees from NIT Karnataka and the University of Kentucky and is a graduate of the Stanford Executive Business Program.
        </p>
      </>
    )
  },
  {
    id: 15,
    date: new Date('2026-05-20T19:00:00'),
    title: "Well-Being With Woz",
    shortDateStr: "5/20/26",
    dateStr: "Wednesday, 5/20 @ 7:00 PM",
    details: "An interview & Q&A with Steve and Janet Wozniak on nurturing happiness and wellbeing—in partnership with Stanford Speakers Bureau, Wellness Buddies, Stanford Mental Health Outreach, and SUPER.",
    longDateStr: "Wednesday, May 20, 2026 · 7:00–8:00 PM PST",
    longDetails: (
      <>
        <p>
          Join us for &ldquo;Well-being with Woz,&rdquo; an inspiring evening featuring Steve Wozniak, co-founder of Apple, alongside his wife and former Apple employee Janet Wozniak. This special interview and Q&amp;A session will explore topics around nurturing happiness and wellbeing, offering unique insights from one of technology&apos;s most influential pioneers.
        </p>
        <p className="mt-3">
          Presented by Wellness Buddies &amp; Stanford Mental Health Outreach. Hosted in partnership with Stanford Speakers Bureau, Wellness Buddies, Stanford Mental Health Outreach, IEEE, and SUPER. Special thanks to the Office of Student Engagement.
        </p>
        <p className="mt-3"><b>Who:</b> Steve Wozniak (co-founder of Apple) and Janet Wozniak (former Apple employee in IT and Education)</p>
        <p className="mt-2"><b>What:</b> An interview &amp; Q&amp;A on nurturing happiness and wellbeing</p>
        <p className="mt-2"><b>When:</b> Wednesday, May 20 at 7:00 PM</p>
        <p className="mt-3"><b>Please note:</b> First come, first serve seating.</p>
        <p className="mt-3">
          <a href="https://luma.com/1g9nb6tt" target="_blank" rel="noreferrer">Register on Luma →</a>
        </p>
      </>
    )
  }
];

// Automatically filter out past events
export const upcomingData = upcomingEventsRaw
  .filter(event => {
    if (!event.date) return true; // Keep events without specific dates
    return event.date >= new Date(); // Only show future events
  })
  .sort((a, b) => {
    // Events without dates go to the start
    if (!a.date) return -1;
    if (!b.date) return 1;
    // Sort by date ascending (soonest first)
    return a.date - b.date;
  });

export const recentEventsData = upcomingEventsRaw
  .filter(event => {
    if (!event.date) return false;
    return event.date < new Date();
  })
  .sort((a, b) => {
    // Sort by date descending (most recent first)
    return b.date - a.date;
  });

// Get event for banner: ongoing (started < 30 min ago) or today/tomorrow. Tiebreaker: minimize time distance to event start.
export const getBannerEvent = () => {
  const now = new Date();
  const halfHourAgo = new Date(now.getTime() - 30 * 60 * 1000);
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(23, 59, 59, 999); // End of tomorrow

  // Include ongoing (started less than 30 min ago) and upcoming (today or tomorrow) — do not filter out date >= now
  const candidates = upcomingEventsRaw.filter(event => {
    if (!event.date) return false;
    return event.date >= halfHourAgo && event.date <= tomorrow;
  });

  if (candidates.length === 0) return null;

  // Tiebreaker: event whose start time is closest to now (minimize time distance)
  const chosen = candidates.reduce((closest, event) => {
    const closestDiff = Math.abs(closest.date - now);
    const eventDiff = Math.abs(event.date - now);
    return eventDiff < closestDiff ? event : closest;
  });

  return {
    ...chosen,
    isOngoing: chosen.date <= now,
  };
};

export const pastHighlightData = [
  {
    id: 1,
    dateStr: "2009–2010",
    title: "Jensen Huang · Tegra & NVIDIA's Mobile Strategy",
    details: "Founder & CEO of NVIDIA. One of the most influential leaders in AI and computing."
  },
  {
    id: 2,
    dateStr: "2008–2009",
    title: "Marissa Mayer · Google: Creativity & Innovation",
    details: "Former CEO of Yahoo. Early Google leader and Silicon Valley pioneer."
  },
  {
    id: 3,
    dateStr: "2009–2010",
    title: "Mark Horowitz · Trends in VLSI Automation",
    details: "Stanford EE professor, Rambus co-founder, pioneer of modern VLSI design."
  },
  {
    id: 4,
    dateStr: "2010–2011",
    title: "Clara Shih · Stanford IEEE Tech Talk",
    details: "Founder of Hearsay Systems, former Salesforce exec, Starbucks Board member."
  },
  {
    id: 5,
    dateStr: "2011–2012",
    title: "Martin Hellman · Public Key Cryptography",
    details: "Turing Award winner and co-inventor of modern cryptography."
  },
  {
    id: 6,
    dateStr: "2011–2012",
    title: "Fei-Fei Li · Lunch with CS/EE Faculty",
    details: "Co-director of Stanford HAI, world leader in computer vision and AI."
  },
  {
    id: 7,
    dateStr: "2011–2012",
    title: "Naveen Verma · Embedded DSP to Embedded AI",
    details: "Dean of Engineering at Princeton; expert in ML hardware & biosensing."
  },
  {
    id: 8,
    dateStr: "2008–2009",
    title: "Craig Weissman · Salesforce.com Platform",
    details: "Founding CTO of Salesforce Platform, co-founder of Duetto (cloud SaaS)."
  },
  {
    id: 9,
    dateStr: "2008–2009",
    title: "Burak GökTürk · Visual Search & Riya/Like.com",
    details: "Founder of Like.com (acquired by Google). Vision & AI leader."
  },
  {
    id: 10,
    dateStr: "2011–2012",
    title: "Tom Coughlin · Mountains of Data",
    details: "IEEE President (2024). Leading voice in storage and data systems."
  }
]