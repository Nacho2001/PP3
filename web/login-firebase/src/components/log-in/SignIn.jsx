
import React, { useState } from 'react';
import login from "../../assets/login.png";
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Importa el método de autenticación
import { auth } from './../../services/firebaseConfig'; // Importa la configuración de Firebase
import '../../index.css';

export default function SignIn() {
  // Estado local para manejar el formulario y mensajes
  const [form, setForm] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // Nuevo estado para mensaje de éxito
  const navigate = useNavigate(); // Usa useNavigate

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Reinicia el mensaje de error antes de intentar iniciar sesión
    setSuccessMessage(''); // Reinicia el mensaje de éxito antes de intentar iniciar sesión
    try {
      // Utiliza Firebase Authentication para iniciar sesión con correo y contraseña
      await signInWithEmailAndPassword(auth, form.email, form.password);

      // Muestra mensaje de éxito y redirecciona
      setSuccessMessage('¡Inicio de sesión exitoso!');

      // Redirecciona a la página de inicio después de un breve retraso
      setTimeout(() => {
        navigate('/inicio'); // Redirecciona a la página de destino
      }, 1500); // Espera 1.5 segundos antes de redireccionar

    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setErrorMessage('Credenciales inválidas o error en el servidor');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex w-full align-center max-w-3xl mx-auto rounded-lg overflow-hidden shadow-xl bg-blue-200">
        <div className="flex w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-xl">
          <img src={login} alt="login-image" />
        </div>
        <div className="w-full xl:w-1/2 px-4 py-4 text-center">
          <form className="bg-white rounded-lg" onSubmit={handleSubmit}>
            <div className="p-3 pb-8 text-gray-700 text-center">
              <h1 className="text-gray-900 text-xl">SIGN IN</h1>
            </div>
            {/* completar con correo electrónico del usuario */}
            <div className="mb-4">
              <label
                className="block text-left mr-10 ml-5 text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Correo electrónico
              </label>
              <input
                value={form.email}
                onChange={handleChange}
                className="w-4/5 shadow-inner appearance-none border rounded py-2 px-3 bg-gray-200 text-gray-700 leading-normal focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                autoComplete='email'
                placeholder="Correo electrónico"
              />
            </div>
            {/* completar con contraseña del usuario  */}
            <div className="mb-6">
              <label
                className="block text-left mr-10 ml-5 text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Contraseña
              </label>
              <input
                value={form.password}
                onChange={handleChange}
                className="w-4/5 shadow-inner appearance-none border rounded py-2 px-3 bg-gray-200 text-gray-700 mb-3 leading-normal focus:outline-none focus:shadow-outline"
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="******"
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="m-3 mx-auto">
                <button
                  type="submit"
                  className="w-64 bg-blue-300 text-white font-bold rounded border-b-2 border-blue-200 hover:border-blue-400 hover:bg-blue-400 hover:text-white shadow-md py-2 inline-flex items-center justify-center"
                  onClick={() => window.open('https://pp2y3.atlassian.net/jira/software/projects/PI/boards/2')}
                >
                  <span className="mr-2 text-sm leading-normal">Ingresar</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={22}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentcolor"
                      d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
                    />
                  </svg>
                </button>

              </div>
            </div>
            {/* Mensaje de error */}
            {errorMessage && (
              <div className="mt-4 text-red-500">
                {errorMessage}
              </div>
            )}
            {/* Mensaje de éxito */}
            {successMessage && (
              <div className="mt-4 text-green-500">
                {successMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
