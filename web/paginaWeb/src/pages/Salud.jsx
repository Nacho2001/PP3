import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import BackButton from '../components/BackButton';

function Salud() {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-4">
        {/* Botón para volver atrás */}
        <BackButton />
        <h1>Salud Sexual</h1>
        <p>Acá se encontrará toda la información sobre la salud sexual.</p>
    </div>
  );
}

export default Salud;
