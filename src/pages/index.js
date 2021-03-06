import React from 'react'
import '../styles/index.scss'
import Head from '../components/head'
import Layout from '../components/Layout/layout'
import BlogSection from '../components/BlogSection/blog'

const Home = () => {
  return (
    <div>
      <Head title="Home"/>
      <Layout>
        <BlogSection />
      </Layout>
    </div>
  )
}

export default Home
