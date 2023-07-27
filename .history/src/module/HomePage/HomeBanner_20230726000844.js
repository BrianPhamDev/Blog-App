import React from "react";
import "./homeBanner.scss";

const HomeBanner = () => {
  return (
    <div className="banner w-full">
      <div className="banner-hero">
        <div className="banner-thumb">
          <img
            className="thumb w-full h-full object-cover rounded-lg"
            src="https://cdn.wccftech.com/wp-content/uploads/2023/07/Ratchet-Clank-Rift-Apart-Ray-tracing-AMD-scaled.jpg"
            alt="thumbnail"
          />
        </div>
        <div className="banner-content">Content</div>
      </div>
    </div>
  );
};

export default HomeBanner;
