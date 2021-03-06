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
      allContentfulBlogPost (
    sort: {
      fields:publishedDate
      order: DESC
    }
  ) {
    edges {
      node {
        title
        slug
        publishedDate (formatString: "MMMM Do, YYYY")
      }
    }
  }
    }
  `)

  console.log(data)

  const postArray = data.allContentfulBlogPost.edges

  return (
    <div>
      <Head title="Blog"/>
      <h1>{data.site.siteMetadata.title}</h1>
      <h3>{data.site.siteMetadata.author}</h3>
      <ol>
        {postArray.map(post => (
          <li key={post.node.title} className="post">
            <Link to={`/blog/${post.node.slug}`}>
              <h2>{post.node.title}</h2>
              <p>{post.node.publishedDate}</p>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Blog
