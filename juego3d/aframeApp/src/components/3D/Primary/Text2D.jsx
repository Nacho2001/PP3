import 'aframe';
import { Entity } from 'aframe-react';
import PropTypes from 'prop-types';

const Text2D = (props) => {
    const { texto, posicion, rotacion, ancho, alinacion, reverso = false } = props;
    // Separar los valores de la posicion en tres variables: x, y, z y las convierte en valores numericos 
    const [x, y, z] = posicion.split(' ').map(Number);
    return (
        <>
            <Entity
                // Valor del texo, alinacion en panel y tamaño de fuente
                text={{ value: texto, align: alinacion, width: ancho }}
                // Establece posicion del texto, queda ligeramente más adelante para evitar que se el panel lo tape
                position={`${x} ${y} ${z + (reverso ? -0.11 : 0.11 )}`}
                // Rotacion del texto
                rotation={rotacion}
                // La escala indica si el texto se muestra al reves, dependiendo la posicion del panel
                scale={ reverso ? '-1 1 -1' : '1 1 1' }
            />
        </>
    )
}

// Declara tipos de las props
Text2D.propTypes = {
    texto: PropTypes.string.isRequired,
    posicion: PropTypes.string.isRequired,
    rotacion: PropTypes.string.isRequired,
    ancho: PropTypes.number.isRequired,
    alinacion: PropTypes.string.isRequired,
    reverso: PropTypes.bool
};

export default Text2D;