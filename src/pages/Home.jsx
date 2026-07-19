import { Link } from 'react-router-dom'
import { HiOutlineBookOpen, HiOutlineUserGroup } from 'react-icons/hi2'
import { PiCircuitry } from 'react-icons/pi'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import StatCounter from '../components/StatCounter'
import {
  upcomingData,
  featuredEventsData,
  hostedCompaniesData,
} from '../data/eventsPageData'
import UpcomingCard from '../components/UpcomingCard'
import FeaturedHighlightCard from '../components/FeaturedHighlightCard'

const programs = [
  {
    Icon: PiCircuitry,
    title: 'Industry & Research',
    body: 'Talks from engineers building chips, systems, and ML infrastructure.',
  },
  {
    Icon: HiOutlineBookOpen,
    title: 'Academics & Mentorship',
    body: 'Guidance on courses, research, grad school, and hardware careers.',
  },
  {
    Icon: HiOutlineUserGroup,
    title: 'Community',
    body: 'A few well-run events each quarter — small enough to connect meaningfully.',
  },
]

const homeFeatured = featuredEventsData.slice(0, 3)
const preview = upcomingData.filter((e) => e.date !== null).slice(0, 3)

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-inner">
          <p className="hero-label hero-in">IEEE @ Stanford</p>
          <h1 className="hero-title hero-in">Hardware, software, and systems.</h1>
          <p className="hero-sub hero-in">
            A student community for people who care about circuits, chips, systems, and infrastructure.
          </p>
          <div className="btn-row hero-in">
            <Link to="/events" className="btn btn-primary">See events</Link>
            <Link to="/contact" className="btn btn-secondary">Get involved</Link>
          </div>
        </div>
      </section>

      {preview.length > 0 && (
        <Section
          kicker="Upcoming"
          title="What's next."
          compact
          wide
          className="section--divider"
        >
          <div className="card-grid card-grid--2">
            {preview.map((ev, i) => (
              <UpcomingCard key={ev.id} {...ev} index={i} />
            ))}
          </div>
          <Reveal className="section-cta" delay={120}>
            <Link to="/events" className="text-link text-link--arrow">All events</Link>
          </Reveal>
        </Section>
      )}

      <Section kicker="What we do" title="Three things we focus on." compact wide className="section--divider">
        <div className="card-grid card-grid--3">
          {programs.map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 70} as="article" className="card card--interactive">
              <div className="card-icon"><Icon size={18} aria-hidden /></div>
              <h3 className="card-title">{title}</h3>
              <p className="card-body">{body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        kicker="Highlights"
        title="Recent speakers."
        compact
        wide
        className="section--divider"
      >
        <div className="featured-grid featured-grid--3">
          {homeFeatured.map((ev, i) => (
            <FeaturedHighlightCard key={ev.id} {...ev} index={i} />
          ))}
        </div>
        <Reveal className="section-cta" delay={100}>
          <Link to="/events" className="text-link text-link--arrow">Event archive</Link>
        </Reveal>
      </Section>

      <section className="section section--compact section--divider">
        <div className="container">
          <Reveal>
            <div className="stats-row">
              <StatCounter value={25} suffix="+" label="Years active" />
              <StatCounter value={50} suffix="+" label="Events hosted" />
              <StatCounter value={25} suffix="+" label="Notable speakers" />
            </div>
          </Reveal>
          <p className="stat-note">Since the early 2000s as the Stanford IEEE Student Branch.</p>
        </div>
      </section>

      <Section kicker="Partners" title="Companies we've hosted." compact wide className="section--divider">
        <div className="company-strip">
          {hostedCompaniesData.map(({ name }, i) => (
            <Reveal key={name} delay={i * 35} as="span" className="company-tag">
              {name}
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  )
}
