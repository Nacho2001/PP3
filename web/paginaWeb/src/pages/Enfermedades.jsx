import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';

function Enfermedades() {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-4">
    {/* Botón para volver atrás */}
        <BackButton />
        <h1>Enfermedades de transmisión sexual</h1>
        <p>Acá se encontrará toda la información sobre las enfermedades de transmisión sexual.</p>
    </div>
  );
}

export default Enfermedades;
