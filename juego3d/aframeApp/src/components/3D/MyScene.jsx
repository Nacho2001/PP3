import 'aframe';
import PanelRespuesta from './Paneles/PanelRespuesta';
import { Scene, Entity } from 'aframe-react';
import Tablero from './Tableros/Tablero';
import TableroReglas from './Tableros/TableroReglas';
import Iluminacion from './Luces/Iluminacion';
import paneles from './Paneles/panelesRespuesta.json';
import './Styles.css';
import { useState } from 'react';
import BotonInicio from './BotonInicio';

const MyScene = () => {
    // Interruptor de juego
    const [tempActivo, setTempActivo] = useState(false);
    
    return (
        <>
            <Scene device-orientation-permission-ui>
                <Entity primitive="a-camera" look-controls position="0 1.6 0">
                    <Entity primitive="a-cursor" color="white" />
                </Entity>
                <Iluminacion />
                <Tablero />
                {paneles.map((panel, i) => (
                    <PanelRespuesta key={i} panelData={panel} />
                )) }
                <TableroReglas />

                {/*<BotonInicio activo={tempActivo} setActivo={setTempActivo}/>*/}
                {/*<Temp props={[tempActivo,setTempActivo]}/>*/}
            </Scene>
        </>
    );
}

export default MyScene;