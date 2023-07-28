import React from "react";
import "./homeBanner.scss";
import PostMeta from "../Post/postMeta/PostMeta";

const HomeBanner = () => {
  return (
    <div className="banner w-full">
      <div className="banner-hero">
        <a href="/" className="banner-thumb">
          <img
            className="thumb"
            src="https://ucarecdn.com/bf8c9c92-90cd-476c-a83a-f16f990c74f5/-/crop/1366x769/0,674/-/preview/-/quality/lighter/-/format/auto/-/scale_crop/1920x1080/center/"
            alt="thumbnail"
          />
        </a>
        <div className="banner-content">
          <h2 className="banner-title">
            <a href="*" className="banner-heading heading-2">
              Canned Refills Are Here and I Want Them To Go Viral
            </a>
          </h2>
          <PostMeta></PostMeta>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
