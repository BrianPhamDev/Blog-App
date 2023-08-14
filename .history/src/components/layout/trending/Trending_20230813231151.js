import React from "react";
import "./trending.scss";
import PostMeta from "../../../module/Post/postMeta/PostMeta";
import PostImage from "../../../module/Post/postImage/PostImage";
const Trending = (props) => {
  const { url, title, desc, category, time, className, to, ...rest } = props;
  return (
    <div className={`trend-wrapper ${className}`} {...rest}>
      <PostImage to={to} url={url} classLink="trend-thumb"></PostImage>
      <div className="trend-content">
        <h3 className="trend-title heading-2 text-gradient">{title}</h3>
        <PostMeta category={category} time={time}></PostMeta>
        <p className="trend-desc bodycopy">{desc}</p>
      </div>
    </div>
  );
};

export default Trending;
