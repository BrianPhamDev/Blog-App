import React from "react";
import "./homePage.scss";
import HomeBanner from "../../module/HomePage/HomeBanner";
import Layout from "../../components/layout/Layout";
import HomeTrending from "../../module/HomePage/HomeTrending/HomeTrending";
import Heading from "../../components/layout/heading/Heading";
const HomePage = () => {
  return (
    <div className="container">
      <Layout>
        <HomeBanner></HomeBanner>
        <Heading className="mb-10 mt-14">Trending Now</Heading>
        <HomeTrending></HomeTrending>
        <Heading className="mb-10 mt-14">Trending Now</Heading>
      </Layout>
    </div>
  );
};
export default HomePage;
