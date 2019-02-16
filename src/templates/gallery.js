import React from 'react';
// import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from "../components/Layout";
// import Content from '../components/Content';
import PhotoGrid from "../components/services/PhotoGrid";

export const GalleryPageTemplate = ({ info }) => {

  return (
    <PhotoGrid images={info.frontmatter.grid} />
  );
};

const GalleryPage = ({ data }) => {
  console.log(data);
  const { markdownRemark: gallery } = data;
  const images = gallery.frontmatter.grid;

  return (
    <Layout>
      <GalleryPageTemplate images={images} />
    </Layout>
  );
};


export default GalleryPage;

export const galleryQuery = graphql `
  query Gallery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        grid {
          image {
            childImageSharp {
                original {
                  width
                  height
                  src
                } 
              }
          }
          band
        }
      }
    }
  }
`;
