import React from "react";
import { graphql } from "gatsby";
import "../scss/box.scss";
import Layout from "../components/Layout";
import SideBooking from "../components/roster/SideBooking";
import Artist from "../components/roster/Artist";

class Roster extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showOverlay: false,
      currentArtist: ""
    };
  }

  slideFunc = e => {
    const { showOverlay } = this.state;
    // e.stopPropagation();
    const currentArtist = e.currentTarget.dataset.artist || "";

    // if (showOverlay) {
    //   document.body.style.position = 'fixed';
    // }

    this.setState({
      currentArtist,
      showOverlay: !showOverlay
    });
  };

  render() {
    const { showOverlay, currentArtist } = this.state;
    const slideClass = showOverlay ? "slide" : "";
    const noScrollClass = showOverlay ? "noScroll" : "";

    const { chirp, desmond, jesse } = this.props.data;

    return (
      <Layout>
        <div
          className={`overlay overlay-color ${slideClass}`}
          onClick={this.slideFunc}
        />
        <SideBooking
          slideClass={slideClass}
          currentArtist={currentArtist}
          slideFunc={this.slideFunc}
        />
        <section className={`box-container ${noScrollClass}`}>
          <Artist
            name="Desmond Jones"
            image={desmond.childImageSharp.fluid}
            slideFunc={this.slideFunc}
          />
          <Artist
            name="Jesse Ray & The Carolina Catfish"
            image={jesse.childImageSharp.fluid}
            slideFunc={this.slideFunc}
          />
          <Artist
            name="Chirp"
            image={chirp.childImageSharp.fluid}
            slideFunc={this.slideFunc}
          />
        </section>
      </Layout>
    );
  }
}

export default Roster;

export const servicesImages = graphql`
  query {
    desmond: file(relativePath: { eq: "images/desmond-jones-roster.jpg" }) {
      ...fluidImage
    }
    jesse: file(relativePath: { eq: "images/jesse-ray-roster.jpg" }) {
      ...fluidImage
    }
    chirp: file(relativePath: { eq: "images/chirp-roster.jpg" }) {
      ...fluidImage
    }
  }
`;
