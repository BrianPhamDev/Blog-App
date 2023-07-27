import React from "react";
import "./recentItem.scss";
const RecentItem = () => {
  return (
    <article>
      <a href="/" className="recent-thumb">
        <img
          src="https://ucarecdn.com/68830555-c722-4277-a9b0-f2d8ace86ae6/-/crop/1400x788/0,73/-/preview/-/quality/lighter/-/format/auto/-/scale_crop/600x338/center/"
          alt=""
        />
        <header className="recent-meta">
          <h3 className="recent-title">
            Sandbar Aperitif And Its Laid Back Aesthetic
          </h3>
        </header>
        <h2 className="recent-title heading-3">
          Sandbar Aperitif And Its Laid Back Aesthetic
        </h2>
      </a>
    </article>
  );
};

export default RecentItem;
