import React from "react";

import Layout from "../../components/Layout";
import Profile from "../../components/profile/Profile";

const Chirp = () => {
  return (
    <Layout>
      <Profile band="chirp" />
    </Layout>
  );
};

export default Chirp;

// export const profileImage = graphql`
//   query {
//     chirpProfile: file(relativePath: { eq: "images/chirp-profile.jpg" }) {
//       ...profileImage
//     }
//   }
// `;
