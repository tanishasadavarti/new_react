// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkVtCLskTrzkLrmM_hbbNE3SMgI6YDhVc",
  authDomain: "fir-database-117d6.firebaseapp.com",
  projectId: "fir-database-117d6",
  storageBucket: "fir-database-117d6.appspot.com",
  messagingSenderId: "47120269715",
  appId: "1:47120269715:web:ad9edb59ba798ef1972866",
  measurementId: "G-P0PW8ZSMVR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

