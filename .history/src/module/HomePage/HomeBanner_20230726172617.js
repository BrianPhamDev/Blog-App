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
            src="https://cdn.wccftech.com/wp-content/uploads/2023/07/Ratchet-Clank-Rift-Apart-Ray-tracing-AMD-scaled.jpg"
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
