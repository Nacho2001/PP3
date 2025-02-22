import 'aframe';
import { Entity } from 'aframe-react';
import PropTypes from 'prop-types';

const Texto2D = (props) => {
    const textData = props;
    // Separar los valores de la posicion en tres variables: x, y, z y las convierte en valores numericos 
    const [x, y, z] = textData.posicion.split(' ').map(Number);
    return (
        <>
            <Entity
                // Valor del texo, alinacion en panel y tamaño de fuente
                text={{ value: textData.texto, align: textData.alinacion, width: textData.ancho }}
                // Establece posicion del texto, queda ligeramente más adelante para evitar que se el panel lo tape
                position={`${x} ${y} ${z + (textData.reverso ? -0.11 : 0.11 )}`}
                // Rotacion del texto
                rotation={textData.rotacion}
                // La escala indica si el texto se muestra al reves, dependiendo la posicion del panel
                scale={ textData.reverso ? '-1 1 -1' : '1 1 1' }
            />
        </>
    )
}

// Declara tipos de las props
Texto2D.propTypes = {
    texto: PropTypes.string.isRequired,
    posicion: PropTypes.string.isRequired,
    rotacion: PropTypes.string.isRequired,
    ancho: PropTypes.number.isRequired,
    alinacion: PropTypes.string.isRequired,
    reverso: PropTypes.bool
};

export default Texto2D;