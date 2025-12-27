import { useParams } from "react-router-dom";
import { upcomingData } from "../data/eventsPageData";

export default function Event() {
  const { id } = useParams()
  const eventId = Number(id)
  const baseUrl = import.meta.env.BASE_URL

  const event = upcomingData.find(e => e.id === eventId)

  if (!event) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-black mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">Event not found</p>
          <a 
            href={`${baseUrl}events`} 
            className="inline-block px-6 py-3 bg-red-900 text-white font-semibold rounded-lg hover:bg-red-800 transition transform hover:scale-105"
          >
            Back to Events
          </a>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white py-16 overflow-hidden">
        <div className="container relative z-10 mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <a 
              href={`${baseUrl}events`} 
              className="text-red-900 hover:text-red-700 font-semibold text-sm flex items-center gap-2 transition transform hover:translate-x-[-4px]"
            >
              ← Back to Events
            </a>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Event Details</span>
          </div>

          <div className="mb-8">
            <div className="inline-block mb-6">
              <span className="text-xs font-bold text-white bg-red-900 px-4 py-2 rounded-full uppercase tracking-widest">
                {event.longDateStr}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight mb-4">
              {event.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg">
              <p className="text-xl leading-relaxed text-gray-700 mb-8">
                {event.longDetails}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}