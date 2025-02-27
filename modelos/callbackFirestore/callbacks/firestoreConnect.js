import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBZJCjWcazwNOoSVJr70Gp2idNg-M3rA6U",
    authDomain: "simplecolor-test.firebaseapp.com",
    projectId: "simplecolor-test",
    storageBucket: "simplecolor-test.appspot.com",
    messagingSenderId: "267085746058",
    appId: "1:267085746058:web:04b03a7096fffa87bf0273",
    measurementId: "G-3MB09M3QDL"
};
  
  

const firebaseConnect = initializeApp(firebaseConfig);
const db = getFirestore(firebaseConnect);
export default db;