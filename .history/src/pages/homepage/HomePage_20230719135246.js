import React from "react";
import "./homePage.scss";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase-config";
import Header from "../../components/header/Header";
const HomePage = () => {
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="container">
      <Header></Header>
    </div>
  );
};
export default HomePage;
