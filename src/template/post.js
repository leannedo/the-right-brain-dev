import React from 'react'
import { graphql } from 'gatsby'

import Head from '../components/head'
import Layout from '../components/Layout/layout'


export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Post = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { title, date } = frontmatter

  return (
    <div>
      <Head title={title}/>
      <Layout>
        <p>{date}</p>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }}/>
      </Layout>
    </div>
  )
}

export default Post
