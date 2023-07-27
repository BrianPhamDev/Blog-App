import React from "react";
import "./trending.scss";
const Trending = ({ url, title, desc }) => {
  return (
    <div className="trend-wrapper">
      <div className="trend-thumb">
        <img src={url} alt="trend-image" className="trend-image" />
      </div>
      <div className="trend-content">
        <h3 className="trend-title heading-2 text-gradient">{title}</h3>
        <p className="trend-desc">{desc}</p>
      </div>
    </div>
  );
};

export default Trending;
