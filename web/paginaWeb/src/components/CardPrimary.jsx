import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardPrimary = () => {
    return (
        <div className="card text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '85%', height: 'auto', margin: '20px', border: 'none' }}>
            <img src="/src/assets/Logo.png" alt="ESI play" style={{ textAlign: 'center' ,width: '15%', height: 'auto', margin: '20px' }} />
            <div className="card-body" style={{ flex: 1 }}>
                <h5 className="card-title">ESI play</h5>
                <p className="card-text">Aprende jugando</p>
            </div>
        </div>
    );
};

export default CardPrimary;