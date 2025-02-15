import 'aframe';
import TextPanel from './Paneles/TextPanel';
import { Scene, Entity } from 'aframe-react';
import Tablero from './Tableros/Tablero';
import TableroReglas from './Tableros/TableroReglas';
import Iluminacion from './Luces/Iluminacion';
import paneles from './Paneles/Paneles_respuesta/paneles_respuesta';
import './Styles.css';



const MyScene = () => {
    return (
        <>
            <Scene device-orientation-permission-ui>
                <Entity primitive="a-camera" look-controls position="0 1.6 0">
                    <Entity primitive="a-cursor" color="white" />
                </Entity>
                <Iluminacion />
                <Tablero />
                {paneles.map((panel, i) => (
                    <TextPanel key={i} posicion={panel.posicion} rotacion={panel.rotacion} texto={panel.texto} />
                ))}
                <TableroReglas />
            </Scene>
        </>
    );
}

export default MyScene;