import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Officers from './pages/Officers'
import Events from './pages/Events'
import Resources from './pages/Resources'
import Contact from './pages/Contact'

export default function App() {
  return (
    <body class="page">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/officers" element={<Officers />} />
          <Route path="/events" element={<Events />} />
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
