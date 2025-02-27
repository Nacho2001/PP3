import './CustomButton.css';
import setData from '../callbacks/setData';
import { useState } from 'react';

function CustomButton(props){
    const cambioColor = props.cambioColor;
        return (
            <>
                <button className="button" style={{color: props.colors.color}} onClick={cambioColor}>
                    Cambio Ahora!!
                </button>
            </>
        )
}

export default CustomButton;