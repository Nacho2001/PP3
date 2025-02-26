import 'aframe';
import { Scene, Entity } from 'aframe-react';
import PropTypes from 'prop-types';
import Iluminacion from './Luces/Iluminacion';
import './Styles.css';
import 'aframe-mouse-cursor-component';
import Juego from './Juego';
import StartPanel from './StartPanel';
import { useState } from 'react';

const MyScene = (props) => {
    const categoria = props.categoria;
    const [cuentaAtras, setCuentaAtras] = useState(true);
    const [inicioJuego, setInicioJuego] = useState(false);
    return (
        <>
            <Scene device-orientation-permission-ui>
                <Entity primitive="a-camera" position="0 1.6 0" >
                </Entity>
                <Entity primitive="a-sky" color="#0000ff"/>
                <Iluminacion />
                {cuentaAtras && (
                    <StartPanel 
                    onFinish = {
                        () => {
                            setCuentaAtras(false);
                            setInicioJuego(true);
                        }
                    } 
                    />
                )}
                {inicioJuego && (
                    <Juego categoria={categoria} />
                )}
            </Scene>
        </>
    );
}
MyScene.propTypes = {
    categoria: PropTypes.string.isRequired,
};

export default MyScene;