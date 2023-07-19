import React from "react";
import "./homePage.scss";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase-config";
const HomePage = () => {
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
};
export default HomePage;
