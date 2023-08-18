import React from "react";
import { Dot } from "../../../components/icons";
import "./postMeta.scss";
import { Link } from "react-router-dom";
import slugify from "slugify";

const PostMeta = ({ category = "Packaging", date, className, ...props }) => {
  if (!category || category === "") return null;

  return (
    <div className={`postmeta ${className}`} {...props}>
      <Link
        className="postmeta-category meta"
        to={slugify(category, { lower: true })}
      >
        {category}
      </Link>
      <div className="postmeta-dot">
        <Dot></Dot>
      </div>
      <div className="postmeta-time meta">{date}</div>
    </div>
  );
};

export default PostMeta;
