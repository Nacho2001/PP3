import Texto2D from "../Primary/Texto2D";
import PanelSimple from "../Primary/PanelSimple";
import PropTypes from 'prop-types';

const TextPanel = (props) => {
    // Recibe atributo para el elemento Panel
    const propsPanel = props.propsPanel;
    // Recibe atributo para el texto del panel
    const propsText = props.propsTexto;

    return (
        <>
            {/** Envia los parámentros a los componentes */}
            <PanelSimple panelData={propsPanel} />
            <Texto2D props={propsText} />
        </>
    )
}

// Define los tipos de las props
TextPanel.propTypes = {
    propsPanel: PropTypes.object.isRequired,
    propsTexto: PropTypes.object.isRequired,
};

// Exportación del componente
export default TextPanel;