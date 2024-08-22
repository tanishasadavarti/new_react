// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRlsKR6gqPWMG9TMkRGYKkCbpHX3ZqFoE",
  authDomain: "fir-auth-d2447.firebaseapp.com",
  projectId: "fir-auth-d2447",
  storageBucket: "fir-auth-d2447.appspot.com",
  messagingSenderId: "845745784598",
  appId: "1:845745784598:web:f6fe1a972c2fad81d8f237",
  measurementId: "G-TXZSXXL0MH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

