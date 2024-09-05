import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, query, doc, updateDoc, deleteDoc, getDoc } from 'firebase/firestore';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD50jzkm3BGT8x7wBzwlZEKXtMscrpwVxI",
  authDomain: "login-web-496ce.firebaseapp.com",
  projectId: "login-web-496ce",
  storageBucket: "login-web-496ce.appspot.com",
  messagingSenderId: "970874871748",
  appId: "1:970874871748:web:bd889346a0357fd625ce91",
  measurementId: "G-EJ3CKJRFTK"
  };

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, query, doc, updateDoc, deleteDoc, getDoc };
