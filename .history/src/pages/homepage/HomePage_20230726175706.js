import React from "react";
import "./homePage.scss";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase-config";
import HomeBanner from "../../module/HomePage/HomeBanner";
import Layout from "../../layout/Layout";
import Heading from "../../components/layout/heading/Heading";

const HomePage = () => {
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="container">
      <Layout>
        <HomeBanner></HomeBanner>
        <Heading>Trending Now</Heading>
      </Layout>
    </div>
  );
};
export default HomePage;
