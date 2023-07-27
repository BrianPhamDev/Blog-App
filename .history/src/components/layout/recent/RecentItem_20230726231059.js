import React from "react";
import "./recentItem.scss";
import { Dot } from "../../icons";
const RecentItem = () => {
  return (
    <article className="">
      <a href="/" className="recent-thumb">
        <img
          src="https://ucarecdn.com/68830555-c722-4277-a9b0-f2d8ace86ae6/-/crop/1400x788/0,73/-/preview/-/quality/lighter/-/format/auto/-/scale_crop/600x338/center/"
          alt=""
        />
        <header className="recent-meta">
          <h3 className="recent-category meta">Spirits</h3>
          <Dot></Dot>
          <span className="recent-date meta text-[var(--text-meta)]">
            07/26/2023
          </span>
        </header>
        <h2 className="recent-title heading-3">
          Sandbar Aperitif And Its Laid Back Aesthetic
        </h2>
      </a>
    </article>
  );
};

export default RecentItem;
