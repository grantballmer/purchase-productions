import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PhotoGrid from "../components/services/PhotoGrid";

export const PodcastPageTemplate = ({ info }) => {
  const { title, date, description, episode } = info;

  return (
    <div>
      <p>{title}</p>
      <p>{date}</p>
      <p>{description}</p>
      <p>{episode}</p>
    </div>
  );
};

const PodcastPage = ({ data }) => {
  const { markdownRemark: podcast } = data;
  // const images = podcast.frontmatter.grid;
  const { title } = gallery.frontmatter;

  return (
    <Layout>
      <div>{title}</div>
    </Layout>
  );
};

export default PodcastPage;

export const podcastQuery = graphql`
  query Podcast($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        grid {
          image {
            childImageSharp {
              fluid(maxWidth: 1400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          band
        }
      }
    }
  }
`;
