import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import TextPanel from "./Paneles/TextPanel";

const StartPanel = ({ onFinish }) => {
  const messages = ["En sus marcas...", "Listos...", "¡Ya!"];
  const [index, setIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const panelData = { 
    posicion: '0 1.5 -1', 
    rotacion: '0 0 0', 
    color: 'black', 
    altura: 0.4, 
    ancho: 1,
    animacion: fadeOut ? { property: "material.opacity", to: 0, dur: 1000 } : null
  };
const textData = { 
    texto: messages[index], 
    posicion: '0 1.5 -1', 
    rotacion: '0 0 0', 
    ancho: 2, 
    alinacion: 'center' 
};
const data = [panelData, textData];
  useEffect(() => {
    if (index < messages.length) {
      const timeout = setTimeout(() => {
        setIndex(index + 1);
      }, 1000);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        // Issue: falla la animación
        setFadeOut(true);
          setTimeout(
            onFinish, 1000);
      }, 500)
    }  
  }, [index, messages.length, onFinish]);

  return index < messages.length ? (
    <>
      <TextPanel data={data} />
    </>
  ) : null;
};
StartPanel.propTypes = {
  onFinish: PropTypes.func.isRequired,
  //inicioJuego: PropTypes.func.isRequired
};

export default StartPanel;
