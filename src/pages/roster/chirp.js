import React from 'react';
import { graphql } from 'gatsby';

import Layout from "../../components/Layout";
import Profile from "../../components/profile/Profile";

const Chirp = ({ data }) => {

  return (
    <Layout>
      <Profile band='chirp' image={data.chirpProfile.childImageSharp.fluid}/>
    </Layout>
  );
};

export default Chirp;

export const profileImage = graphql `
  query {
    chirpProfile: file(relativePath: { eq: "images/chirp-lg.jpg"}) {
      ...profileImage
    }
  }
`;
