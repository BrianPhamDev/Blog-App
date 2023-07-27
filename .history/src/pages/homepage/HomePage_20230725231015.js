import React from "react";
import "./homePage.scss";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase-config";
import Header from "../../components/header/Header";
import HomeBanner from "../../module/HomePage/HomeBanner";
import Layout from "../../layout/Layout";

const HomePage = () => {
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="container">
      <Layout></Layout>
    </div>
  );
};
export default HomePage;
