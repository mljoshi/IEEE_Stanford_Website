// All upcoming events - add date field for events with specific dates
const baseUrl = import.meta.env.BASE_URL

export const hostedCompaniesData = [
  { name: 'Apple', style: 'apple' },
  { name: 'NVIDIA', style: 'nvidia' },
  { name: 'OpenAI', style: 'openai' },
  { name: 'Samsung', style: 'samsung' },
  { name: 'Cerebras', style: 'cerebras' },
  { name: 'HP', style: 'hp' },
  { name: 'Espressif', style: 'espressif' },
  { name: 'Google', style: 'google' },
  { name: 'Meta', style: 'meta' },
  { name: 'Intel', style: 'intel' },
  { name: 'NetApp', style: 'netapp' },
]

export const pressLinksData = [
  {
    id: 1,
    outlet: 'Stanford Daily',
    title: 'Wozniak urges students to pursue technology',
    href: 'https://stanforddaily.com/2026/02/05/wozniak-urges-to-pursue-technology/',
    dateStr: 'Feb 5, 2026',
  },
  {
    id: 2,
    outlet: 'Stanford Daily',
    title: 'Clara Shih urges students to embrace failure, stay authentic',
    href: 'https://stanforddaily.com/2026/05/01/former-salesforce-ai-ceo-clara-shih-04-m-s-05-urges-students-to-embrace-failure-stay-authentic/',
    dateStr: 'May 1, 2026',
  },
]

export const featuredEventsData = [
  {
    id: 3,
    title: 'IEEE x Wozniak',
    dateStr: 'Feb 2, 2026',
    details: 'Fireside chat with Apple co-founder Steve Wozniak.',
    image: `${baseUrl}img/events/woz/woz.JPG`,
    placeholderLabel: 'Steve Wozniak',
    pressLink: 'https://stanforddaily.com/2026/02/05/wozniak-urges-to-pursue-technology/',
  },
  {
    id: 4,
    title: 'IEEE x Bechtolsheim',
    dateStr: 'Feb 23, 2026',
    details: 'Fireside with Sun Microsystems & Arista co-founder Andy Bechtolsheim.',
    image: `${baseUrl}img/events/bechtolsheim/bechtolsheim.JPG`,
    placeholderLabel: 'Andy Bechtolsheim',
  },
  {
    id: 8,
    title: 'OpenAI Hardware x IEEE',
    dateStr: 'Apr 15, 2026',
    details: 'Fireside chat with Richard Ho, Head of Hardware at OpenAI.',
    image: `${baseUrl}img/events/openai/richard.jpg`,
  },
  {
    id: 5,
    title: 'Espressif Systems',
    dateStr: 'Feb 25, 2026',
    details: 'ESP32, IoT & embedded systems with the team behind ESP32.',
    image: `${baseUrl}img/events/espressif/espressif.jpg`,
  },
  {
    id: 6,
    title: 'IEEE x Engelhardt',
    dateStr: 'Mar 2, 2026',
    details: 'Creator of QSpice and LTSpice on analog circuit simulation.',
    image: `${baseUrl}img/events/engelhardt/mike.jfif`,
  },
  {
    id: 7,
    title: 'Silimate x IEEE',
    dateStr: 'Mar 9, 2026',
    details: 'AI copilot for chip designers — YC-backed founders from Stanford.',
    image: `${baseUrl}img/events/silimate/silimate.jfif`,
  },
]

// Hand-written events with their own /event/:id page. The Upcoming and Recent lists
// come from Luma (see src/data/lumaEvents.js); this only holds:
// - write-ups for the Featured cards
// - past events that were never on Luma (marked notOnLuma), which are added to Recent
export const eventPagesData = [
  {
    id: 2,
    notOnLuma: true,
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
    image: `${baseUrl}img/events/woz/woz.JPG`,
    longDateStr: "Monday, Feb 2, 2026 · 5:00 PM PST",
    longDetails: (
            <>
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
    image: `${baseUrl}img/events/bechtolsheim/bechtolsheim.JPG`,
    longDateStr: "Monday, Feb 23, 2026 · 5:00 PM PST",
    longDetails: (
            <>
                <p>
                    IEEE Stanford hosted Andy Bechtolsheim, co-founder of Sun Microsystems and Arista Networks, who is one of Silicon Valley's most legendary angel investors and the person who wrote the first check to Google.
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
    image: `${baseUrl}img/events/openai/richard.jpg`,
    longDateStr: "Wednesday, Apr 15, 2026 · 5:00–6:00 PM PST",
    longDetails: (
      <>
        <p>
          IEEE Stanford hosted a fireside chat with Richard Ho, Head of Hardware at OpenAI.
        </p>
      </>
    )
  },
  {
    id: 15,
    notOnLuma: true,
    date: new Date('2026-05-20T19:00:00'),
    title: "Well-Being With Woz",
    shortDateStr: "5/20/26",
    dateStr: "Wednesday, 5/20 @ 7:00 PM",
    details: "We hosted an interview & Q&A with Steve and Janet Wozniak on nurturing happiness and wellbeing in partnership with Stanford Speakers Bureau, Wellness Buddies, Stanford Mental Health Outreach, and SUPER.",
    longDateStr: "Wednesday, May 20, 2026 · 7:00–8:00 PM PST",
    longDetails: (
      <>
        <p>
          IEEE Stanford hosted &ldquo;Well-being with Woz,&rdquo; an interview and Q&amp;A with Steve Wozniak (co-founder of Apple) and Janet Wozniak (former Apple employee in IT and Education) on nurturing happiness and wellbeing.
        </p>
        <p className="mt-3">
          Presented by Wellness Buddies &amp; Stanford Mental Health Outreach, in partnership with Stanford Speakers Bureau, IEEE, and SUPER. Special thanks to the Office of Student Engagement.
        </p>
      </>
    )
  }
];

export const eventsNotOnLuma = eventPagesData.filter(event => event.notOnLuma);

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