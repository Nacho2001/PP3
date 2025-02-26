import Tablero from "./Tableros/Tablero";
import PanelRespuesta from "./Paneles/PanelRespuesta";
import PropTypes from 'prop-types';
import salud_mental from '../preguntas/salud_mental.json';
import its from '../preguntas/ITS.json';
import bullying from '../preguntas/bullying.json';
import anticonceptivos from '../preguntas/anticonceptivos.json';
import { useState, useEffect } from "react";
import tablero from './Paneles/tablero.json';
import panelesRespuesta from './Paneles/panelesRespuesta.json';

const Juego = (props) => {
    const categoria = props.categoria;
    const [trivia, setTrivia] = useState([]);
    const [index, setIndex] = useState(0);
    const [pregunta, setPregunta] = useState("");
    tablero[1].texto = pregunta;
    panelesRespuesta.map((panel, i) => {
        panel[i].texto = trivia[index].opciones[i]
    })

    useEffect(() => {
        switch (categoria) {
            case 'its':
                setTrivia(its);
                break
            case 'anticonceptivos':
                setTrivia(anticonceptivos);
                break
            case 'salud_mental':
                setTrivia(salud_mental);
                break
            case 'bullying':
                setTrivia(bullying)
                break;
            default:
                break;
        }
        setPregunta(trivia[index].pregunta);

    }, [categoria, trivia,index]);

    return(
        <>
        <Tablero />
        {   
            panelesJuego.map((panel, i) => (
                <PanelRespuesta key={i} panelData={panel} />
            ))
        }
    </>
    )
}
Juego.propTypes = {
    categoria: PropTypes.string.isRequired,
};

export default Juego;