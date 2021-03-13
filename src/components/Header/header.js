// Library
import React from 'react'
import { Link } from 'gatsby'

// Styling
import './Header.scss'

// Component
import Logo from '../Logo'

const Header = () => {
  return(
    <header>
      <nav className="nav-bar">
        <Logo />
        <ul>
          <li>
            <Link to="/" className="nav-link" activeClassName="active">Home</Link>
          </li>
          <li>
            <Link to="/blog" className="nav-link" activeClassName="active">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
