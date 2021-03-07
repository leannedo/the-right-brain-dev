import React from 'react'
import { graphql } from 'gatsby'
import hastToHyperscript from "hast-to-hyperscript"

import Head from '../components/head'
import Layout from '../components/Layout/layout'

import './Post.scss'

const renderHtmlToReact = (node) => {
  return hastToHyperscript(React.createElement, node)
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      htmlAst
    }
  }
`

const Post = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, htmlAst } = markdownRemark
  const { title, date } = frontmatter

  return (
    <div>
      <Head title={title}/>
      <Layout>
        <p className="title">{title}</p>
        <p className="date">{date}</p>
        <div className="content">{renderHtmlToReact(htmlAst)}</div>
      </Layout>
    </div>
  )
}

export default Post
