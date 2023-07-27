import React from "react";
import "./trending.scss";
const Trending = ({ url, title, children }) => {
  return (
    <div className="trend-wrapper">
      <div className="trend-thumb">
        <img src={url} alt="trend-image" className="trend-image" />
      </div>
      <div className="trend-content">{children}</div>
    </div>
  );
};

export default Trending;
