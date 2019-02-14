import React from 'react';
// import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from "../components/Layout";
import PhotoGrid from "../components/services/PhotoGrid";

const GalleryTemplate = ({ data }) => {
  const { markdownRemark: gallery } = data;
  const images = gallery.frontmatter.insideGallery;



  return (
    <Layout>
      <PhotoGrid images={images} />
    </Layout>
  );
};

export default GalleryTemplate;


// export const galleryQuery = graphql `
//   query Gallery($id: String!) {
//     page: markdownRemark(id: {eq: $id}) {
//       id
//       frontmatter {
//         templateKey
//         title 
//         insideGallery {
//           band
//         }
//       }
//     }
//   }
// `;

export const galleryQuery = graphql `
  query Gallery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        insideGallery {
          thumbnail
          band
        }
      }
    }
  }
`;
