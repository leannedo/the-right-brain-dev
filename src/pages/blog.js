import React from 'react'
import Layout from '../components/Layout/layout'
import Head from "../components/head"
import BlogSection from "../components/BlogSection/blog"

const Blog = () => {
  return(
  <div>
    <Head title="Home"/>
    <Layout>
      <BlogSection />
    </Layout>
  </div>

  )
}

export default Blog
