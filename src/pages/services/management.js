import React from 'react';
import '../scss/management.scss';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../../components/Layout';

const Management = () => {

  return (
    <Layout>
      <div className="management">
        <h1>Management Page</h1>
      </div>
    </Layout>
  );
};

export default Management;

// export const imageQuery = graphql `
//   query {
//     imageOne: file(relativePath: { eq: "images/desmond-jones-hero.jpg"}) {
//       childImageSharp {
//         fluid(maxWidth: 800) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `;

// export default () => (
//   <StaticQuery
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
//     render={data => {

//       console.log(data);
//       return (
//         <Layout>
//           <div className="Management">
//             <h1>Management Page</h1>        
//           </div>
//         </Layout>
//       );
//     }}
//   />
// );

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
