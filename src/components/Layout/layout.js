// Library
import React from 'react'

// Component
import Header from "../Header/header"

// Styling
import './Layout.scss'

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      {children}
    </div>
  )
}

export default Layout
