// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-1c355.firebaseapp.com",
  projectId: "mern-blog-1c355",
  storageBucket: "mern-blog-1c355.appspot.com",
  messagingSenderId: "953735127493",
  appId: "1:953735127493:web:3cb21900bd731024a36bac"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
