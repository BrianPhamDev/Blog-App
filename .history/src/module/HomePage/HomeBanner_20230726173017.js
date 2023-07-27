import React from "react";
import "./homeBanner.scss";
import { Dot } from "../../components/icons";

const HomeBanner = () => {
  return (
    <div className="banner w-full">
      <div className="banner-hero">
        <div className="banner-thumb">
          <img
            className="thumb"
            src="https://ucarecdn.com/bf8c9c92-90cd-476c-a83a-f16f990c74f5/-/crop/1366x769/0,674/-/preview/-/quality/lighter/-/format/auto/-/scale_crop/1920x1080/center/"
            alt="thumbnail"
          />
        </div>
        <div className="banner-content">
          <h2 className="banner-title">
            <a href="*" className="banner-heading heading-2">
              Canned Refills Are Here and I Want Them To Go Viral
            </a>
          </h2>
          <div className="banner-footer">
            <div className="banner-category meta">Sustainable</div>
            <div className="banner-dot">
              <Dot></Dot>
            </div>
            <div className="banner-time meta">5h</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
