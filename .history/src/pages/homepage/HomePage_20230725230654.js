import React from "react";
import "./homePage.scss";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase-config";
import Header from "../../components/header/Header";
import HomeBanner from "../../module/HomePage/HomeBanner";
const HomePage = () => {
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="container">
      <Header></Header>
      <HomeBanner></HomeBanner>
    </div>
  );
};
export default HomePage;
