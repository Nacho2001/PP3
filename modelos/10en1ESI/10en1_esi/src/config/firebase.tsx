// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Credenciales de firebase
const firebaseConfig = {
  apiKey: "AIzaSyD4CrCUeTU9OISc8kMX2wHXD1CaW0qyIBI",
  authDomain: "proyecto-reactvite-login.firebaseapp.com",
  projectId: "proyecto-reactvite-login",
  storageBucket: "proyecto-reactvite-login.appspot.com",
  messagingSenderId: "1052469261794",
  appId: "1:1052469261794:web:8c1a738bf472e6a54835bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);