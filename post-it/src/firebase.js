// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4iV8Dxx1jWAco1g5dQ4XTU3jRsSih-TU",
  authDomain: "post-it-75d12.firebaseapp.com",
  projectId: "post-it-75d12",
  storageBucket: "post-it-75d12.appspot.com",
  messagingSenderId: "817012585658",
  appId: "1:817012585658:web:fdea3f00cf076f7cfdbe83",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
