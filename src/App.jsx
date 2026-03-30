import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Banner from './components/Banner'
import Nav from './components/Nav'
import Home from './pages/Home'
import Team from './pages/Team'
import Events from './pages/Events'
import Resources from './pages/Resources'
import Contact from './pages/Contact'
import Event from './pages/Event'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'page_view', { page_path: location.pathname })
    }
  }, [location.pathname])

  return (
    <body class="page">
      <Banner />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event/:id" element={<Event />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer>
        <div className="container">
          <span>© {new Date().getFullYear()} Stanford IEEE Student Branch</span>
          <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>Institute of Electrical and Electronics Engineers</span>
        </div>
      </footer>
    </body>
  )
}
