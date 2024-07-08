// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLq1cS2DxuuALnJp3iwy-_Srmbm0TdCgc",
  authDomain: "journal-app-19ff8.firebaseapp.com",
  projectId: "journal-app-19ff8",
  storageBucket: "journal-app-19ff8.appspot.com",
  messagingSenderId: "694844843658",
  appId: "1:694844843658:web:41b14d5760ccff2e95af73"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);