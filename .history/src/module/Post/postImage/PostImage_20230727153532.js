import React from "react";
import { Link } from "react-router-dom";
import "./postImage.scss";
const PostImage = ({
  className = "",
  url = "",
  alt = "",
  to = "",
  classLink = "",
}) => {
  if (to)
    return (
      <Link to={`/${to}`} className={`${classLink} block w-full h-full`}>
        <div className={`post-image ${className}`}>
          <img
            src={url}
            alt={alt}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </Link>
    );
  return (
    <div className={`post-image ${className}`}>
      <img src={url} alt={alt} loading="lazy" />
    </div>
  );
};

export default PostImage;
