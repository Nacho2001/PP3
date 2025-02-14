import 'aframe';
import TextPanel from './Paneles/TextPanel';
import { Scene, Entity } from 'aframe-react';
import Tablero from './Tableros/Tablero';
import TableroReglas from './Tableros/TableroReglas';
import Iluminacion from './Luces/Iluminacion';
import paneles from './Paneles/Paneles_respuesta/paneles_respuesta';
import './BotonVR.css';

const MyScene = () => {
    return (
        <Scene>
            <Entity primitive="a-camera" position="0 1.6 0" />
            <Iluminacion />
            <Tablero />
            {paneles.map((panel, i) => (
                <TextPanel key={i} posicion={panel.posicion} rotacion={panel.rotacion} texto={panel.texto} />
            ))}
            <TableroReglas />
        </Scene>
    );
}

export default MyScene;