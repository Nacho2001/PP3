import React, { useState } from 'react';
import SignUpComponent from './log-in/SignUp'; 
import SignIn from './log-in/SignIn';

function LoginPage  ()  {
  // Estado local para manejar qué formulario se muestra
  const [showSignIn, setShowSignIn] = useState(true);
  
  // Función para cambiar entre formularios
  const toggleForm = () => {
    setShowSignIn((prev) => !prev);
  };

  return (
    <div>
      {showSignIn ? (
        <SignIn onToggleForm={toggleForm} />
      ) : (
        <SignUpComponent onToggleForm={toggleForm} />
      )}
    </div>
  );
};

export default LoginPage;

