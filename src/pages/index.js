import React from 'react'
import { Link } from 'gatsby'
import '../styles/index.scss'
import Head from "../components/head"

const Home = () => {
  return (
    <div>
      <Head title="Home"/>
      <div>Hello world!</div>
      <Link to="/blog">MY BLOG</Link>
    </div>
  )
}

export default Home
