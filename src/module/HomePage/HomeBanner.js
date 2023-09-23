import React from "react";
import "./homeBanner.scss";
import PostMeta from "../Post/postMeta/PostMeta";
import PostImage from "../Post/postImage/PostImage";
const HomeBanner = () => {
  return (
    <div className="banner w-full">
      <div className="banner-hero">
        <PostImage
          to="banner-page"
          classLink="banner-thumb"
          url="https://ucarecdn.com/da74bb60-38be-4b81-91a1-c64c3384b6a0/-/quality/lighter/-/format/auto/-/scale_crop/1920x1080/center/"
          alt="thumbnail"
        ></PostImage>
        <div className="banner-content">
          <h2 className="banner-title">
            <a href="*" className="banner-heading heading-2">
              Cyrene Oenobeer Packaging Captures The Essence Of The Beer-Wine
              Blend
            </a>
          </h2>
          <PostMeta category="BEER & MALT" date="23/9/2023"></PostMeta>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
