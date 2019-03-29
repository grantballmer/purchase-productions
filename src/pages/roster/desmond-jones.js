import React from "react";
// import { graphql } from 'gatsby';

import Layout from "../../components/Layout";
import Profile from "../../components/profile/Profile";

const DesmondJones = () => {
  return (
    <Layout>
      <Profile band="desmondJones" />
    </Layout>
  );
};

export default DesmondJones;

// export const profileImage = graphql `
//   fragment profileImage on File {
//     childImageSharp {
//       fluid(maxWidth: 1600) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// `;

// export const servicesImages = graphql `
//   query {
//     desmondProfile: file(relativePath: { eq: "images/desmond-jones-profile.jpg"}) {
//       ...profileImage
//     }
//   }
// `;
