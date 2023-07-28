import React from "react";
import "./trending.scss";
import PostMeta from "../../../module/Post/postMeta/PostMeta";
import PostImage from "../../../module/Post/postImage/PostImage";
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
      <PostImage url={url}></PostImage>
      <a href="/" className="trend-thumb">
        <img src={url} alt="trend-topic" className="trend-image" />
      </a>
      <div className="trend-content">
        <h3 className="trend-title heading-2 text-gradient">{title}</h3>
        <PostMeta category={category} time={time}></PostMeta>
        <p className="trend-desc bodycopy">{desc}</p>
      </div>
    </div>
  );
};

export default Trending;
