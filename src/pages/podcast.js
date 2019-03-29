import React from "react";
import "./scss/podcast.scss";
// import Mic from "./images/mic.jpg";
import Layout from "../components/Layout";

const Podcast = () => {
  return (
    <Layout>
      <section className="podcast">
        <div
          className="podcast__hero"
          // style={{ backgroundImage: `url(${Mic})` }}
        />
        <h2 className="podcast__text">Coming Soon</h2>
      </section>
    </Layout>
  );
};

export default Podcast;
