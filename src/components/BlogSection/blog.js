import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import './blog.scss'
import Head from "../head"

const BlogSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            frontmatter {
              title
              date (formatString: "DD MMMM YYYY")
              description
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  console.log(data)

  const { allMarkdownRemark } = data
  const { edges: postArray } = allMarkdownRemark

  return (
    <div>
      <Head title="Blog"/>
      <h1 className="page-title">My blog</h1>
      <ol className="post-list">
        {postArray.map(post => (
          <li key={post.node.frontmatter.title} className="post">
            <p style={{ marginBottom: '0.5rem' }}>{post.node.frontmatter.date}</p>
            <Link to={`/${post.node.fields.slug}`} className="post-title hover-text">{post.node.frontmatter.title}</Link>
            <p className="description">{post.node.frontmatter.description}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default BlogSection
