import { useState } from "react";
import TextPanel from "./TextPanel";

const PanelInicio = () => {
    console.log("PanelInicio");
    const [count, setCount] = useState(0);
    const mensajes = ["En sus marcas...", "Listos...", "¡Ya!"];
    const panelData = { 
        posicion: '0 0.9 -2', 
        rotacion: '0 0 0', 
        color: 'black', 
        altura: 1, 
        ancho: 2 
      };
    const textData = { 
        texto: count, 
        posicion: '0 0 0.05', 
        rotacion: '0 0 0', 
        ancho: 3, 
        alinacion: 'center' 
    };
    const data = [panelData, textData];
    return (
    <>
        <TextPanel data={data}/>
    </>
    )
}

export default PanelInicio;