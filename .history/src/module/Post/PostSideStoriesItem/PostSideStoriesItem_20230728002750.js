import React from "react";

const PostSideStoriesItem = ({ children }) => {
  return (
    <div className="post-side-stories-item heading-4 cursor-pointer hover:underline smooth-transition">
      {children}
    </div>
  );
};

export default PostSideStoriesItem;
