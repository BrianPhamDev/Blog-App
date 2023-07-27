import React from "react";
import "./homeBanner.scss";

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
          <h2 className="banner-title heading-2">
            Ratchet & Clank: Rift Apart Won’t Support Ray Tracing on AMD GPUs at
            Launch
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
