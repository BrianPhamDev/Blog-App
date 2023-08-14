import React, { useEffect, useState } from "react";
import "./trending.scss";
import PostMeta from "../../../module/Post/postMeta/PostMeta";
import PostImage from "../../../module/Post/postImage/PostImage";
import { collection, doc, getDoc, query, where } from "firebase/firestore";
import { db } from "../../../firebase/firebase-config";

const Trending = (props) => {
  const {
    url,
    title,
    desc,
    category,
    time,
    className,
    to,
    categoryId,
    ...rest
  } = props;
  const [postCategory, setPostCategory] = useState("");

  useEffect(() => {
    const docRef = doc(db, "categories", categoryId);
    const queries = query(docRef, where("id", "==", categoryId));
  }, [categoryId]);

  if (!props || props.id) return null;
  return (
    <div className={`trend-wrapper ${className}`} {...rest}>
      <PostImage to={to} url={url} classLink="trend-thumb"></PostImage>
      <div className="trend-content">
        <h3 className="trend-title heading-2 text-gradient">{title}</h3>
        <PostMeta category={} time={time}></PostMeta>
        <p className="trend-desc bodycopy">{desc}</p>
      </div>
    </div>
  );
};

export default Trending;