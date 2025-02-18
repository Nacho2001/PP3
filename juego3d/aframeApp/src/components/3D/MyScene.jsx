import 'aframe';
import PanelRespuesta from './Paneles/PanelRespuesta';
import { Scene, Entity } from 'aframe-react';
import Tablero from './Tableros/Tablero';
import TableroReglas from './Tableros/TableroReglas';
import Iluminacion from './Luces/Iluminacion';
import paneles from './Paneles/Paneles_respuesta/paneles_respuesta';
import './Styles.css';
import Circulo from './Primary/Circulo';
import { useState } from 'react';

const MyScene = () => {
    // Contador de segundos (tiempo total)
    const [restante, setRestante] = useState(60);
    // Progreso en circulo (comienza completo en 360°)
    const [progreso, setProgreso] = useState(360);
    // Tiempo transcurrido
    const [transcurrido, setTranscurrido] = useState(0);

    // Activa la cuenta regresiva con temporizador
    function cuentaRegresiva(){
        // Si el contador llegó a 0, se detiene
        if (restante <= 0) return;

        const intervalo = setInterval(() => {
            // Disminuye 1 segundo el tiempo
            setRestante((prev) => prev - 1);

            // Reduce 6 grados por segundo
            setProgreso((prev) => prev -1);
        })

        return () => clearInterval(intervalo);
    }
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