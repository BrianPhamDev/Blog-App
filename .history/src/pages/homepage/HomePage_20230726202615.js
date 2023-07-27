import React from "react";
import "./homePage.scss";
// import { signOut } from "firebase/auth";
// import { auth } from "../../firebase/firebase-config";
import HomeBanner from "../../module/HomePage/HomeBanner";
import Layout from "../../layout/Layout";
import Heading from "../../components/layout/heading/Heading";
import HomeTrending from "../../module/HomePage/HomeTrending/HomeTrending";
const HomePage = () => {
  // const handleSignOut = () => {
  //   signOut(auth);
  // };
  return (
    <div className="container">
      <Layout>
        <HomeBanner></HomeBanner>
        <Heading className="mb-6">Trending Now</Heading>
        <HomeTrending></HomeTrending>
      </Layout>
    </div>
  );
};
export default HomePage;
