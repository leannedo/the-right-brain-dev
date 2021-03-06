// Library
import React from 'react'
import { Link } from 'gatsby'

// Styling
import './Header.scss'

const Header = () => {
  return(
    <header>
      <nav className="nav-bar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
