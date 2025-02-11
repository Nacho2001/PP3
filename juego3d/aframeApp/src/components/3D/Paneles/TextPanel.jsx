import 'aframe';
import PropTypes from 'prop-types';
import PanelSimple from '../Primary/PanelSimple';
import Text2D from '../Primary/Text2D';


const TextPanel = ({posicion, rotacion, texto }) => {
    // Objeto con los datos del panel para pasar como props
    const datosPanel = {"posicion": posicion, "rotacion": rotacion, color: "black", altura: 0.45, ancho: 1};

    return (
        <>
            <PanelSimple props={datosPanel} />
            {/*<Text2D props={[texto, posicion, rotacion, 2, 'center']} />*/}
            <Text2D texto={texto} posicion={posicion} rotacion={rotacion} ancho={2} alinacion={'center'} />
        </>
    )
}

// Define los tipos de las props enviadas
TextPanel.propTypes = {
    posicion: PropTypes.string.isRequired,
    rotacion: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
};

export default TextPanel;