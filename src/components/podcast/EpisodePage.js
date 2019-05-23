import React from "react";
// import "../../pages/scss/podcast.scss";
import "./episode.scss";

const EpisodePage = ({ info }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const publishDate = new Date(info.date);

  const month = months[publishDate.getMonth()];
  const day = publishDate.getDate();
  const year = publishDate.getFullYear();

  console.log(month, day, year);
  return (
    <div className="episodePage">
      <div className="podcast__hero" />
      <div className="episodePage__group">
        <h1>{info.title}</h1>
        <p className="episodePage__date">
          Published {`${month} ${day}, ${year}`}
        </p>
      </div>

      <div className="episodePage__group">
        <iframe
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          title="episode 1"
          src={`${info.src}`}
        />
        <p className="episodePage__desc">{info.description}</p>
      </div>
    </div>
  );
};

export default EpisodePage;
