import React from "react";
import Layout from "../../../components/Layout";
import Episode from "../../../components/podcast/Episode";

const specialMusicEpisode = ({ location }) => {
  return (
    <Layout>
      <Episode title={location.state} />
    </Layout>
  );
};

export default specialMusicEpisode;
