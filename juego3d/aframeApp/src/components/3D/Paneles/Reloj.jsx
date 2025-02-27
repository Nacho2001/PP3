import {useState, useEffect} from 'react';
import PanelSimple from '../Primary/PanelSimple';
import Texto2D from '../Primary/Texto2D';
import TextPanel from './TextPanel';

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

    // Si el temporizador no esta activo, lo inicia
    if(!activo){
        setTRestante(60);
        setActivo(true);
    };

    // Formatea los segundos en formato digital 00:00
    const formatearTiempo = (segundos) => {
        const minutos = Math.floor(segundos / 60);
        const segundosRestantes = segundos % 60;
        return `${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
    }

    // Datos de panel de reloj para crear el componente
    const reloj = [
        { 
            posicion: "0 1.6 0", 
            rotacion: "0 0 0", 
            color:"black", 
            altura: 0.35, 
            ancho: 1 
        },
        { 
            texto: activo ? formatearTiempo(tRestante) : "00:00", 
            posicion: "0 1.6 1", 
            rotacion: "0 0 0", 
            ancho: 2, 
            alinacion: "center"
        }
    ]

    // Devuelve un componente compuesto del panel y el text
    return (
        <>{/*
            <PanelSimple panelData={relojPanel}/>
            <Texto2D 
                textData={textoReloj}
            />
        */}
        <TextPanel data={reloj}/>
        </>
    )
}

export default Reloj;