import React, { useEffect, useState } from "react";
import "./homeTrending.scss";
import Trending from "../../../components/layout/trending/Trending";
import { collection, query, where } from "firebase/firestore";
import { db } from "../../../firebase/firebase-config";

const HomeTrending = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const colRef = collection(db, "posts");
    const queries = query(colRef, where("status", "==", "2"));
  }, []);

  if (posts.length < 0) return null;

  return (
    <div className="trending">
      {/* {postInfo.map((item) => (
        <Trending
          key={item.title}
          url={item.url}
          title={item.title}
          desc={item.desc}
          to={item.to}
        ></Trending>
      ))} */}
    </div>
  );
};

export default HomeTrending;
