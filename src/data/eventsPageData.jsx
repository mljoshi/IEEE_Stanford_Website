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
    details: "Tech talk and recruiting with Trackonomy Systems—IoT and embedded systems, led by CEO Dr. Erik Volkerink. Food provided.",
    longDateStr: "Wednesday, Apr 22, 2026 · 5:00–6:00 PM PST",
    longDetails: (
      <>
        <p>
          Trackonomy Systems is a ~$1B IoT and embedded systems unicorn backed by Kleiner Perkins.
        </p>
        <p className="mt-3">
          Their CEO, Dr. Erik Volkerink (former CTO of Flex, Stanford EE PhD) along with their engineering/recruiting team are coming to campus for a tech talk and recruiting session.
        </p>
        <p className="mt-3">
          Good food provided!
        </p>
        <p className="mt-3">
          <a href="https://luma.com/13oui67r" target="_blank" rel="noreferrer">Register on Luma →</a>
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
    details: "Clara Shih (Stanford 2005 CS co-term)—Senior Advisor and former Head of Meta Business AI; founder of Salesforce AI and Hearsay Systems.",
    longDateStr: "Wednesday, Apr 29, 2026 · 5:00–6:00 PM PST",
    longDetails: (
      <>
        <p>
          Clara Shih (Stanford 2005 CS co-term) is Senior Advisor, Founder, and Former Head of the Business AI Group at Meta, where she led the development, launch, and monetization of Meta&apos;s Business AI offerings for 200M businesses worldwide. Previously, Clara was founder and CEO of Salesforce AI, and founder and CEO of Hearsay Systems (now part of NASDAQ:YEXT), a SaaS startup.
        </p>
        <p className="mt-3">
          Clara serves on the board of directors of Hubspot (NYSE:HUBS) and previously served on the Starbucks board. She is an advisor and investor in AI startups including Perplexity, Braintrust, and Qodo, and has been named to the TIME100 AI, Fortune 40 Under 40, and World Economic Forum Young Global Leaders. ​Notably, she was also Chair of Stanford IEEE from 2001–2004.
        </p>
        <p className="mt-3">
          <a href="https://luma.com/q5th4of4" target="_blank" rel="noreferrer">Register on Luma →</a>
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
    details: "Fireside chat with NetApp CEO George Kurian.",
    longDateStr: "Thursday, May 7, 2026 · 5:00–6:00 PM PST",
    longDetails: (
      <>
        <p>
          Fireside Chat with the CEO of NetApp, George Kurian.
        </p>
        <p className="mt-3">
          <a href="https://luma.com/cc8xgxc3" target="_blank" rel="noreferrer">Register on Luma →</a>
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
    details: "Fireside chat with Cerebras founders Andrew Feldman and Sean Lie.",
    longDateStr: "Monday, May 18, 2026 · 5:00–6:00 PM PST",
    longDetails: (
      <>
        <p>
          Fireside Chat with the founders of Cerebras, Andrew Feldman and Sean Lie.
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
    details: "Network with Samsung executives (SVP, CVP, Sr. Directors). For students in semiconductors, memory, and RF/LSI—capacity 12; lunch and drinks covered.",
    longDateStr: "Wednesday, Apr 29, 2026 · 11:00 AM–12:00 PM PST",
    longDetails: (
      <>
        <p>
          Come network with leading Samsung executives. For students interested in semiconductors, memory, and RF/LSI design. Limited capacity of 12. Drinks and lunch covered.
        </p>
        <p className="mt-3"><b>Samsung executives</b></p>
        <p className="mt-2">
          <b>Dr. Kee-Bong Song</b>, SVP &amp; Head of the System LSI Research Center at Samsung Device Solutions Research America
        </p>
        <p className="mt-2">
          <b>Dr. Joonhoi Hur</b>, CVP &amp; Head of Advanced Circuits and Systems Lab at Samsung Electronics
        </p>
        <p className="mt-2">
          <b>Dr. Kwang Hun Kim</b>, Sr. Director at Samsung Semiconductor and Visiting Scholar under Prof. Horowitz
        </p>
        <p className="mt-2">
          <b>Dr. Hamid Rategh</b>, Sr. Director of Samsung Semiconductor Innovation Center (Samsung&apos;s venture arm)
        </p>
        <p className="mt-3">
          Registration is approval required; exact address is shown after you register. You may be asked to verify token ownership with your wallet when requesting to join.
        </p>
        <p className="mt-3">
          <a href="https://luma.com/4jxdaytd" target="_blank" rel="noreferrer">Request to join on Luma →</a>
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