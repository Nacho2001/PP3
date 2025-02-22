import Texto2D from "../Primary/Texto2D";
import PanelSimple from "../Primary/PanelSimple";
import PropTypes from 'prop-types';

const TextPanel = (props) => {
    // Recibe los datos del panel y texto de las props
    const data = props.data;
    // Recibe atributo para el elemento Panel
    const propsPanel = data[0];
    // Recibe atributo para el texto del panel
    const propsText = data[1];

    return (
        <>
            {/** Envia los parámentros a los componentes */}
            <PanelSimple panelData={propsPanel} />
            <Texto2D textData={propsText} />
        </>
    )
}

// Define los tipos de las props
TextPanel.propTypes = {
    propsPanel: PropTypes.object.isRequired,
    propsText: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
};

// Exportación del componente
export default TextPanel;