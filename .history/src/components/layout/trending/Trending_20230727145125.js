import React from "react";
import "./trending.scss";
import { Dot } from "../../icons";
import PostMeta from "../../../module/Post/postMeta/PostMeta";
const Trending = ({
  url,
  title,
  desc,
  category,
  time,
  className,
  ...props
}) => {
  return (
    <div className={`trend-wrapper ${className}`} {...props}>
      <a href="/" className="trend-thumb">
        <img src={url} alt="trend-topic" className="trend-image" />
      </a>
      <div className="trend-content">
        <h3 className="trend-title heading-2 text-gradient">{title}</h3>
        <div className="trend-meta">
          <span className="trend-category meta">Beauty</span>
          <Dot color="var(--inactive)"></Dot>
          <span className="trend-date meta">07/25/2023</span>
        </div>
        <PostMeta category={category} time={time}></PostMeta>
        <p className="trend-desc bodycopy">{desc}</p>
      </div>
    </div>
  );
};

export default Trending;
