import React from "react";
import "./homePage.scss";
import HomeBanner from "../../module/HomePage/HomeBanner";
import Layout from "../../components/layout/Layout";
import HomeTrending from "../../module/HomePage/HomeTrending/HomeTrending";
import Heading from "../../components/layout/heading/Heading";
import RecentNews from "../../module/RecentNews/RecentNews";
import PostImage from "../../module/Post/postImage/PostImage";
const HomePage = () => {
  return (
    <div className="container">
      <Layout>
        <HomeBanner></HomeBanner>
        <PostImage
          to="dsad"
          url="https://ucarecdn.com/861c49f9-63ed-4886-aa18-9eab7859daff/-/crop/1400x788/0,0/-/preview/-/quality/lighter/-/format/auto/-/scale_crop/1920x1080/center/"
        ></PostImage>
        <Heading>Trending Now</Heading>
        <HomeTrending></HomeTrending>
        <Heading>Recent News</Heading>
        <RecentNews></RecentNews>
      </Layout>
    </div>
  );
};
export default HomePage;
