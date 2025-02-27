import PanelRespuesta from "./Paneles/PanelRespuesta";
import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import tablero from './Paneles/tablero.json';
import panelesRespuesta from './Paneles/panelesRespuesta.json';
import its from '../preguntas/ITS.json'
import salud_mental from '../preguntas/salud_mental.json'
import anticonceptivos from '../preguntas/anticonceptivos.json';
import bullying from '../preguntas/bullying.json'
import TextPanel from "./Paneles/TextPanel";

const Juego = (props) => {
    const categoria = props.categoria;
    const [indice, setIndice] = useState(0);
    const [trivia, setTrivia] = useState([]);
    const [pregunta, setPregunta] = useState([])
    const [respuestaCorrecta, setRespuestaCorrecta] = useState(null);
    const [verRespuesta, setVerRespuesta] = useState(false);
    const [question, setQuestion] = useState("");
    const [opciones, setOpciones] = useState(["","",""]);
    tablero[1].pregunta = question;
    panelesRespuesta.map((panel, i) => {

    })


    useEffect(() => {
        const cargaPreguntas = async () => {
            // Toma un archivo json determinado, segun la categoria seleccionada
            switch (categoria) {
                case "its":
                    try {
                        await setTrivia(its);
                    } catch (error) {
                        console.error(error);
                    }
                    break;
                case "salud_mental":
                    await setTrivia(salud_mental);
                    break;
                case "anticonceptivos":
                    await setTrivia(anticonceptivos);
                    break;
                case "bullying":
                    await setTrivia(bullying);
                    break;
                default:
                    break;
            }
            if(trivia[1]){
                // Reinicia el indice en caso de seleccionar otra categoria
                setIndice(0);
                // Toma la primera pregunta
                setPregunta(trivia[0])
                // Actualiza estado para no mostrar respuesta correcta al iniciar
                setVerRespuesta(false);
                // Setea la pregunta en el texto del tablero
                tablero[1].pregunta = trivia[0].pregunta
                // Guarda las posibles respuestas en los paneles pequeños
                trivia[0].opciones.map((opcion, index) => {
                    panelesRespuesta[index].texto = opcion[index];
                })
            } else {
                // Setea texto cuando aún no se cargó ninguna pregunta
                tablero[1].pregunta = "Cargando..."
            }
        }
        // Ejecuta la funcion en cuanto se renderiza el componente
        cargaPreguntas();

    },[categoria, trivia])

    
    useEffect(() => {
        //
        const siguientePregunta = () => {
            if(trivia.lenght > 0) {
                // Incrementa el indice para continuar con las siguientes preguntas
                const nuevoIndice = (indice + 1) % pregunta.lenght;
                // Actualiza el indice;
                setIndice(nuevoIndice);
                // Guarda la nueva pregunta, actualizando el estado
                setPregunta(trivia[nuevoIndice]);
                // De las siguientes preguntas, repite el proceso de actualiza el texto del panel
                tablero[1].pregunta = trivia[indice].pregunta

                // Lo mismo ocurre aquí, actualiza las respuestas de los paneles pequeños
                trivia[indice].opciones.map((opcion, index) => {
                    panelesRespuesta[index].texto = opcion[index];
                })
                // Restablece los estados para ocultar la respuesta correcta
                setVerRespuesta(false);
                setRespuestaCorrecta(null);
            }
        }
        // Acciones al aparecer una pregunta
        if(pregunta){
            /**
             * Setea que la respuesta no aparezca cuando aparezca la pregunta
             */
            // Actualiza estados para evitar revelacion de rta.
            setVerRespuesta(false);
            setRespuestaCorrecta(null);
            
            // Espera 5 segundos antes de revelar la respuesta correcta
            const cont1 = setTimeout(() => {
                setVerRespuesta(true);
                setRespuestaCorrecta(pregunta.correcta)
            }, 5000);

            // Espera 3 segundos mostrando la respuesta correcta, antes de cambiar a la siguiente
            const cont2 = setTimeout(() => {
                // Completar siguiente pregunta
                siguientePregunta();
            }, 8000);

            return () => {
                // Limpieza de temporizadores antes de cambiar de pregunta
                clearTimeout(cont1);
                clearTimeout(cont2);
            }
        }
    }, [pregunta, indice, trivia])

    
    if(trivia[1]){
        return(
            <>
                <TextPanel data={tablero}/>
                {
                    panelesRespuesta.map((panel, i) => (
                        <PanelRespuesta key={i} panelData={panel} />
                    ))
                }
            </>
        )
    } else {
        console.log(tablero)
        return (
            <TextPanel data={tablero}/>
        )
    }
}
Juego.propTypes = {
    categoria: PropTypes.string.isRequired,
};

export default Juego;