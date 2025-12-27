import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Officers from './pages/Officers'
import Events from './pages/Events'
import Resources from './pages/Resources'
import Contact from './pages/Contact'
import Event from './pages/Event'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <body class="page">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/officers" element={<Officers />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event/:id" element={<Event />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="mt-12 py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Stanford IEEE Student Branch
      </footer>
    </body>
  )
}
