import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import "../scss/podcast.scss"
import Layout from "../components/Layout"
import { Link } from "gatsby"

import PodcastLogo from "../images/podcast-logo.jpg"

const Podcast = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const sortedEpisodes = edges.sort((a, b) => {
    return b.node.frontmatter.episode - a.node.frontmatter.episode
  })

  const episodes = sortedEpisodes.map((episode, index) => {
    const { frontmatter } = episode.node

    const publishDate = new Date(frontmatter.date)

    const month = months[publishDate.getMonth()]
    const day = publishDate.getDate()
    const year = publishDate.getFullYear()

    const slug = frontmatter.title.toLowerCase().replace(/\s/g, "-")

    return (
      <Link
        to={`/podcast/${slug}`}
        className="episode-container"
        key={episode + index}
      >
        <div className="episode-counter">{frontmatter.episode}</div>
        <h2>{frontmatter.title}</h2>
        <p>{`${month} ${day}, ${year}`}</p>
        <p>{frontmatter.description}</p>
      </Link>
    )
  })

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Podcast - Purchase Productions</title>
        <meta
          name="keywords"
          content="Nathan Purchase, Purchase, Life Through Music, Purchase Productions, podcast, Purchase Productions LLC, Music Agency, Concert Photography, Michigan Music, Michigan music agency"
        ></meta>
        <meta
          name="description"
          content="Nathan Purchase and the team put out a weekly podcast interviewing individuals from every aspect of the music industry. Check out the Patreon page for exclusive content."
        ></meta>
        <link rel="canonical" href="https://purchaseproductions.com/podcast" />
      </Helmet>
      <Layout>
        <section className="podcast">
          <div className="podcast__hero" />

          <div className="podcast-banner">
            <h1>Episodes</h1>
            <a
              href="https://www.patreon.com/LifeThroughMusic?fbclid=IwAR1sc0pOHxiVtLdU89uyDb4tKi_wkXIN86vu3faSeFSfN-yPHhTbcDSSyyM"
              target="_blank"
              rel="noopener noreferrer"
              class="podcast__logo"
            >
              <img src={PodcastLogo} alt="life through music logo" />
              <p>Become a patron today</p>
            </a>
          </div>

          <div className="episodes">{episodes}</div>
        </section>
      </Layout>
    </React.Fragment>
  )
}

export default Podcast

export const episodeQuery = graphql`
  query Episode {
    allMarkdownRemark(filter: { frontmatter: { episode: { ne: null } } }) {
      edges {
        node {
          frontmatter {
            title
            date
            description
            src
            episode
          }
        }
      }
    }
  }
`
