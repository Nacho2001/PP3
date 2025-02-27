import Tablero from "./Tableros/Tablero";
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
    const [respuestaCorrecta, setRespuestaCorrecta] = useState(null);
    const [verRespuesta, setVerRespuesta] = useState(false);

    useEffect(() => {
        const cargaPreguntas = async () => {
            switch (categoria) {
                case "its":
                    setTrivia(its);
                    break;
                case "salud_mental":
                    setTrivia(salud_mental);
                    break;
                case "anticonceptivos":
                    setTrivia(anticonceptivos);
                    break;
                case "bullying":
                    setTrivia(bullying);
                    break;
                default:
                    break;
            }
        }
        cargaPreguntas();

    },[categoria])

    useEffect(() => {
        if(trivia){
            setVerRespuesta(false);
            setRespuestaCorrecta(null);
            
            // Espera 5 segundos antes de revelar la respuesta correcta
            const cont1 = setTimeout(() => {
                setVerRespuesta(true);
                setRespuestaCorrecta(trivia.correcta)
            }, 5000);

            // Espera 3 segundos mostrando la respuesta correcta, antes de cambiar a la siguiente
            const cont2 = setTimeout(() => {
                // Completar siguiente pregunta
                siguientePregunta();
            }, 8000);

            return () => {
                clearTimeout(cont1);
                clearTimeout(cont2);
            }
        }
    }, [trivia])
    return(
        <>
            <TextPanel data={tablero}/>
            {/*   
                panelesRespuesta.map((panel, i) => (
                    <PanelRespuesta key={i} panelData={panel} />
                ))
            */}
        </>
    )
}
Juego.propTypes = {
    categoria: PropTypes.string.isRequired,
};

export default Juego;