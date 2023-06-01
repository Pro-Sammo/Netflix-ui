import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnRCS4u4nsyC8-27YJIjXGnP_bHi6CIbw",
  authDomain: "react-netflix-clone-d430f.firebaseapp.com",
  projectId: "react-netflix-clone-d430f",
  storageBucket: "react-netflix-clone-d430f.appspot.com",
  messagingSenderId: "84378339692",
  appId: "1:84378339692:web:e2e175bb97927ca28d8b49",
  measurementId: "G-1WXMXR4RMB"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)