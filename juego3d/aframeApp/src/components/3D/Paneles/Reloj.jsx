import {useState, useEffect} from 'react';
import PanelSimple from '../Primary/PanelSimple';
import Texto2D from '../Primary/Texto2D';

const Reloj = (activo, setActivo) => {
    // Segundos del temporizador
    const [tRestante, setTRestante] = useState(60);

    // Inicia el temporizador
    useEffect(() => {
        
        const intervalo = setInterval(() => {
            // Disminuye 1 el tiempo restante, en cuenta regresiva
            setTRestante((prev) => prev - 1);
            // Cuando llega a 1, luego se detiene el temporizador
            if (tRestante <= 1){
                // Limpia el intervalo
                clearInterval(intervalo);
                // Luego, lo desactiva
                setTimeout(() => setActivo(false), 1000);
            }
        }, 1000);
    }, [activo, tRestante]);

    if(!activo){
        setTRestante(60);
        setActivo(true);
    };

    const formatearTiempo = (segundos) => {
        const minutos = Math.floor(segundos / 60);
        const segundosRestantes = segundos % 60;
        return `${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
    }

    const reloj = {posicion: "0 1.6 0", rotacion: "0 0 0", color:"black", altura: 0.35, ancho: 1 }

    return (
        <>
            <PanelSimple panelData={reloj}/>
            <Texto2D 
                texto={activo ? formatearTiempo(tRestante) : "00:00"}
                posicion="0 1.6 1"
                rotacion="0 0 0"
                ancho={2}
                alinacion="center"
            />
        </>
    )
}

export default Reloj;