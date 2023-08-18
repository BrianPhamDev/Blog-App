import React from "react";
import { Dot } from "../../../components/icons";
import "./postMeta.scss";
import { Link } from "react-router-dom";
import slugify from "slugify";

const PostMeta = ({
  category = "Packaging",
  time = "07/25/2023",
  className,
  ...props
}) => {
  if (!category || category === "") return null;
  const timestamp = Timestamp.fromDate(new Date(item.createdAt.seconds * 1000));
  const formattedDate = timestamp.toDate().toLocaleDateString("en-US");
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
