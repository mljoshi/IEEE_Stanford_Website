import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function NavLink({ to, children }) {
  const loc = useLocation()
  const active = loc.pathname === to
  return (
    <Link
      to={to}
      className={`navbar-link ${active ? 'active' : ''}`}
    >
      {children}
    </Link>
  )
}

export default function Nav() {
  return (
    <header className="navbar">
    <div className="container navbar-inner">
      <Link to="/" className='navbar-logo'>
        <img src="ieee.png" className="navbar-logo-img" alt="IEEE Logo" />
        <div className="navbar-logo-text">IEEE @ Stanford</div>
      </Link>
      <nav className="navbar-menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/officers">Officers</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/resources">Resources</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </div>
  </header>
  )
}
