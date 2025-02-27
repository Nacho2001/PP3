import { Text, Button } from "react-native";

function CustomButton(props){
    //const cambioColor = props.cambioColor;
    return (
        <>
            <Button className="button" style={{color: props.colors.color}}>
                <Text>Cambio Ahora!!</Text>
            </Button>
        </>
    )
}

export default CustomButton;