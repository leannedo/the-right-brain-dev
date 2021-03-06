import React from 'react'
import { graphql } from 'gatsby'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
    }
  }
`

const Post = ({ data }) => {
  return (
    <div>
      <Head title={data.contentfulBlogPost.title}/>
      <h1>{data.contentfulBlogPost.title}</h1>
      <p>{data.contentfulBlogPost.publishedDate}</p>
    </div>
  )
}

export default Post
