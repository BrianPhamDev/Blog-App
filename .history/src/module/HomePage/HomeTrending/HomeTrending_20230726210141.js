import React from "react";
import "./homeTrending.scss";
import Trending from "../../../components/layout/trending/Trending";

const postInfo = [
  {
    url: "https://ucarecdn.com/5afb40ee-5e87-4564-bd81-eda7e194ed39/-/crop/1708x962/117,13/-/preview/-/quality/lighter/-/format/auto/-/scale_crop/1920x1080/center/",
    title: "Snoop Dogg Releases Ice Cream Brand Based On His Bored Ape",
    desc: "Snoop Dogg has just partnered with Happi Co. to launch a line of ice cream called Dr. Bombay.",
  },
];

const HomeTrending = () => {
  return (
    <div className="trending">
      <Trending></Trending>
    </div>
  );
};

export default HomeTrending;
