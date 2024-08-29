// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
import { getDatabase, set, ref, push } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";

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
const analytics = getAnalytics(app);
const db = getDatabase();

let question = document.getElementById("question");
let option = document.getElementById("option");
let optionsParent = document.getElementById("optionsParent");
let respuestaCorrectaElem = document.getElementById("respuestaCorrecta");

let options = [];
let respuestaCorrecta

function renderOptions() {
    optionsParent.innerHTML = '';
    for (let i = 0; i < options.length; i++) {
        optionsParent.innerHTML += `<li onclick="setRespuestaCorrecta('${options[i]}')" class="p-2 bg-light fs-5 rounded shadow my-2">${options[i]}</li>`
    }
}

window.agregarOpcion = function() {
	options.push(option.value);
	console.log(options);
    renderOptions();
}

window.setRespuestaCorrecta = function(a) {
    respuestaCorrecta = a;
    respuestaCorrectaElem.innerHTML = respuestaCorrecta;
}

window.subirPregunta = function() {
    let obj = {
        pregunta: question.value,
        opciones: options,
        respuestaCorrecta: respuestaCorrecta
    }

    obj.id = push(ref(db, 'preguntas/')).key;

    const reference = ref(db, `preguntas/${obj.id}`);
    set(reference, obj)

    console.log(obj);
}