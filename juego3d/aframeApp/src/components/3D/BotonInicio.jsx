import TextPanel from "./Paneles/TextPanel";
import propTypes from 'prop-types';

const BotonInicio = (activo, setActivo) => {
    const buttonPanel = {
        posicion: "0 1.6 0",
        rotacion:"0 0 0",
        color: "black",
        altura: 0.35,
        ancho: 1,
        events: {
            click: () => {
                setActivo(true);
            }
        }
    }
    const buttonText = {
        texto: activo ? "En marcha" : "Iniciar",
        posicion: "0 1.6 1",
        rotacion: "0 0 0",
    }
    return (
        <TextPanel 
            propsPanel={buttonPanel}
            propsTexto={buttonText}
        />
    )
}

BotonInicio.propTypes = {
    activo: propTypes.bool.isRequired,
    setActivo: propTypes.func.isRequired,
};

export default BotonInicio;