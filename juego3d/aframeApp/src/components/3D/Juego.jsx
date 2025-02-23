import Tablero from "./Tableros/Tablero";
import PanelRespuesta from "./Paneles/PanelRespuesta";
import panelesJuego from './Paneles/panelesRespuesta.json';
import BotonInicio from "./BotonInicio";
import TableroReglas from "./Tableros/TableroReglas";
import { useState } from "react";

const Juego = () => {
    const [activo, setActivo] = useState(false);
    if(activo){
        return (
            <>
                <Tablero />
                {
                    panelesJuego.map((panel, i) => (
                        <PanelRespuesta key={i} panelData={panel} />
                    ))
                }
            </>
        )
    } else {
        return (
            <>
                <TableroReglas />
                <BotonInicio activo={activo} setActivo={setActivo}/>
            </>
        )
    }
}

export default Juego;