// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDocs, query, doc, updateDoc, deleteDoc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Configuracion  de Firebase

const firebaseConfig = {
  apiKey: "AIzaSyBwf1e-gtASgFRlDUk_ps33g0MfvtaTJgc",
  authDomain: "dbpracticas.firebaseapp.com",
  projectId: "dbpracticas",
  storageBucket: "dbpracticas.appspot.com",
  messagingSenderId: "850560808469",
  appId: "1:850560808469:web:84e003e93c0ea5c5d6001c",
  measurementId: "G-PTCG7282V2"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, collection, addDoc, getDocs, query, doc, updateDoc, deleteDoc, getDoc, auth };
