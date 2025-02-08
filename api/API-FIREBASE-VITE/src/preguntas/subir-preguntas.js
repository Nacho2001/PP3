import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import fs from "fs";

const firebaseConfig = {
    apiKey: "AIzaSyD50jzkm3BGT8x7wBzwlZEKXtMscrpwVxI",
    authDomain: "login-web-496ce.firebaseapp.com",
    projectId: "login-web-496ce",
    storageBucket: "login-web-496ce.appspot.com",
    messagingSenderId: "970874871748",
    appId: "1:970874871748:web:bd889346a0357fd625ce91",
    measurementId: "G-EJ3CKJRFTK"
    };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const preguntas = JSON.parse(fs.readFileSync("./preguntas.json"));

const subirPreguntas = async () => { 
    try {
        const preguntasData = preguntas.preguntas;

        for (const pregunta of preguntasData) {
            await addDoc(collection(db, "preguntas"), pregunta);
            console.log(`Pregunta subida: ${pregunta.pregunta}`)
    }
    } catch (error) {
        console.error("Error subiendo preguntas: ", error);
    }
}

subirPreguntas();