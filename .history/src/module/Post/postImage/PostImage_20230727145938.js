import React from "react";

const PostImage = ({ className = "", url = "", alt = "", to = "" }) => {
  return (
    <div className={`post-image ${className}`}>
      <img src={url} alt={alt} loading="lazy" />
    </div>
  );
};

export default PostImage;
