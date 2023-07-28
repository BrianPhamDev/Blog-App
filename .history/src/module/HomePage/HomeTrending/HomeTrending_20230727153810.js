import React from "react";
import "./homeTrending.scss";
import Trending from "../../../components/layout/trending/Trending";

const postInfo = [
  {
    url: "https://ucarecdn.com/5afb40ee-5e87-4564-bd81-eda7e194ed39/-/crop/1708x962/117,13/-/preview/-/quality/lighter/-/format/auto/-/scale_crop/1920x1080/center/",
    title: "Snoop Dogg Releases Ice Cream Brand Based On His Bored Ape",
    desc: "Snoop Dogg has just partnered with Happi Co. to launch a line of ice cream called Dr. Bombay.",
    to: "bvce",
  },
  {
    url: "https://ucarecdn.com/861c49f9-63ed-4886-aa18-9eab7859daff/-/crop/1400x788/0,0/-/preview/-/quality/lighter/-/format/auto/-/scale_crop/1920x1080/center/",
    title: "YUNGBLD Brings Educated Mess’ Bold, Messy Vision To Life",
    desc: "YUNGBLD Studio recently rebranded Educated Mess, a skincare line founded by chemists, by helping the skincare line bring to life its dynamic vision.",
    to: "fsa",
  },
  {
    url: "https://ucarecdn.com/750d574a-71b5-4b74-b7a2-fa39196b8913/-/crop/1920x1079/0,0/-/preview/-/quality/lighter/-/format/auto/-/scale_crop/1920x1080/center/",
    title: "Goodles' IPA-Inspired Mac and Cheese Returns In A Snazzy New Box",
    desc: `Is it mac and cheese or a beer? Goodles asks, "why not both?"`,
    to: "dsa",
  },
];

const HomeTrending = () => {
  return (
    <div className="trending">
      {postInfo.map((item) => (
        <Trending
          key={item.title}
          url={item.url}
          title={item.title}
          desc={item.desc}
          to={item.to}
        ></Trending>
      ))}
    </div>
  );
};

export default HomeTrending;
