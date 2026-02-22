// All upcoming events - add date field for events with specific dates
const baseUrl = import.meta.env.BASE_URL
export const upcomingEventsRaw = [
  {
    id: 1,
    date: null, // No specific date
    title: "Upcoming Stanford IEEE Events",
    dateStr: "2025–2026",
    details: <>Our winter quarter schedule will be announced soon. Join the <a href="https://forms.gle/bCdLGNa4bYvpxj3f7" target="_blank">mailing list</a> to stay updated!</>,
    longDateStr: "2025–2026",
    longDetails: <>Our winter quarter schedule will be announced soon. Join the <a href="https://forms.gle/bCdLGNa4bYvpxj3f7" target="_blank">mailing list</a> to stay updated!</>
  },
  {
    id: 2,
    date: new Date('2026-01-08T19:00:00'),
    title: "2026 Impact of AI on Consumer Technology Products",
    shortDateStr: "1/8/26",
    dateStr: "Thursday, 1/8 @ 7:00 PM",
    details: "Interactive panel on AI in consumer tech (smart health)",
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
    title: "Steve Wozniak (Apple Co-Founder) Fireside Chat",
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
    title: "Bechtolsheim x Stanford IEEE",
    shortDateStr: "2/23/26",
    dateStr: "Monday, 2/23 @ 5:00 PM",
    details: "Welcome Andy Bechtolsheim, co-founder of Sun Microsystems and Arista Networks!",
    longDateStr: "Monday, Feb 23, 2026 · 5:00 PM PST",
    longDetails: (
            <>
                <p>
                    Join us as we welcome Andy Bechtolsheim, co-founder of Sun Microsystems and Arista Networks, one of Silicon Valley's most legendary angel investors—and the person who wrote the first check to Google.
                </p>
                <p className="mt-3">
                    Location: Bishop Auditorium
                </p>
                <p className="mt-3">
                    <a href="https://luma.com/ALE5NOLD" target="_blank" rel="noreferrer">RSVP here →</a>
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

// Get event for banner (today or tomorrow, closest to now)
export const getBannerEvent = () => {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(23, 59, 59, 999); // End of tomorrow
  
  // Find all events happening today or tomorrow
  const urgentEvents = upcomingEventsRaw.filter(event => {
    if (!event.date) return false;
    return event.date >= now && event.date <= tomorrow;
  });
  
  // Return the one closest to now
  if (urgentEvents.length === 0) return null;
  return urgentEvents.reduce((closest, event) => {
    const closestDiff = Math.abs(closest.date - now);
    const eventDiff = Math.abs(event.date - now);
    return eventDiff < closestDiff ? event : closest;
  });
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