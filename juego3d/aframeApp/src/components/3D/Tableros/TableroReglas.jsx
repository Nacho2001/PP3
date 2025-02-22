import 'aframe';
import ObjetosReglas from './ObjetosReglas';
import PanelSimple from '../Primary/PanelSimple';
import Texto2D from '../Primary/Texto2D';
import Circulo from '../Primary/Circulo';

const TableroReglas = () => {
    return (
        <>
            {
                // Mapeo de tableros a desplegar
                ObjetosReglas.tableros.map((tablero, i) => (
                    <PanelSimple key={i} panelData={tablero}/>          
                ))
            }
            {
                // Mapeo de textos a mostrar
                ObjetosReglas.textos.map((texto, i) => (
                    <Texto2D key={i} textData={texto} />
                ))
            }
            <Circulo progreso={360} posicion="-2.32 2.55 2.09" radio={0.1} color="blue"/>
        </>
    )
}

export default TableroReglas;