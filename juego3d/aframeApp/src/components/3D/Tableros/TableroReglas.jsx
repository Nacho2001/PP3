import 'aframe';
import PanelSimple from '../Primary/PanelSimple';
import Text2D from '../Primary/Text2D';

const TableroReglas = () => {
    const datosTablero = {altura: 2.5, ancho: 5.5, color: "black", posicion: "0 2.0 2.1", rotacion: "0 180 0"};
    //const miniPanel = {altura: 0.5, ancho: 3.5, color: "black", posicion: "0 2.9 2", rotacion: "}
    return (
        <>
            <PanelSimple props={datosTablero}/>
            <Text2D texto={"Reglas"} posicion={"0 2.9 2"} rotacion={"0 0 0"} ancho={6} alinacion={'center'} reverso />
            <Text2D texto={"El juego consiste en reponder 10 preguntas en 1 minuto"} posicion={"1.4 2.6 2"} rotacion={"0 0 0"} ancho={2} alinacion={'left'} reverso />
            <Text2D texto={`En el panel central aparecerá una pregunta y en los inferiores las posibles respuestas. 
            Pulsa uno de los paneles pequenios para seleccionar la respuesta`} posicion={"1.4 2.2 2"} rotacion={"0 0 0 "} ancho={2} alinacion={'left'} reverso/>
            <Text2D texto={"Con cada respuesta correcta se sumara un punto"} posicion={"1.4 1.8 2"} rotacion={"0 0 0"} ancho={2} alinacion={'left'} reverso />
            <Text2D texto={"De acuedo a la respuesta el panel seleccionado cambiara de color y tendra un movimiento"} posicion={"1.4 1.4 2"} rotacion={"0 0 0"} ancho={2} alinacion={'left'} reverso />
        </>
    )
}

export default TableroReglas;