import React from 'react';
// import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from "../components/Layout";
// import Content from '../components/Content';
import PhotoGrid from "../components/services/PhotoGrid";
import chirp from "../components/images/chirp.jpg";

export const GalleryPageTemplate = ({ info }) => {
  const { title } = info;

  const images = info.grid.map(element => {
    return (
      <div className="preview-image">
        <img src={element.image} alt="band" />
        <p className="preview-band">{element.band}</p>
      </div>
    );
  });

  return (
    <div className={title === 'design' ? 'preview-design' : 'preview-photography'}>
      {images} 
    </div>
  );
};

const GalleryPage = ({ data }) => {
  console.log(data);
  const { markdownRemark: gallery } = data;
  const images = gallery.frontmatter.grid;
  const { title } = gallery.frontmatter;

  return (
    <Layout>
      <PhotoGrid images={images} title={title}/>
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
