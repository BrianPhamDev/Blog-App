import React, { useEffect } from "react";
import "./homeTrending.scss";
import Trending from "../../../components/layout/trending/Trending";

const HomeTrending = () => {
  const [posts, setPosts] = useEffect([]);
  if (posts.length < 0) return null;
  return <div className="trending"></div>;
};

export default HomeTrending;
