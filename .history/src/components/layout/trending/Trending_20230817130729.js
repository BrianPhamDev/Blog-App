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
    className,
    to,
    categoryId,
    data,
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

  const date = new Date(data?.createdAt?.seconds * 1000);
  console.log(date);

  if (!props || props.id) return null;
  return (
    <div className={`trend-wrapper ${className}`} {...rest}>
      <PostImage to={to} url={url} classLink="trend-thumb"></PostImage>
      <div className="trend-content">
        <Link to={to}>
          <h3 className="trend-title heading-2 text-gradient">{title}</h3>
        </Link>

        <PostMeta category={postCategory}></PostMeta>
        <p className="trend-desc bodycopy">{desc}</p>
      </div>
    </div>
  );
};

export default Trending;
