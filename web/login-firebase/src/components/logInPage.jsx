import React, { useState } from 'react';
import SignUpComponent from './log-in/SignUp'; 
import SignIn from './Log-in/SignIn';
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
        <SignIn/>
      ) : (
        <SignUpComponent />
      )}
      <p>
        {showSignIn
          ? "¿No tienes una cuenta? "
          : "¿Ya tienes una cuenta? "}
        <button onClick={toggleForm} className="text-bold text-xl underline">
          {showSignIn ? "Regístrate" : "Inicia Sesión"}
        </button>
      </p>
    </div>
  );
};

export default LoginPage;
