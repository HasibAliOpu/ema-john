// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfHKjvET6ZX4JYOp4qiGDprcm9fo5P4WM",
  authDomain: "ema-john-simple-cbce5.firebaseapp.com",
  projectId: "ema-john-simple-cbce5",
  storageBucket: "ema-john-simple-cbce5.appspot.com",
  messagingSenderId: "376261565674",
  appId: "1:376261565674:web:6e86c2427bd1c4a9a44b93",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
