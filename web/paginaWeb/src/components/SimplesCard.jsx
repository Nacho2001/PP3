import React from 'react';
import { Fieldset } from 'primereact/fieldset';

export default function BasicDemo(props) {
    return (
        <div className="card">
            <Fieldset legend={props.titulo}>
                <p className="m-0">
                {props.parrafo}   
                </p>
            </Fieldset>
        </div>
    )
}