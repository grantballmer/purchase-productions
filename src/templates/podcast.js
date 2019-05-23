// import React from "react";
// // import Helmet from 'react-helmet';
// import { graphql } from "gatsby";
// import Layout from "../components/Layout";
// // import Content from '../components/Content';
// import PhotoGrid from "../components/services/PhotoGrid";

// export const GalleryPageTemplate = ({ info }) => {
//   const { title } = info;
// };

// const PodcastPage = ({ data }) => {
//   const { markdownRemark: podcast } = data;
//   const images = gallery.frontmatter.grid;
//   const { title } = gallery.frontmatter;

//   return (
//     <Layout>
//       <PhotoGrid images={images} title={title} />
//     </Layout>
//   );
// };

// export default PodcastPage;

// export const podcastQuery = graphql`
//   query Podcast($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       id
//       html
//       frontmatter {
//         title
//         grid {
//           image {
//             childImageSharp {
//               fluid(maxWidth: 1400) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//           band
//         }
//       }
//     }
//   }
// `;
