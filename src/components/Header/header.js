// Library
import React from 'react'
import { Link } from 'gatsby'

// Styling
import './Header.scss'

const Header = () => {
  return(
    <header>
      <nav className="nav-bar">
        <p><Link to="/" className="nav-link">LEANNE</Link></p>
        <ul>
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/blog" className="nav-link">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
