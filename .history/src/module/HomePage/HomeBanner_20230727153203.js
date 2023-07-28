import React from "react";
import "./homeBanner.scss";
import PostMeta from "../Post/postMeta/PostMeta";
import { Link } from "react-router-dom";
import PostImage from "../Post/postImage/PostImage";
const HomeBanner = () => {
  return (
    <div className="banner w-full">
      <div className="banner-hero">
        <PostImage
          to="/"
          classLink="banner-thumb"
          url="https://ucarecdn.com/bf8c9c92-90cd-476c-a83a-f16f990c74f5/-/crop/1366x769/0,674/-/preview/-/quality/lighter/-/format/auto/-/scale_crop/1920x1080/center/"
          alt="thumbnail"
        ></PostImage>
        {/* <Link to="/" className="banner-thumb">
          <img
            className="thumb"
            src="https://ucarecdn.com/bf8c9c92-90cd-476c-a83a-f16f990c74f5/-/crop/1366x769/0,674/-/preview/-/quality/lighter/-/format/auto/-/scale_crop/1920x1080/center/"
            alt="thumbnail"
          />
        </Link> */}
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
