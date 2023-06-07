import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/SEO"
import BackgroundImage from "gatsby-background-image"

import "../scss/index.scss"
import concert from "../images/concert.jpg"
import POME from "../images/pome-logo.png"
import Layout from "../components/Layout"

const IndexPage = ({ data }) => {
  return (
    <React.Fragment>
      <SEO
        title="Home - Purchase Productions"
        keywords=""
        description="Purchase Productions LLC. is a Michigan based agency for band management, tour management, design, and music/band/concert photography"
        canonical="/"
      />
      <Layout>
        <section className="hero-wrapper">
          <div className="svg-container">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="0,94 100,98 100,100 0,100" />
            </svg>
          </div>
          <BackgroundImage
            className={`hero`}
            fluid={data.hero.childImageSharp.fluid}
            alt="concert photo at night"
          ></BackgroundImage>
        </section>

        <div className="home-about">
          <h1>
            Purchase Productions is a one stop shop for your photography needs
            based out of Muskegon, MI.
          </h1>
          <Link to="/about" className="btn btn-link">
            ABOUT US
          </Link>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default IndexPage

export const homeHeroImage = graphql`
  query {
    hero: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
