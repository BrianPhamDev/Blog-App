import React, { useEffect } from "react";
import "./homeTrending.scss";
import Trending from "../../../components/layout/trending/Trending";

const HomeTrending = () => {
  const [postss, setPostss] = useEffect([]);
  if (postss.length < 0) return null;
  console.log(setPostss);
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
