import React from "react";
import "./scss/podcast.scss";
import Layout from "../components/Layout";

const Podcast = () => {
  return (
    <Layout>
      <section className="podcast">
        <div className="podcast__hero" />

        <h2 className="podcast__text">Coming Soon</h2>
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
      </section>
    </Layout>
  );
};

export default Podcast;
