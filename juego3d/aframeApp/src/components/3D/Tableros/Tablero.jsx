import 'aframe';
import PanelSimple from '../Primary/PanelSimple';

const Tablero = () => {
    const datosTablero = {
        altura: 1.5, 
        ancho: 3.5, 
        color: "#1a5276", 
        posicion: "0 2 -2", 
        rotacion: "0 0 0"
    };
    return (
        <>
            <PanelSimple panelData={datosTablero}/>
        </>
    )
}

export default Tablero;