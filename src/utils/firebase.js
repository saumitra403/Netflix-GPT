// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBueU_mzzIPF0ugmEK87Q0ngFxCrLsU_pE",
  authDomain: "netflixgpt-f4b1e.firebaseapp.com",
  projectId: "netflixgpt-f4b1e",
  storageBucket: "netflixgpt-f4b1e.appspot.com",
  messagingSenderId: "732811532484",
  appId: "1:732811532484:web:e3f18b320870bea6735191",
  measurementId: "G-H9CWLK6ZLK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
