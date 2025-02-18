import 'aframe';
import { Entity } from 'aframe-react';
import PropTypes from 'prop-types';

const Circulo = (props) => {
    /**
     * Crea un objeto circulo, que se utiliza como temporizador del tiempo de respuesta.
     * Cuenta 1 minuto en reversa, recibiendo el tiempo restante en progreso.
     * Si se envia 360, el circulo estara completo.
     */
    return (
        <Entity 
            geometry={{
                primitive: 'circle', 
                radius: props.radio,
                thetaLength: props.progreso,
            }}

            material={{
                color: 'blue',
                side: 'double',
            }}
            position={`${props.posicion}`}
        />
    );
}
Circulo.propTypes = {
    posicion: PropTypes.arrayOf(PropTypes.number).isRequired,
    progreso: PropTypes.number.isRequired,
    radio: PropTypes.number.isRequired
};

export default Circulo;