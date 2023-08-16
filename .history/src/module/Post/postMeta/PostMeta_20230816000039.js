import React from "react";
import { Dot } from "../../../components/icons";
import "./postMeta.scss";
import { Link } from "react-router-dom";
const PostMeta = ({
  category = "Packaging",
  time = "07/25/2023",
  className,
  ...props
}) => {
  if (!category || category === "") return null;
  return (
    <div className={`postmeta ${className}`} {...props}>
      <Link className="postmeta-category meta" to={category}>
        {category}
      </Link>
      <div className="postmeta-dot">
        <Dot></Dot>
      </div>
      <div className="postmeta-time meta">{time}</div>
    </div>
  );
};

export default PostMeta;
