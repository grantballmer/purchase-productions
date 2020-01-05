import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import "../scss/box.scss"

import Layout from "../components/Layout"
import SideBooking from "../components/roster/SideBooking"
import Loading from "../components/contact/Loading"
import Success from "../components/contact/Success"
import Error from "../components/contact/Error"

import Artist from "../components/roster/Artist"

class Roster extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showOverlay: false,
      currentArtist: "",
      formWaiting: false,
      success: false,
      error: false,
    }
  }

  slideFunc = e => {
    const { showOverlay } = this.state
    const currentArtist = e.currentTarget.dataset.artist || ""

    // if (showOverlay) {
    //   document.body.style.position = 'fixed';
    // }
    this.setState({
      currentArtist,
      showOverlay: !showOverlay,
    })
  }

  formWaitingScreen = () => {
    this.setState({ formWaiting: true })
  }

  formSuccessScreen = () => {
    this.setState({ success: true, formWaiting: false })
  }

  formErrorScreen = () => {
    this.setState({ error: true, formWaiting: false })
  }

  render() {
    const {
      showOverlay,
      currentArtist,
      formWaiting,
      success,
      error,
    } = this.state
    const slideClass = showOverlay ? "slide" : ""
    const noScrollClass = showOverlay ? "noScroll" : ""

    const { edges } = this.props.data.allMarkdownRemark
    console.log(edges)
    const bandInfo = edges.map(band => (
      <Artist
        name={band.node.frontmatter.name}
        path={band.node.frontmatter.path}
        image={band.node.frontmatter.thumbnail.childImageSharp.fluid}
        slideFunc={this.slideFunc}
        key={band.node.frontmatter.name + band.node.frontmatter.path}
      />
    ))

    return (
      <React.Fragment>
        <SEO
          title="Roster - Purchase Productions"
          keywords=""
          description="Check out the current roster of Purchase Productions. Inquire about setting up a show with any group."
          canonical="/roster"
        />
        <Layout>
          {formWaiting && <Loading />} {/* render Loading component */}
          {/* Check if form has been submitted, if it has, render success or error component; if not, render form component */}
          {success || error ? (
            success ? (
              <Success />
            ) : (
              <Error />
            )
          ) : (
            <React.Fragment>
              <div
                className={`overlay overlay-color ${slideClass}`}
                onClick={this.slideFunc}
              />
              <SideBooking
                slideClass={slideClass}
                currentArtist={currentArtist}
                slideFunc={this.slideFunc}
                formFuncs={{
                  formWaitingScreen: this.formWaitingScreen,
                  formSuccessScreen: this.formSuccessScreen,
                  formErrorScreen: this.formWaitingScreen,
                }}
              />
              <section className={`box-container ${noScrollClass}`}>
                {bandInfo}
              </section>
            </React.Fragment>
          )}
        </Layout>
      </React.Fragment>
    )
  }
}

export default Roster

export const servicesImages = graphql`
  query ArtistsThumbnails {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "bandTemplate" } } }
    ) {
      edges {
        node {
          frontmatter {
            name
            path
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
