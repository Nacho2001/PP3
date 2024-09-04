// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import { getDatabase, ref, onChildAdded } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-LzRbvila_Vj3-nb7DwIcgqh4rVsbhgk",
  authDomain: "triviaprototype-dcf90.firebaseapp.com",
  databaseURL: "https://triviaprototype-dcf90-default-rtdb.firebaseio.com",
  projectId: "triviaprototype-dcf90",
  storageBucket: "triviaprototype-dcf90.appspot.com",
  messagingSenderId: "618954515198",
  appId: "1:618954515198:web:14c1b9dcffdc14e6397baf",
  measurementId: "G-FL4PENWMZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getDatabase();

let loader = document.getElementById("loader");
let preguntaContainer = document.getElementById("preguntaContainer");
let preguntas = [];

let currentQuestion = document.getElementById("currentQuestion");
let totalQuestions = document.getElementById("totalQuestions");
let question = document.getElementById("question");
let answerParent = document.getElementById("answerParent");

let indexN = 0;
let score = 0;

function getDataFromDatabase() {
    loader.style.display = 'block';
    preguntaContainer.style.display = 'none';

    const reference = ref(db, 'preguntas/');

    onChildAdded(reference, function(data) {
        console.log(data.val());
        preguntas.push(data.val());

        if (preguntas.length >= 1) {
            loader.style.display = 'none';
            preguntaContainer.style.display = 'block';
            renderQuestion();
        }
    })
}
getDataFromDatabase();

window.checkQuestion = function(a, b) {
    if (a == b) {
        score++;
        console.log(score);
    }
    nextQuestion();
}

window.nextQuestion = function() {
    if (indexN + 1 == preguntas.length) {
        alert("tu puntuación es " + score);
    } else {
        indexN++;
        renderQuestion();
    }
}

function renderQuestion() {
    currentQuestion.innerHTML = indexN + 1;
    totalQuestions.innerHTML = preguntas.length;

    let obj = preguntas[indexN];
    question.innerHTML = obj.pregunta;

    answerParent.innerHTML = ''
    for (let i = 0; i < obj.opciones.length; i++) {
        answerParent.innerHTML += `
        <div class="col-md-4">
            <div class="py-2">
                <button onclick="checkQuestion('${obj.opciones[i]}', '${obj.respuestaCorrecta}')" class="btn btn-dark fs-4 rounded-pill w-100">
                    ${obj.opciones[i]}
                </button>
            </div>
        </div>
        `
    }
}