import React from "react";
import { Link } from "react-router-dom";

const PostImage = ({ className = "", url = "", alt = "", to = "" }) => {
  if (to)
    <Link to={`/${to}`} style={{ display: "block" }}>
      <div className={`post-image ${className}`}>
        <img src={url} alt={alt} loading="lazy" />
      </div>
    </Link>;
  return (
    <div className={`post-image ${className}`}>
      <img src={url} alt={alt} loading="lazy" />
    </div>
  );
};

export default PostImage;
