import { useState, useEffect } from "react";
import Texto2D from "./Primary/Texto2D";
import Circulo from "./Primary/Circulo";
import propTypes from 'prop-types';

const Temp = (props) => {
    // Contador de segundos (tiempo total)
    const [restante, setRestante] = useState(60);
    // Progreso en circulo (comienza completo en 360°)
    const [progreso, setProgreso] = useState(360);
    // Tiempo transcurrido
    const [transcurrido, setTranscurrido] = useState(0);
    // Interruptor de juego

    useEffect(() => {
        // Interrumpe la ejecución si el tiempo llega a 0 o el juego está inactivo
        if(!props.activo || restante <= 0) return;

        const intervalo = setInterval(() => {
            setRestante((prev) => prev - 1);
            setProgreso((prev) => prev - 6);
            setTranscurrido((prev) => prev + 6);

            if (restante <= 1){
                clearInterval(intervalo);
                setTimeout(() => props.setActivo(false), 1000);
            }
        }, 1000);
    }, [props, props.activo, restante]);

    // Iniciar temproizador
    if(!props.activo){
        setRestante(60);
        setProgreso(360);
        setTranscurrido(0);
        props.setActivo(true);
    }

    return (
        <>
            {/** Texto con tiempo restante */}
            <Texto2D 
                texto={props.activo ? restante.toString() : "--"}
                posicion={"0 1.6 2"}
                rotacion={"0 0 0"}
                ancho={2}
                alinacion={"center"}
                reverso={false}
            />

            {/** Círculo rojo, representa el tiempo restante */}
            <Circulo
                progreso={progreso}
                posicion={"0 1.6 0"}
                radio={0.3}
                color={"#ff0000"}
            />

            {/** Círculo verde, representa el tiempo transcurrido */}
            <Circulo
                progreso={transcurrido}
                posicion={"0 1.6 0"}
                radio={0.3}
                color={"#00ff00"}
                inicio={360 - transcurrido}
            />
        </>
    );
}

Temp.propTypes = {
    activo: propTypes.bool.isRequired,
    setActivo: propTypes.func.isRequired,
};
export default Temp;