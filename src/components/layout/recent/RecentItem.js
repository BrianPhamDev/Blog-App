import React from "react";
import "./recentItem.scss";
import { Dot } from "../../icons";
const RecentItem = ({ data }) => {
  // if (!data.id) return null;
  const date = data?.createdAt?.seconds
    ? new Date(data?.createdAt?.seconds * 1000)
    : new Date();
  const formatDate = new Date(date).toLocaleDateString("vi-VI");
  console.log(data);
  return (
    <article className="recent-wrapper">
      <a href="/" className="recent-thumb">
        <img src={data?.image} alt="thumb-recent" className="recent-image" />
      </a>
      <header className="recent-meta">
        <h3 className="recent-category meta">{data?.category.name}</h3>
        <Dot></Dot>
        <span className="recent-date meta text-[var(--text-meta)]">
          07/26/2023
        </span>
      </header>
      <h2 className="recent-title heading-3">{data?.title}</h2>
    </article>
  );
};

export default RecentItem;
