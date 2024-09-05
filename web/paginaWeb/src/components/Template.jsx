
import React from 'react'; 
import { Fieldset } from 'primereact/fieldset';

export default function ToggleableDemo(props) {
    return (
        <div className="card">
            <Fieldset legend={props.titulo} toggleable>
                <p className="m-0">
                {props.parrafo}
                </p>
            </Fieldset>
        </div>
    )
}