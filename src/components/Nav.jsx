import React, { useEffect, useState } from 'react'
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
  const [hidden, setHidden] = useState(false)
  const [lastY, setLastY] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0
      const goingDown = y > lastY
      if (y > 10 && goingDown) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      setLastY(y)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastY])
  return (
    <header className={`navbar ${hidden ? 'navbar-hidden' : ''}`}>
    <div className="navbar-inner">
      <Link to="/" className='navbar-logo'>
        <img src={`${import.meta.env.BASE_URL}img/ieee.png`} className="navbar-logo-img" alt="IEEE Logo" />
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
