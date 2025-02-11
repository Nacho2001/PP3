import { Entity } from "aframe-react"
import PropTypes from 'prop-types';

/** Crea un panel fino, de tamaño variable */
const PanelSimple = (props) => {
    const datosPanel = props.props;
    return (
        <Entity 
            // Se crea un objeto panel a partir de un box, con dimensiones específicas
            geometry={{ primitive: 'box', depth: 0.01, height: datosPanel.altura, width: datosPanel.ancho }}
            // Define color del panel
            material={{ color: datosPanel.color }}
            // Posición en escena
            position={ datosPanel.posicion }
            // Rotación del objeto
            rotation={ datosPanel.rotacion }
        />
    )
}

// Declara los tipos de las props enviadas
PanelSimple.propTypes = {
    props: PropTypes.shape({
        altura: PropTypes.number.isRequired,
        ancho: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired,
        posicion: PropTypes.string.isRequired,
        rotacion: PropTypes.string.isRequired,
    }).isRequired,
};

export default PanelSimple;