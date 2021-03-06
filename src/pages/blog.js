import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import './blog.scss'
import Head from "../components/head"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
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

  const { site, allMarkdownRemark } = data
  const { siteMetadata } = site
  const { edges: postArray } = allMarkdownRemark

  return (
    <div>
      <Head title="Blog"/>
      <h1>{siteMetadata.title}</h1>
      <h3>{siteMetadata.author}</h3>
      <ol>
        {postArray.map(post => (
          <li key={post.node.frontmatter.title} className="post">
            <Link to={`/blog/${post.node.fields.slug}`}>
              <h2>{post.node.frontmatter.title}</h2>
              <p>{post.node.frontmatter.date}</p>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Blog
