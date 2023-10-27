// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8u-3pkFer4izXh97aJo1iSxE12fzwHL4",
  authDomain: "video-streaming-844f2.firebaseapp.com",
  projectId: "video-streaming-844f2",
  storageBucket: "video-streaming-844f2.appspot.com",
  messagingSenderId: "316561741492",
  appId: "1:316561741492:web:a3bd35143a6a7158bd69e1",
  measurementId: "G-NBL6V121G9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth();


export {auth, app};
