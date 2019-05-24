import React from "react";
// import { graphql } from "gatsby";
import "./scss/podcast.scss";
import Layout from "../components/Layout";
import { Link } from "gatsby";

// import PodcastLogo from "./images/podcast-logo.jpg";

const Podcast = props => {
  // const { edges } = data.allMarkdownRemark;

  // const months = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December"
  // ];

  // const episodes = edges.map(episode => {
  //   const { frontmatter } = episode.node;

  //   const publishDate = new Date(frontmatter.date);

  //   const month = months[publishDate.getMonth()];
  //   const day = publishDate.getDate();
  //   const year = publishDate.getFullYear();

  //   const slug = frontmatter.title.toLowerCase().replace(/\s/g, "-");

  //   console.log(slug);

  //   return (
  //     <Link
  //       to={`/podcast/special-music-episode`}
  //       className="episode-container"
  //       key={episode}
  //     >
  //       <div className="episode-counter">{frontmatter.episode}</div>
  //       <h2>{frontmatter.title}</h2>
  //       <p>{`${month} ${day}, ${year}`}</p>
  //       <p>{frontmatter.description}</p>
  //     </Link>
  //   );
  // });

  return (
    <Layout>
      <section className="podcast">
        <div className="podcast__hero" />

        <h1>Episodes</h1>

        <div className="episodes">
          {/* {episodes} */}
          <Link
            to="/podcast/special-music-episode"
            className="episode-container"
          >
            <div className="episode-counter">02</div>
            <h2>Special Music Episode</h2>
            <p>May 22nd, 2019</p>
            <p>
              Special music episode featuring the songs of bands from Michigan,
              Ohio, and Colorado.
            </p>
          </Link>

          <Link
            to="/podcast/chris-bota-and-john-nowak"
            className="episode-container"
          >
            <div className="episode-counter">01</div>
            <h2>Chris Bota & John Nowak of Desmond Jones</h2>
            <p>May 20th, 2019</p>
            <p>
              On episode 001, featuring Chris Bota and John Nowak of Desmond
              Jones, we chat about the early years and members and tour life.
              Listen now!
            </p>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Podcast;

// export const episodeQuery = graphql`
//   query Episode {
//     allMarkdownRemark(filter: { frontmatter: { episode: { ne: null } } }) {
//       edges {
//         node {
//           frontmatter {
//             title
//             date
//             description
//             src
//             episode
//           }
//         }
//       }
//     }
//   }
// `;

// https://frontendhappyhour.com/
