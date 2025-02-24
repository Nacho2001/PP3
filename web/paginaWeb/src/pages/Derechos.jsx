import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';

function Derechos() {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-4">
        {/* Botón para volver atrás */}
        <BackButton />
        <h1>Derechos y responsabilidades</h1>
        <p>Acá se encontrará toda la información sobre lops Derechos y responsabilidades.</p>
    </div>
  );
}

export default Derechos;
