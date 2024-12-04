// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKUAbNWyrTRLGJjwPBLfKU9plJDfaUsRo",
  authDomain: "login-faa64.firebaseapp.com",
  projectId: "login-faa64",
  storageBucket: "login-faa64.firebasestorage.app",
  messagingSenderId: "390603204598",
  appId: "1:390603204598:web:ef594f58e11617528649d7",
  measurementId: "G-1MHMQ8KC51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider, signInWithPopup, signOut };