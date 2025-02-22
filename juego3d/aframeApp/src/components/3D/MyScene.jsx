import 'aframe';
import PanelRespuesta from './Paneles/PanelRespuesta';
import { Scene, Entity } from 'aframe-react';
import Tablero from './Tableros/Tablero';
import TableroReglas from './Tableros/TableroReglas';
import Iluminacion from './Luces/Iluminacion';
import paneles from './Paneles/Paneles_respuesta/paneles_respuesta';
import './Styles.css';
import Circulo from './Primary/Circulo';
import { useState, useEffect } from 'react';

const MyScene = () => {
    // Contador de segundos (tiempo total)
    const [restante, setRestante] = useState(60);
    // Progreso en circulo (comienza completo en 360°)
    const [progreso, setProgreso] = useState(360);
    // Tiempo transcurrido
    const [transcurrido, setTranscurrido] = useState(0);
    // Interruptor de juego
    const [activo, setActivo] = useState(false);

    useEffect(() => {
        // Interrumpe la ejecución si el tiempo llega a 0 o el juego está inactivo
        if(!activo || restante <= 0) return;

        const intervalo = setInterval(() => {
            setRestante((prev) => prev - 1);
            setProgreso((prev) => prev - 6);
            setTranscurrido((prev) => prev + 6);

            if (restante <= 1){
                clearInterval(intervalo);
                setTimeout(() => setActivo(false), 1000);
            }
        }, 1000);
    }, [ activo, restante ]);

    // Iniciar temproizador
    const temp = () => {
        if(!activo){
            setRestante(60);
            setProgreso(360);
            setTranscurrido(0);
            setActivo(true);
        }
    };
    return (
        <>
            <Scene device-orientation-permission-ui>
                <Entity primitive="a-camera" look-controls position="0 1.6 0">
                    <Entity primitive="a-cursor" color="white" />
                </Entity>
                <Iluminacion />
                <Tablero />
                {paneles.map((panel, i) => (
                    <PanelRespuesta key={i} posicion={panel.posicion} rotacion={panel.rotacion} texto={panel.texto} />
                ))}
                <TableroReglas />
                <Circulo posicion={"0 1.6 0"} radio={"0.3"} progreso={progreso} />
            </Scene>
        </>
    );
}

export default MyScene;