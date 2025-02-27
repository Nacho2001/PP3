import TextPanel from "./Paneles/TextPanel";
import propTypes from 'prop-types';

const BotonInicio = (props) => {
    const { activo, setActivo } = props;
    const button = [{
        //posicion: activo ? "0 0.5 -3.5" : "-0.058 0.5 -3.5",
        posicion: activo ? "0 1.6 -0.6" : "-0.058 1.6 -0.6",
        rotacion:"0 0 0",
        color: "black",
        altura: 0.1,
        ancho: activo ? 0.35 : 0.25,
        class: "clickable",
        events: { click: () => setActivo(true) }
    },
    {
        texto: activo ? "En marcha" : "Iniciar",
        posicion: activo ? "0 1.6 -0.70" : "-0.045 1.6 -0.70",
        rotacion: "0 0 0",
        ancho: 1,
        alinacion: "center",
    }]

    return (
        <TextPanel data={button} />
    )
}

BotonInicio.propTypes = {
    activo: propTypes.bool.isRequired,
    setActivo: propTypes.func.isRequired,
};

export default BotonInicio;