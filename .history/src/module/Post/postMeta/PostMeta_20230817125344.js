import React from "react";
import { Dot } from "../../../components/icons";
import "./postMeta.scss";
import { Link } from "react-router-dom";
import slugify from "slugify";

const PostMeta = ({ category = "Packaging", time, className, ...props }) => {
  if (!category || category === "") return null;
  console.log(time);
  console.log(time[seconds]);
  // const date = new Date(time.seconds * 1000);
  // console.log(date);
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
      <div className="postmeta-time meta">{time}</div>
    </div>
  );
};

export default PostMeta;
