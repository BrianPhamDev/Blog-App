import React from "react";
import "./homePage.scss";
// import { signOut } from "firebase/auth";
// import { auth } from "../../firebase/firebase-config";
import HomeBanner from "../../module/HomePage/HomeBanner";
import Layout from "../../components/layout/Layout";
import Heading from "../../components/layout/heading/Heading";
import HomeTrending from "../../module/HomePage/HomeTrending/HomeTrending";
const HomePage = () => {
  return (
    <div className="container">
      <Layout>
        <HomeBanner></HomeBanner>
        <Heading className="mb-10 mt-14">Trending Now</Heading>
        <HomeTrending></HomeTrending>
      </Layout>
    </div>
  );
};
export default HomePage;
