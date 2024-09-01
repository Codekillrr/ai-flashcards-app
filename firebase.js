// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGF1gx_ns6_1FRGgLNWeMbvnFwWg6ezOI",
  authDomain: "flashcardsaas-e38fb.firebaseapp.com",
  projectId: "flashcardsaas-e38fb",
  storageBucket: "flashcardsaas-e38fb.appspot.com",
  messagingSenderId: "1029932953110",
  appId: "1:1029932953110:web:2639e1c37161ca97e10f37",
  measurementId: "G-KQ3QKLVDXG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);