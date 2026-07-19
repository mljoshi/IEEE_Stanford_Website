import UpcomingCard from '../components/UpcomingCard'
import {
  pastHighlightData,
  upcomingData,
  recentEventsData,
  featuredEventsData,
  pressLinksData,
} from '../data/eventsPageData'
import PastHighlightCard from '../components/PastHighlightCard'
import FeaturedHighlightCard from '../components/FeaturedHighlightCard'
import { PageHeader } from '../components/Section'
import { eventsArchiveData } from '../data/eventsArchiveData'

export default function Events() {
  return (
    <section className="section page-content">
      <div className="container container-wide">
        <PageHeader
          kicker="Events"
          title="IEEE Stanford events."
          description="Talks, fireside chats, and recruiting sessions with industry leaders and researchers."
        />

        <div className="page-block" style={{ marginTop: 0, paddingTop: 0, borderTop: 'none' }}>
          <h2 className="page-block-title">Featured</h2>
          <div className="featured-grid featured-grid--3">
            {featuredEventsData.slice(0, 3).map((ev, i) => (
              <FeaturedHighlightCard key={ev.id} {...ev} index={i} />
            ))}
          </div>
        </div>

        <div className="page-block">
          <h2 className="page-block-title">Upcoming</h2>
          <div className="card-grid card-grid--2">
            {upcomingData.map((ev, i) => (
              <UpcomingCard key={ev.id} {...ev} index={i} />
            ))}
          </div>
        </div>

        {recentEventsData.length > 0 && (
          <div className="page-block">
            <h2 className="page-block-title">Recent</h2>
            <div className="card-grid card-grid--2">
              {recentEventsData.map((ev, i) => (
                <UpcomingCard key={ev.id} {...ev} dateStr={ev.shortDateStr} index={i} />
              ))}
            </div>
          </div>
        )}

        <div className="page-block">
          <h2 className="page-block-title">Past highlights</h2>
          <div className="card-grid card-grid--2">
            {pastHighlightData.map((h, i) => (
              <PastHighlightCard key={h.id} {...h} index={i} />
            ))}
          </div>
        </div>

        {pressLinksData.length > 0 && (
          <div className="page-block">
            <h2 className="page-block-title">Press</h2>
            <div className="card-grid card-grid--2">
              {pressLinksData.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="press-card"
                >
                  <div className="press-card-outlet">{item.outlet}</div>
                  <div className="press-card-title">{item.title}</div>
                  <div className="press-card-date">{item.dateStr}</div>
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="page-block">
          <h2 className="page-block-title">Archive</h2>
          {eventsArchiveData.map((year) => (
            <details key={year.id} className="year-details">
              <summary>{year.label}</summary>
              <div className="year-body">
                {year.events.map((ev) => (
                  <p key={ev}>{ev}</p>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
