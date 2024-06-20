// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBxJbSeOytKRdFo9jLJj990NSvX29gR854",
  authDomain: "movie-1fbc7.firebaseapp.com",
  projectId: "movie-1fbc7",
  storageBucket: "movie-1fbc7.appspot.com",
  messagingSenderId: "395387039783",
  appId: "1:395387039783:web:c5f0c73d8db5f37fb99e02",
  measurementId: "G-SWJRT443W5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provide = new GoogleAuthProvider()
export{auth, provide}