import 'aframe';
import { Scene, Entity } from 'aframe-react';
import Iluminacion from './Luces/Iluminacion';
import './Styles.css';
//import fondo from '../texturas/house1.jpg';
import Juego from './Juego';

const MyScene = () => {
    
    return (
        <>
            <Scene device-orientation-permission-ui>
                <Entity primitive="a-camera" look-controls position="0 1.6 0">
                    <Entity primitive="a-cursor" color="white" />
                </Entity>
                <Entity primitive="a-sky" color="#ff00ff"/>
                <Iluminacion />
                <Juego />
            </Scene>
        </>
    );
}

export default MyScene;