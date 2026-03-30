import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import { ExternalLink } from 'lucide-react'

function stripTrailingSlashes(path) {
  return path.length > 1 ? path.replace(/\/+$/, '') : path
}

function pathsMatch(path1, path2) {
  return stripTrailingSlashes(path1) === stripTrailingSlashes(path2)
}

function isEventsNavActive(pathname) {
  return stripTrailingSlashes(pathname) === '/events' || pathname.startsWith('/event/')
}

function NavLink({ to, children, isActive }) {
  const loc = useLocation()
  const active = isActive ? isActive(loc.pathname) : pathsMatch(loc.pathname, to)
  return (
    <Link to={to} className={`nav-pill-link ${active ? 'active' : ''}`}>
      {children}
    </Link>
  )
}

function MobileNavLink({ to, children, isActive }) {
  const loc = useLocation()
  const active = isActive ? isActive(loc.pathname) : pathsMatch(loc.pathname, to)
  return (
    <Link to={to} className={`mobile-nav-link ${active ? 'active' : ''}`}>
      {children}
    </Link>
  )
}

export default function Nav() {
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [lastY, setLastY] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0
      const goingDown = y > lastY
      setHidden(y > 10 && goingDown)
      setScrolled(y > 20)
      setLastY(y)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastY])

  return (
    <header className={`navbar ${hidden ? 'navbar-hidden' : ''} ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-inner">

        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src={`${import.meta.env.BASE_URL}img/ieee.png`} className="navbar-logo-img" alt="IEEE Logo" />
          <span className="navbar-logo-text">
            <span className="logo-ieee">IEEE</span>
            <span className="logo-sep"> · </span>
            <span className="logo-stanford">Stanford</span>
          </span>
        </Link>

        {/* Desktop nav pill group */}
        <nav className="nav-pill-group hidden md:flex" aria-label="Main navigation">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/events" isActive={isEventsNavActive}>Events</NavLink>
          <NavLink to="/team">Team</NavLink>
          <NavLink to="/resources">Resources</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <a
            href={`${import.meta.env.BASE_URL}ecj/index.html`}
            className="nav-pill-link nav-ecj-link"
            aria-label="ECJ journal (opens in new tab)"
            target="_blank"
            rel="noopener noreferrer"
          >
            ECJ <ExternalLink size={11} aria-hidden="true" />
          </a>
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden nav-hamburger-wrap">
          <Hamburger toggled={mobileOpen} toggle={setMobileOpen} size={20} color="rgba(255,255,255,0.7)" />
          {mobileOpen && (
            <nav
              className="nav-mobile-menu"
              onClick={() => setMobileOpen(false)}
              aria-label="Mobile navigation"
            >
              <MobileNavLink to="/">Home</MobileNavLink>
              <MobileNavLink to="/events" isActive={isEventsNavActive}>Events</MobileNavLink>
              <MobileNavLink to="/team">Team</MobileNavLink>
              <MobileNavLink to="/resources">Resources</MobileNavLink>
              <MobileNavLink to="/contact">Contact</MobileNavLink>
              <a
                href={`${import.meta.env.BASE_URL}ecj/index.html`}
                className="mobile-nav-link"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                ECJ <ExternalLink size={11} aria-hidden="true" />
              </a>
            </nav>
          )}
        </div>

      </div>
    </header>
  )
}
