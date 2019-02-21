import React from 'react';
import '../scss/management.scss';
// import { StaticQuery, graphql } from 'gatsby';
// import Img from 'gatsby-image';

import Layout from '../../components/Layout';

const Management = () => {

  return (
    <Layout>
      <div className="managment">
        <h1>Management Page</h1>
      </div>
    </Layout>
  );
};

export default Management;

// export default () => (
//   <staticQuery
//     query={graphql`
//       query ServicesImages {
//         fileName: file(relativePath: { eq: "../images/concert-comp.jpg"}) {
//           childImageSharp {
//             fixed(width: 125, height: 125) {
//               ...GatsbyImageSharpFixed
//           }
//         }
//       }
//     `}
//   />
// )

// const Management = (props) => {
//   console.log(props);
//   return (
//     <Layout>
//       <section className="management">
//         <div className="management-box"></div>
//         <Img fixed={props.data} />
//       </section>
//     </Layout>
//   );
// };

// export default Management;

// export const galleryQuery = graphql `
//   query ServicesImages {
//     fileName: file(relativePath: { eq: "../images/concert-comp.jpg"}) {
//       childImageSharp {
//         fixed(width: 125, height: 125) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `;
