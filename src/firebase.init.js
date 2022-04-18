// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1zMky1OeqgUalCwme7UA7yAj-6Yhwx5E",
  authDomain: "ema-john-project-6dbf9.firebaseapp.com",
  projectId: "ema-john-project-6dbf9",
  storageBucket: "ema-john-project-6dbf9.appspot.com",
  messagingSenderId: "86166995478",
  appId: "1:86166995478:web:da7dd46262bf730a23eb37",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
