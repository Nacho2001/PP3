import 'aframe';
import ObjetosReglas from './ObjetosReglas';
import PanelSimple from '../Primary/PanelSimple';
import Texto2D from '../Primary/Texto2D';

const TableroReglas = () => {
    return (
        <>
            {
                // Mapeo de tableros a desplegar
                ObjetosReglas.tableros.map((tablero, i) => (
                    <PanelSimple key={i} props={tablero}/>          
                ))
            }
            {
                // Mapeo de textos a mostrar
                ObjetosReglas.textos.map((texto, i) => (
                    <Texto2D key={i} texto={texto.texto} posicion={texto.posicion} rotacion={texto.rotacion} ancho={texto.ancho} alinacion={texto.alinacion} reverso />
                ))
            }
        </>
    )
}

export default TableroReglas;