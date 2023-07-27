import React from "react";
import "./recentNews.scss";
import RecentItem from "../../components/layout/recent/RecentItem";
const RecentNews = () => {
  return (
    <section className="recent">
      <RecentItem></RecentItem>
      <RecentItem></RecentItem>
      <RecentItem></RecentItem>
      <RecentItem></RecentItem>
      <RecentItem></RecentItem>
      <RecentItem></RecentItem>
    </section>
  );
};

export default RecentNews;
