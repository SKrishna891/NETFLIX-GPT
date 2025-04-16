// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtaHP8QckXw2j7jp6FDb0kvjM_cBcbZnI",
  authDomain: "netflixgpt-bfb28.firebaseapp.com",
  projectId: "netflixgpt-bfb28",
  storageBucket: "netflixgpt-bfb28.firebasestorage.app",
  messagingSenderId: "866901327844",
  appId: "1:866901327844:web:28ab43b6b195ef8c5691f1",
  measurementId: "G-0YTSFTS6YK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth(app);