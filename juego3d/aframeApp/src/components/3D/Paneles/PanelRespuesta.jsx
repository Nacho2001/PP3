import 'aframe';
import PropTypes from 'prop-types';
import PanelSimple from '../Primary/PanelSimple';
import Texto2D from '../Primary/Texto2D';


const PanelRespuesta = ({posicion, rotacion, texto }) => {
    // Objeto con los datos del panel para pasar como props
    const datosPanel = {"posicion": posicion, "rotacion": rotacion, color: "black", altura: 0.45, ancho: 1};

    return (
        <>
            <PanelSimple props={datosPanel} />
            <Texto2D texto={texto} posicion={posicion} rotacion={rotacion} ancho={2} alinacion={'center'} />
        </>
    )
}

// Define los tipos de las props enviadas
PanelRespuesta.propTypes = {
    posicion: PropTypes.string.isRequired,
    rotacion: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
};

export default PanelRespuesta;