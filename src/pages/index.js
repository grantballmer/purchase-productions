// import React from 'react'
// import PropTypes from 'prop-types'
// import { Link, graphql } from 'gatsby'
// import Layout from '../components/Layout'

// export default class IndexPage extends React.Component {
//   render() {
//     const { data } = this.props
//     const { edges: posts } = data.allMarkdownRemark

//     return (
//       <Layout>
//         <section className="section">
//           <div className="container">
//             <div className="content">
//               <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
//             </div>
//             {posts
//               .map(({ node: post }) => (
//                 <div
//                   className="content"
//                   style={{ border: '1px solid #333', padding: '2em 4em' }}
//                   key={post.id}
//                 >
//                   <p>
//                     <Link className="has-text-primary" to={post.fields.slug}>
//                       {post.frontmatter.title}
//                     </Link>
//                     <span> &bull; </span>
//                     <small>{post.frontmatter.date}</small>
//                   </p>
//                   <p>
//                     {post.excerpt}
//                     <br />
//                     <br />
//                     <Link className="button is-small" to={post.fields.slug}>
//                       Keep Reading →
//                     </Link>
//                   </p>
//                 </div>
//               ))}
//           </div>
//         </section>
//       </Layout>
//     )
//   }
// }

// IndexPage.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       edges: PropTypes.array,
//     }),
//   }),
// }

// export const pageQuery = graphql`
//   query IndexQuery {
//     allMarkdownRemark(
//       sort: { order: DESC, fields: [frontmatter___date] },
//       filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
//     ) {
//       edges {
//         node {
//           excerpt(pruneLength: 400)
//           id
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//             templateKey
//             date(formatString: "MMMM DD, YYYY")
//           }
//         }
//       }
//     }
//   }
// `

import React from 'react';
import "./scss/index.scss";
import concert from "./images/concert-comp.jpg";
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout>
        <React.Fragment>
          <section className="hero-wrapper">
            <div className="svg-container">
              <svg width='100%' height='100%' viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon points="0,94 100,98 100,100 0,100" />
              </svg>
            </div>
            <div className="hero" />
          </section>
          
          <div className="home-about">
            <p>Purchase Productions is a one stop shop for your band management, booking, design, and 
              photography needs based out of Muskegon, MI.</p>
            <Link to="/about" className="btn btn-link">ABOUT US</Link>
          </div>
          
          <section className="home-booking-wrapper">
            <div className="svg-container svg-container__booking" >
              <svg width='100%' height='100%' viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon points="0,0 100,0 100,12 0,4" />
              </svg>
            </div>
            <div className="home-booking" style={{ backgroundImage: `url(${concert}` }}>
              <Link to="/contact">Book With Us</Link>
              <p>Interested in one of our live bands?</p>
              <p>Contact us and book your next event.</p>
            </div>
          </section>
        </React.Fragment>
      </Layout>
  );
};

export default IndexPage;
