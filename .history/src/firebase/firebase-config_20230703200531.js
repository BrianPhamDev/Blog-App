// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvYgsZz9zgVLPl1CRt32h11zSY1hwyQnQ",
  authDomain: "blogging-dc5e9.firebaseapp.com",
  projectId: "blogging-dc5e9",
  storageBucket: "blogging-dc5e9.appspot.com",
  messagingSenderId: "470546749308",
  appId: "1:470546749308:web:b657e2250e78464d5c36f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Init Service
export const db = getFirestore(app);
