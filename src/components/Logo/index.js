import React from 'react'
import { Link } from 'gatsby'
import './Logo.scss'

const Logo = () => {
  return(
    <div className="logo"><Link to="/" className="logo-link">LD</Link></div>
  )
}

export default Logo
