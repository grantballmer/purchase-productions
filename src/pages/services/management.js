import React from "react";
import "../scss/management.scss";

import Handshake from "../icons/handshake.svg";
import Connection from "../icons/connection.svg";
import Location from "../icons/location.svg";

import ManagementCard from "../../components/services/ManagementCard";

import Layout from "../../components/Layout";

const Management = () => {
  return (
    <Layout>
      <section className="management">
        <div className="management__hero" />
        <ManagementCard icon={Handshake} heading="management" />
        <ManagementCard icon={Location} heading="tour management" />
        <ManagementCard icon={Connection} heading="booking" />
      </section>

      <div>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/ddara" title="dDara">
          dDara
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>{" "}
        is licensed by{" "}
        <a
          href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
          target="_blank"
          rel="noopener noreferrer"
        >
          CC 3.0 BY
        </a>
      </div>

      <div>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/srip" title="srip">
          srip
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>{" "}
        is licensed by{" "}
        <a
          href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
          target="_blank"
          rel="noopener noreferrer"
        >
          CC 3.0 BY
        </a>
      </div>
    </Layout>
  );
};

export default Management;

// export const managementBkgrd = graphql`
//   query {
//     management: file(relativePath: { eq: "images/management-bkgrd.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 1800) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `;

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
