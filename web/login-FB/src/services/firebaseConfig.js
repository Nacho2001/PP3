

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDocs, query, doc, updateDoc, deleteDoc, getDoc } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAglaU_qJHj05f6SfpEyzJ948skOJz9KGA",
  authDomain: "practicasprof3-21.firebaseapp.com",
  projectId: "practicasprof3-21",
  storageBucket: "practicasprof3-21.firebasestorage.app",
  messagingSenderId: "989160085316",
  appId: "1:989160085316:web:1ca233805b2b9271362911",
  measurementId: "G-J5S65EYW90"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { db, collection, addDoc, getDocs, query, doc, updateDoc, deleteDoc, getDoc, auth };
