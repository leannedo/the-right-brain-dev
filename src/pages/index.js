// Library
import React from 'react'
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

// Styling
import '../styles/index.scss'

// Components
import Head from '../components/head'
import Layout from '../components/Layout/layout'
import BlogSection from '../components/BlogSection/blog'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Home = () => {
  deckDeckGoHighlightElement().then();

  return (
    <div>
      <Head title="Home"/>
      <Layout>
        <div className="about">
          <p className="about-intro">
            Hei, I'm Leanne Do, owner of <a href="https://www.facebook.com/naophaidicode" className="hover-text" target="_blank" rel="noreferrer">
            Nao Phai Di Code</a> -
            a record of my <span className="hover-text">software development</span> journey
            aiming to encourage anyone (esp. women) who learns programming on their own.
            Passionate about <span className="hover-text">languages</span>,
            I'm intrigued by the way logic and syntax work together to
            build a reality from virtually nothing.
          </p>
          <p className="about-sub">Based in Finland. Made in Vietnam.</p>
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
        </div>
        <BlogSection />
      </Layout>

    </div>
  )
}

export default Home
