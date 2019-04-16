import React from "react";
import "./scss/podcast.scss";
import Layout from "../components/Layout";

const Podcast = () => {
  return (
    <Layout>
      <section className="podcast">
        <div className="podcast__hero" />
        <iframe
          width="100%"
          height="166"
          scrolling="no"
          frameborder="no"
          title="soundcloud"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/34019569&amp;color=0066cc"
        />
        <h2 className="podcast__text">Coming Soon</h2>
      </section>
    </Layout>
  );
};

export default Podcast;
