// Library
import React from 'react'
import { graphql } from 'gatsby'
import hastToHyperscript from "hast-to-hyperscript"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

// Components
import Head from '../components/head'
import Layout from '../components/Layout/layout'
import Logo from "../components/Logo"

// Styling
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
        <div className="blog-footer">
          <div className="icons">
            <a href="https://www.facebook.com/naophaidicode" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebookSquare}/>
            </a>
            <a href="https://www.linkedin.com/in/leanedo/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin}/>
            </a>
            <a href="https://github.com/leannedo" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub}/>
            </a>
          </div>
          <div className="blog-footer-content">
            <Logo />
            <div>
              <div className="intro">
                <p className="hey">Hei, I'm</p>
                <p className="name">Leanne Do</p>
                <p className="quote">A writer who codes = A coder who writes</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Post
