// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-aab8b.firebaseapp.com",
  projectId: "mern-blog-aab8b",
  storageBucket: "mern-blog-aab8b.appspot.com",
  messagingSenderId: "321938411258",
  appId: "1:321938411258:web:4ac9c00084c588b3aac343"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
