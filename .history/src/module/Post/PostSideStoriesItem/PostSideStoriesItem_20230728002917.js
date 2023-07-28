import React from "react";
import { Link } from "react-router-dom";

const PostSideStoriesItem = ({ children, to }) => {
  return (
    <Link to={/{to}} className="post-side-stories-item heading-4 cursor-pointer hover:underline smooth-transition">
      {children}
    </Link>
  );
};

export default PostSideStoriesItem;
