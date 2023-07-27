import React from "react";
import "./trending.scss";
const Trending = ({ url, title, desc }) => {
  return (
    <div className="trend-wrapper">
      <div className="trend-thumb">
        <img src={url} alt="trend-image" className="trend-image" />
      </div>
      <div className="trend-content">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Trending;
