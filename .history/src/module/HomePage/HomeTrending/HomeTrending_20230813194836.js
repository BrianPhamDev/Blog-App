import React, { useEffect } from "react";
import "./homeTrending.scss";
import Trending from "../../../components/layout/trending/Trending";

const HomeTrending = () => {
  const [posts, setPosts] = useEffect([]);
  if (posts.length < 0) return null;
  console.log(setPosts);
  return (
    <div className="trending">
      <span>Trend</span>
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
