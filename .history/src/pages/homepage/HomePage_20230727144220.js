import React from "react";
import "./homePage.scss";
import HomeBanner from "../../module/HomePage/HomeBanner";
import Layout from "../../components/layout/Layout";
import HomeTrending from "../../module/HomePage/HomeTrending/HomeTrending";
import Heading from "../../components/layout/heading/Heading";
import RecentNews from "../../module/RecentNews/RecentNews";
import PostMeta from "../../module/Post/postMeta/PostMeta";
const HomePage = () => {
  return (
    <div className="container">
      <Layout>
        <HomeBanner></HomeBanner>
        <Heading>Trending Now</Heading>
        <HomeTrending></HomeTrending>
        <Heading>Recent News</Heading>
        <RecentNews></RecentNews>
      </Layout>
    </div>
  );
};
export default HomePage;
