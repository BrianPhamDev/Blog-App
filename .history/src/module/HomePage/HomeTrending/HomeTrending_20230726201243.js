import React from "react";
import "./homeTrending.scss";
import TrendingLeftToRight from "../../../components/layout/trending/TrendingLeftToRight";
import TrendingRightToLeft from "../../../components/layout/trending/TrendingRightToLeft";
const HomeTrending = () => {
  return (
    <div className="trending">
      <TrendingLeftToRight></TrendingLeftToRight>
      <TrendingRightToLeft></TrendingRightToLeft>
    </div>
  );
};

export default HomeTrending;
