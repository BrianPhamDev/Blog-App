import React from "react";
import { Dot } from "../../../components/icons";
import "./postMeta.scss";
const PostMeta = () => {
  return (
    <div className="postmeta">
      <div className="postmeta-category meta">Sustainable</div>
      <div className="postmeta-dot">
        <Dot></Dot>
      </div>
      <div className="postmeta-time meta">5h</div>
    </div>
  );
};

export default PostMeta;
