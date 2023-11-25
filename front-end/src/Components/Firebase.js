// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5PmEeQSO_n9gjHAj1Yycy8DyIr1xJMvs",
  authDomain: "ahead-store-57a14.firebaseapp.com",
  projectId: "ahead-store-57a14",
  storageBucket: "ahead-store-57a14.appspot.com",
  messagingSenderId: "614799111098",
  appId: "1:614799111098:web:4a5af2208d40e725ce6383",
  measurementId: "G-3T75QPSD6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);