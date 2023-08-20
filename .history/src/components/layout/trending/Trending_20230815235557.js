import React, { useEffect, useState } from "react";
import "./trending.scss";
import PostMeta from "../../../module/Post/postMeta/PostMeta";
import PostImage from "../../../module/Post/postImage/PostImage";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase-config";
import { Link } from "react-router-dom";

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
    async function fetchData() {
      if (categoryId) {
        // Make sure categoryId is not empty
        const docRef = doc(db, "categories", categoryId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          // Check if the document exists before accessing its data
          setPostCategory(docSnap.data().name);
        } else {
          console.log("Category not found"); // Handle the case where the document doesn't exist
        }
      }
    }
    fetchData();
  }, [categoryId]);

  if (!props || props.id) return null;
  return (
    <div className={`trend-wrapper ${className}`} {...rest}>
      <PostImage to={to} url={url} classLink="trend-thumb"></PostImage>
      <div className="trend-content">
        <Link></Link>
        <h3 className="trend-title heading-2 text-gradient">{title}</h3>
        <PostMeta category={postCategory} time={time}></PostMeta>
        <p className="trend-desc bodycopy">{desc}</p>
      </div>
    </div>
  );
};

export default Trending;