import React from "react";
// import "../../pages/scss/podcast.scss";
import "./episode.scss";

const EpisodePage = ({ info }) => {
  return (
    <div className="episodePage">
      <div className="podcast__hero" />
      <div className="episodePage__group">
        <h1>{info.title}</h1>
        <p className="episodePage__date">Published ${info.date}</p>
      </div>

      <div className="episodePage__group">
        <iframe
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          title="episode 1"
          src={`"${info.src}"`}
        />
        <p className="episodePage__desc">{info.desc}</p>
      </div>
    </div>
  );
};

export default EpisodePage;
