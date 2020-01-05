import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import "./scss/band.scss"
import SEO from "../components/SEO"

import Layout from "../components/Layout"
import SocialMedia from "../components/bandsPage/SocialMedia"
import Management from "../components/bandsPage/Management"

// export const BandPageTemplate = ({ info }) => {
//   const { title } = info
//   const isDesign = title === "design"
//   console.log(info)

//   const images = info.grid.map((element, index) => {
//     if (isDesign) {
//       return <img src={element.image} alt="poster" key={index} />
//     } else {
//       return (
//         <div className="preview-image">
//           <img src={element.image} alt="band" />
//           <p className="preview-band">{element.band}</p>
//         </div>
//       )
//     }
//   })

//   return (
//     <div
//       className={title === "design" ? "preview-design" : "preview-photography"}
//     >
//       {images}
//     </div>
//   )
// }

const bandTemplate = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  const { name, genre, banner, social, management } = frontmatter
  const { spotify, youtube, itunes, facebook, instagram } = social[0]
  console.log(name)
  const backgroundClass =
    name === "Chirp" || name === "Nathan Purchase" ? "top" : ""

  // if (social) {
  //   spotify = social[0].spotify
  //   youtube = social[0].youtube
  //   itunes = social[0].itunes
  //   facebook = social[0].facebook
  //   instagram = social[0].instagram
  // }

  return (
    <React.Fragment>
      <SEO
        title={`${name} - Purchase Productions`}
        keywords=""
        description="Purchase Productions LLC offers an array of services, including: meeting any of your concert/band photography needs, poster and album design, and any booking/tour management needs."
        canonical="/services"
      />
      <Layout>
        <section className="profile-container">
          <div className="profile-hero-wrapper">
            <div className="svg-container svg-container__profile">
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
              className={`profile-hero profile-hero__${backgroundClass}`}
              fluid={banner.childImageSharp.fluid}
              alt={name}
            >
              <h2>{name}</h2>
            </BackgroundImage>
          </div>

          <div className="profile-about">
            <div className="profile-about__info">
              <h3>{name}</h3>
              <h4>{genre}</h4>
              <div dangerouslySetInnerHTML={{ __html: html }}></div>
            </div>
            {/* {social && (
              
            )} */}

            <SocialMedia
              info={{ spotify, youtube, itunes, facebook, instagram }}
            />
          </div>

          <div className="profile-contact">
            <div className="svg-container svg-container__profile svg-container__contact">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <polygon points="0,0 100,0 100,12 0,4" />
              </svg>
            </div>
            <h4>Contact Info</h4>

            <div className="profile-contact__details">
              <Management people={management} />
            </div>
            <div />
          </div>
        </section>
      </Layout>
    </React.Fragment>
  )
}

export default bandTemplate

export const bandQuery = graphql`
  query BandPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        path
        name
        genre
        social {
          facebook
          instagram
          itunes
          spotify
          youtube
        }
        management {
          email
          name
          position
        }
        banner {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
