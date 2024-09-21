// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiOG8l-HQAghbds1gaK6MSjkbMhBkNpH0",
  authDomain: "fir-storage-c459d.firebaseapp.com",
  projectId: "fir-storage-c459d",
  storageBucket: "fir-storage-c459d.appspot.com",
  messagingSenderId: "786426286085",
  appId: "1:786426286085:web:63dff712046ca1bb708c6c",
  measurementId: "G-PC8JY7M3SX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const provider = new GoogleAuthProvider();
 export const auth = getAuth(app);
 export const db = getFirestore(app);


