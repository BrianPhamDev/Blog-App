import React, { useEffect, useState } from "react";
import "./recentNews.scss";
import RecentItem from "../../components/layout/recent/RecentItem";
import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/firebase-config";

const RecentNews = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const colRef = collection(db, "posts");
    const queries = query(
      colRef,
      where("status", "==", 1),
      where("featured", "==", false),
      limit(6)
    );

    onSnapshot(queries, (querySnapshot) => {
      const results = [];
      querySnapshot.forEach((item) => {
        results.push({ id: item.id, ...item.data() });
      });
      setPosts(results);
    });
  }, []);
  if (posts.length <= 0) return null;
  return (
    <section className="recent">
      {posts.length > 0 &&
        posts.map((item) => (
          <RecentItem key={item.id} data={item}></RecentItem>
        ))}
      <RecentItem></RecentItem>
    </section>
  );
};

export default RecentNews;
