import { Text, Button } from "react-native";
import './CustomButton.css';
const NormalButton = () => {
    return (
        // Etiqueta de boton debe ir en "title" no como string suelto
        <Button
            title="Cambio ahora!"
            style={{"width":"30px"}}>
        </Button>
    )
}

export default NormalButton;