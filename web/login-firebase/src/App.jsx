import React, { useState, useEffect } from 'react';
import LoginPage from './components/logInPage';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para seguir el inicio de sesión

  useEffect(() => {
    // Verificar el estado de inicio de sesión existente o realizar una verificación de autenticación en la carga inicial
    const tokenAlmacenado = localStorage.getItem('token'); 

    setIsLoggedIn(tokenAlmacenado !== null); // Actualizar el estado de inicio de sesión según la presencia del token
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true); // Actualizar el estado de inicio de sesión después de un inicio de sesión exitoso
  };

  return (
    <Router>
   <Routes>
    <Route
      path="/"
      element={
        isLoggedIn ? <Home /> : <Navigate to="/login" replace />
      }
    />
    <Route
      path="/inicio"
      element={
        isLoggedIn ? <Home /> : <Navigate to="/login" replace />
      }
    />
    <Route
      path="/perfil"
      element={
        isLoggedIn ? <PerfilInfo /> : <Navigate to="/login" replace />
      }
    />
    <Route
      path="/configuracion"
      element={
        isLoggedIn ? <ConfigPage /> : <Navigate to="/login" replace />
      }
    />
    <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
}

export default App;
