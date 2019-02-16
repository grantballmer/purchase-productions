import React from 'react';
// import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from "../components/Layout";
// import Content from '../components/Content';
import PhotoGrid from "../components/services/PhotoGrid";
import chirp from "../components/images/chirp.jpg";

export const GalleryPageTemplate = ({ info }) => {
  console.log(info);
  console.log(info.gallery);

  const images = info.frontmatter.grid.map(image => {
    return (
      <div className="preview-image">
        <img src={chirp} alt="band" />
        <p className="preview-band">Band Name</p>
      </div>
    );
  });

  return (
    <div className="preview-container">
      {images} 
    </div>
  );
};

const GalleryPage = ({ data }) => {
  console.log(data);
  const { markdownRemark: gallery } = data;
  const images = gallery.frontmatter.grid;

  console.log(images);

  return (
    <Layout>
      <PhotoGrid />
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
