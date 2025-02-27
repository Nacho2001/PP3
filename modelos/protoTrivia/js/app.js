import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyB8fFVxN6gDl-mVglnPhPB6dvEWtnGlcZQ",
    authDomain: "api-firebase-6f6f4.firebaseapp.com",
    projectId: "api-firebase-6f6f4",
    storageBucket: "api-firebase-6f6f4.firebasestorage.app",
    messagingSenderId: "541175257894",
    appId: "1:541175257894:web:af9128e16d2ff64b98ffe7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
if (db) console.log('Database connected!');

let loader = document.getElementById("loader");
let preguntaContainer = document.getElementById("preguntaContainer");
let preguntas = [];

let currentQuestion = document.getElementById("currentQuestion");
let totalQuestions = document.getElementById("totalQuestions");
let question = document.getElementById("question");
let explanation = document.getElementById("explanation");
let answerParent = document.getElementById("answerParent");
let points = document.getElementById("points");

let indexN = 0;
let score = 0;

async function getDataFromDatabase() {
    loader.style.display = 'block';
    preguntaContainer.style.display = 'none';

    try {
        const querySnapshot = await getDocs(collection(db, 'preguntas'));
        querySnapshot.forEach((doc) => {
            preguntas.push(doc.data());
        });

        if (preguntas.length >= 1) {
            loader.style.display = 'none';
            preguntaContainer.style.display = 'block';
            renderQuestion();
        }
    } catch (error) {
        console.error("Error fetching data: ", error);
        loader.style.display = 'none';
        preguntaContainer.style.display = 'none';
        alert("Failed to fetch data from database");
    }
}
getDataFromDatabase();

window.checkQuestion = function(a, b) {
    let obj = preguntas[indexN];
    if (a == b) {
        score++;
        nextQuestion();
    } else {
        explanation.innerHTML = `
            <div class="p-1">
                <h4 class="text-center fw-semibold lh-sm">${obj.explicacion}</h4>
            </div>
        `;
        explanation.classList.remove('d-none');

        setTimeout(() => {
            explanation.classList.add('d-none');
            nextQuestion();
        }, 10000);
    }

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
    points.innerHTML = score;

    let obj = preguntas[indexN];
    question.innerHTML = obj.pregunta;
    console.log(obj.explicacion);

    answerParent.innerHTML = ''
    for (let i = 0; i < obj.opciones.length; i++) {
        answerParent.innerHTML += `
        <div class="col-md-4">
            <div class="py-2">
                <button onclick="checkQuestion('${obj.opciones[i]}', '${obj.respuesta_correcta}')" class="btn btn-dark fs-4 rounded-pill w-100">
                    ${obj.opciones[i]}
                </button>
            </div>
        </div>
        `
    }
}