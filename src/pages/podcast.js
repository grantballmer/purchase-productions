import React from "react";
import "./scss/podcast.scss";
import Layout from "../components/Layout";

import PodcastLogo from "./images/podcast-logo.jpg";

const Podcast = () => {
  return (
    <Layout>
      <section className="podcast">
        <div className="podcast__hero" />

        <div className="podcast__sidebar">
          <img src={PodcastLogo} alt="Podcast Logo" />
          <h3>
            Become a patron today:{" "}
            <a
              href="https://www.patreon.com/LifeThroughMusic?fbclid=IwAR0DDKNeJlPKKeUJBEbRw7nXAuiAOad-lzawY-C0F-OKen1fIbPhedpuulc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Life Through Music
            </a>
          </h3>
        </div>

        {/* <h2 className="podcast__text">Coming Soon</h2> */}

        <div className="episode-container">
          <h1>Episode 001 - Chris Bota & John Nowak of Desmond Jones</h1>
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="episode 1"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/621764838&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          />
        </div>
      </section>
    </Layout>
  );
};

export default Podcast;
