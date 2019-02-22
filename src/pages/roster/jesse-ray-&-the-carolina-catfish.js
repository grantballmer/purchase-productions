import React from 'react';
import { graphql } from 'gatsby';

import Layout from "../../components/Layout";
import Profile from "../../components/profile/Profile";

const JesseRay = ({ data }) => {

  return (
    <Layout>
      <Profile band='jesseRay' image={data.jesseProfile.childImageSharp.fluid}/>
    </Layout>
  );
};

export default JesseRay;

export const profileImage = graphql `
  query {
    jesseProfile: file(relativePath: { eq: "images/jesse-profile.jpg"}) {
      ...profileImage
    }
  }
`;
