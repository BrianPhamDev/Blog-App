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
            src="https://ucarecdn.com/5afb40ee-5e87-4564-bd81-eda7e194ed39/-/crop/1708x962/117,13/-/preview/-/quality/lighter/-/format/auto/-/scale_crop/1920x1080/center/"
            alt="thumbnail"
          />
        </div>
        <div className="banner-content">
          <h2 className="banner-title">
            <a href="*" className="banner-heading heading-2">
              Ratchet & Clank: Rift Apart Won’t Support Ray Tracing on AMD GPUs
              at Launch
            </a>
          </h2>
          <div className="banner-footer">
            <div className="banner-category meta">Gaming</div>
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
