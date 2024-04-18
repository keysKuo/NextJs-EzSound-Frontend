"use client";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBNlxJ4noOHGWGS5OaQznTASrtQ32pFTcI",
    authDomain: "uppbeat-f299a.firebaseapp.com",
    projectId: "uppbeat-f299a",
    storageBucket: "uppbeat-f299a.appspot.com",
    messagingSenderId: "962727045712",
    appId: "1:962727045712:web:0222db8284ebe5b0563f55",
    measurementId: "G-1NZ15FBDVL",
};

// Initialize Firebase
try {
    const app = initializeApp(firebaseConfig);
    // getAnalytics(app);
} catch (error) {
  console.log(error);
}
