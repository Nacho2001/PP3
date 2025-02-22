import 'aframe';
import PropTypes from 'prop-types';
import TextPanel from './TextPanel';


const PanelRespuesta = (props) => {
    const panelData = props.panelData;
    // Objeto con los datos del panel para pasar como props
    const panel = [
        // Datos del objeto panel
        { 
            posicion: panelData.posicion, 
            rotacion: panelData.rotacion, 
            color: "black", 
            altura: 0.45, 
            ancho: 1
        },
        // Datos del texto
        { 
            texto: panelData.texto, 
            posicion: panelData.posicion, 
            rotacion: panelData.rotacion, 
            ancho: 2, 
            alinacion: 'center' 
        }
    ];
    
    return (
        <>
            <TextPanel data={panel}/>
        </>
    )
}

// Define los tipos de las props enviadas
PanelRespuesta.propTypes = {
    panelData: PropTypes.shape({
        posicion: PropTypes.string.isRequired,
        rotacion: PropTypes.string.isRequired,
        texto: PropTypes.string.isRequired,
    }).isRequired,
};

export default PanelRespuesta;