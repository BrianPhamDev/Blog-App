import React from "react";
import "homeBanner.scss";

const HomeBanner = () => {
  return (
    <div className="banner w-full">
      <div className="banner-hero w-full grid">
        <div className="banner-thumb">Thumbnail</div>
        <div className="banner-content">Content</div>
      </div>
    </div>
  );
};

export default HomeBanner;
