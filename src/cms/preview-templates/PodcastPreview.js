import React from "react";
import { PodcastPageTemplate } from "../../templates/podcast";

const PodcastPagePreview = ({ entry, widgetsFor }) => {
  const info = entry.getIn(["data"]).toJS();

  return <PodcastPageTemplate info={info} />;
};

export default PodcastPagePreview;
