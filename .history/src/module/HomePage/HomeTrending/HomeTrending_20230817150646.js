import React, { useEffect, useState } from "react";
import "./homeTrending.scss";
import Trending from "../../../components/layout/trending/Trending";
import {
  collection,
  onSnapshot,
  query,
  where,
  limit,
} from "firebase/firestore";
import { db } from "../../../firebase/firebase-config";

const HomeTrending = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const colRef = collection(db, "posts");
    const queries = query(
      colRef,
      where("status", "==", 1),
      where("featured", "==", true),
      limit(4)
    );

    onSnapshot(queries, (querySnapshot) => {
      // console.log(querySnapshot);
      const results = [];
      querySnapshot.forEach((item) => {
        results.push({ id: item.id, ...item.data() });
      });
      console.log(results);
      setPosts(results);
    });
  }, []);

  if (posts.length < 0) return null;

  return (
    <div className="trending">
      {posts.map((item) => (
        <Trending
          key={item.id}
          url={item.image}
          title={item.title}
          desc={item.description}
          to={item.slug}
          categoryId={item.categoryId}
          data={item}
        ></Trending>
      ))}
    </div>
  );
};

export default HomeTrending;
