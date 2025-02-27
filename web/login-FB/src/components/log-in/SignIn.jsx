import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './../../services/firebaseConfig';
import '../../index.css';

export default function SignIn({ onToggleForm }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      setSuccessMessage('¡Inicio de sesión exitoso!');
      setTimeout(() => {
        navigate('/inicio');
      }, 1000);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setErrorMessage('Credenciales inválidas o error en el servidor');
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white items-center justify-center">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-1E232C">¡Bienvenido de nuevo! Inicia sesión.</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md h-3/5 flex flex-col">
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Correo electrónico
            </label>
            <input
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="email"
              name="email"
              type="email"
              autoComplete='email'
              placeholder="Correo electrónico"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="******"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-900 text-white font-medium py-3 px-4 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 mb-6"
          >
            Iniciar sesión
          </button>
        </form>

        {errorMessage && (
          <div className="mt-4 text-red-500 text-center">
            {errorMessage}
          </div>
        )}

        {successMessage && (
          <div className="mt-4 text-green-500 text-center">
            {successMessage}
          </div>
        )}
      </div>

      <div className="text-center mb-4">
        <p className="text-gray-600">
          ¿No tienes una cuenta?{" "}
          <button onClick={onToggleForm} className="text-blue-500 font-medium">
            Regístrate aquí
          </button>
        </p>
      </div>
    </div>
  );
}