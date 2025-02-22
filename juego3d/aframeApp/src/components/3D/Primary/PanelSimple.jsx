import { Entity } from "aframe-react"
import PropTypes from 'prop-types';

/** Crea un panel fino, de tamaño variable */
const PanelSimple = (props) => {
    const panelData = props.panelData;
    return (
        <Entity 
            // Se crea un objeto panel a partir de un box, con dimensiones específicas
            geometry={{ primitive: 'box', depth: 0.01, height: panelData.altura, width: panelData.ancho }}
            // Define color del panel
            material={{ color: panelData.color }}
            // Posición en escena
            position={ panelData.posicion }
            // Rotación del objeto
            rotation={ panelData.rotacion }
            // Eventos de interacción
            events={ panelData.events ? panelData.events : null }
        />
    )
}

// Declara los tipos de las props enviadas
PanelSimple.propTypes = {
    panelData: PropTypes.object.isRequired,
};

export default PanelSimple;