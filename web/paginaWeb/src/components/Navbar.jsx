import React from 'react'; 
import { Menubar } from 'primereact/menubar';

import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeicons/primeicons.css';

export default function Navbars() {
    const items = [
        {
            label: 'Inicio',
            icon: 'pi pi-home'
        },
        {
            label: 'Login',
            icon: 'pi pi-user'
        },
        {
            label: 'Información',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Enfermedes Sexuales',
                    icon: 'pi pi-thumbtack'
                },
                {
                    label: 'Sección',
                    icon: 'pi pi-thumbtack'
                },
                {
                    label: 'Anticonceptivos',
                    icon: 'pi pi-thumbtack',
                    items: [
                        {
                            label: 'Preservativo',
                            icon: 'pi pi-thumbtack'
                        },
                        {
                            label: 'Sección',
                            icon: 'pi pi-thumbtack'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Trivia',
            icon: 'pi pi-star'
        }
    ];

    return (
        <div className="card">
            <Menubar model={items} />
        </div>
    )
}