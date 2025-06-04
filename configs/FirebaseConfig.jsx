// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-shorts-auth.firebaseapp.com",
  projectId: "ai-shorts-auth", 
  storageBucket: "ai-shorts-auth.firebasestorage.app",
  messagingSenderId: "574742282139",
  appId: "1:574742282139:web:700144a86df74982312b3e",
  measurementId: "G-BYBNX1B85E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);