import React from "react";
import { Dot } from "../../../components/icons";
import "./postMeta.scss";
const PostMeta = ({
  category = "Packaging",
  time = "07/25/2023",
  className,
  ...props
}) => {
  if (!category || category === "") return "N/A";
  return (
    <div className={`postmeta ${className}`} {...props}>
      <div className="postmeta-category meta">{category}</div>
      <div className="postmeta-dot">
        <Dot></Dot>
      </div>
      <div className="postmeta-time meta">{time}</div>
    </div>
  );
};

export default PostMeta;
