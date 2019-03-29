import React from "react";

import Layout from "../../components/Layout";
import Profile from "../../components/profile/Profile";

const JesseRay = () => {
  return (
    <Layout>
      <Profile band="jesseRay" />
    </Layout>
  );
};

export default JesseRay;

// export const profileImage = graphql`
//   query {
//     jesseProfile: file(relativePath: { eq: "images/jesse-ray-profile.jpg" }) {
//       ...profileImage
//     }
//   }
// `;
