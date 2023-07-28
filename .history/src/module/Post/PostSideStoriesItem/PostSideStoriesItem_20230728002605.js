import React from "react";

const PostSideStoriesItem = ({ children }) => {
  return (
    <div className="post-side-stories-item heading-4 cursor-pointer hover:underline transition-all">
      {children}
    </div>
  );
};

export default PostSideStoriesItem;
