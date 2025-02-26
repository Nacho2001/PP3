import Tablero from "./Tableros/Tablero";
import PanelRespuesta from "./Paneles/PanelRespuesta";
import panelesJuego from './Paneles/panelesRespuesta.json';
import PropTypes from 'prop-types';
import salud_mental from '../preguntas/salud_mental.json';
import its from '../preguntas/ITS.json';
import bullying from '../preguntas/bullying.json';
import anticonceptivos from '../preguntas/anticonceptivos.json';
import { useState, useEffect } from "react";

const Juego = (props) => {
    const categoria = props.categoria;
    const [trivia, setTrivia] = useState([]);
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
        console.log(trivia)
    }, [categoria, trivia]);

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