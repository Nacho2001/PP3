import TextPanel from "./Paneles/TextPanel";
import propTypes from 'prop-types';

const BotonInicio = (activo, setActivo) => {
    const button = [{
        posicion: "0 1.7 -0.7",
        rotacion:"0 0 0",
        color: "black",
        altura: 0.35,
        ancho: 1,
        events: {
            click: () => {
                setActivo(true);
            }
        }
    },
    {
        texto: activo ? "En marcha" : "Iniciar",
        posicion: "0.3 1.7 -0.80",
        rotacion: "0 0 0",
    }]

    return (
        <TextPanel data={button}/>
    )
}

BotonInicio.propTypes = {
    activo: propTypes.bool.isRequired,
    setActivo: propTypes.func.isRequired,
};

export default BotonInicio;