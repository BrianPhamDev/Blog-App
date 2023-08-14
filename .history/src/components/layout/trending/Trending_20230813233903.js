import React, { useEffect, useState } from "react";
import "./trending.scss";
import PostMeta from "../../../module/Post/postMeta/PostMeta";
import PostImage from "../../../module/Post/postImage/PostImage";
import { collection, doc, getDoc, query, where } from "firebase/firestore";
import { db } from "../../../firebase/firebase-config";
import { func } from "prop-types";

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
    async function getData() {
      const docRef = doc(db, "categories", categoryId);
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data);
      // const queries = query(docRef, where("id", "==", categoryId));
    }
    getData();
  }, [categoryId]);

  if (!props || props.id) return null;
  return (
    <div className={`trend-wrapper ${className}`} {...rest}>
      <PostImage to={to} url={url} classLink="trend-thumb"></PostImage>
      <div className="trend-content">
        <h3 className="trend-title heading-2 text-gradient">{title}</h3>
        <PostMeta category={postCategory} time={time}></PostMeta>
        <p className="trend-desc bodycopy">{desc}</p>
      </div>
    </div>
  );
};

export default Trending;
