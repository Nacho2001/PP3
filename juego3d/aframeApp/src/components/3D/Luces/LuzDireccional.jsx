import { Entity } from "aframe-react"
import PropTypes from 'prop-types';

/** Crea una luz direccional,  
 * ilumina todos los objetos de la escena desde una dirección específica.
 */
const LuzDireccional = (props) => {
    // Obtiene la dirección de la luz mediante props
    const posicion = props.posicion;
    return <Entity primitive="a-light" type="directional" position={posicion} />
}

// Declara el tipo de la prop recibida
LuzDireccional.propTypes = {
    posicion: PropTypes.string.isRequired,
};

export default LuzDireccional;