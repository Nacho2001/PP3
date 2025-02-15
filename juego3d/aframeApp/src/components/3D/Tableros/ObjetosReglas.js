// Datos de tableros a desplegar en escena
const tableros = [
    // Mini tablero
    {         
        altura: 0.7, 
        ancho: 1.7, 
        color:"#1a5276", 
        posicion: "-1.2 2.35 1.9", 
        rotacion: "0 180 0"
    },

    // Tablero de reglas
    {
        altura: 2.5, 
        ancho: 5.5, 
        color: "black", 
        posicion: "0 2.0 2.1", 
        rotacion: "0 180 0"
    }
];

// Datos de los textos de los tableros
const textos = [
    // Titulo
    {
        texto: "Reglas",
        posicion: "0 2.9 2",
        rotacion: "0 0 0",
        ancho: 6,
        alinacion: 'center',
        reverso: true
    },
    // Objetivo
    { 
        texto: "El juego consiste en reponder 10 preguntas en 1 minuto",
        posicion: "1.4 2.6 2",
        rotacion: "0 0 0",
        ancho: 2,
        alinacion: 'left',
        reverso: true
    },

    // Instrucciones
    {
        texto: `En el panel central aparecerá una pregunta y en los inferiores las posibles respuestas. 
            Pulsa uno de los paneles pequenios para seleccionar la respuesta`,
        posicion: "1.4 2.2 2",
        rotacion: "0 0 0",
        ancho: 2,
        alinacion: 'left',
        reverso: true
    },

    // Puntos
    {
        texto: `Con cada respuesta correcta se sumara un punto`,
        posicion: "1.4 1.8 2",
        rotacion: "0 0 0",
        ancho: 2,
        alinacion: 'left',
        reverso: true
    },

    // Respuesta
    {
        texto: `De acuedo a la respuesta el panel seleccionado cambiara de color y tendra un movimiento`,
        posicion: "1.4 1.4 2",
        rotacion: "0 0 0",
        ancho: 2,
        alinacion: 'left',
        reverso: true
    }
]

// Agrupacion de arrays para exportar
const ObjetosReglas = {
    tableros,
    textos
};

// Exportación
export default ObjetosReglas;