import React, { useState, useEffect } from 'react';
import '../../index.css';
import { getAuth, sendEmailVerification } from 'firebase/auth';
import {
  db,
  collection,
  addDoc,
  getDocs,
  query,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
} from "./../../services/firebaseConfig"

export default function SignUpComponent({ onToggleForm }) {
  // Estado para el formulario
  const [formData, setFormData] = useState({
    nombre_completo: "",
    usuario: "",
    contraseña: "",
    confirmar_contraseña: "",
    mail: "",
    fecha_de_nacimiento: "",
  });

  const [mostrarNotificacion, setMostrarNotificacion] = useState(false);

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.contraseña !== formData.confirmar_contraseña) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      await addDoc(collection(db, "loginUser"), {
        nombre_completo: formData.nombre_completo,
        usuario: formData.usuario,
        contraseña: formData.contraseña,
        mail: formData.mail,
        fecha_de_nacimiento: formData.fecha_de_nacimiento,
        puntaje: 0, // Puntaje inicial
      });

      setFormData({
        nombre_completo: "",
        usuario: "",
        contraseña: "",
        confirmar_contraseña: "",
        mail: "",
        fecha_de_nacimiento: "",
      });

      setMostrarNotificacion(true);
    } catch (e) {
      console.error("Error añadiendo al usuario ", e);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white items-center justify-center"> {/* Centrado vertical y horizontal */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-black">¡Hola! Regístrese para comenzar</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md h-3/5 flex flex-col"> {/* Tarjeta con altura ajustada */}
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
          <div className="mb-4">
            <input
              value={formData.nombre_completo}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="nombre_completo"
              name="nombre_completo"
              type="text"
              placeholder="Nombre Completo"
            />
          </div>

          <div className="mb-4">
            <input
              value={formData.mail}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="mail"
              name="mail"
              type="email"
              placeholder="Correo electrónico"
            />
          </div>

          <div className="mb-4">
            <input
              value={formData.contraseña}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="contraseña"
              name="contraseña"
              type="password"
              placeholder="Contraseña"
            />
          </div>

          <div className="mb-6">
            <input
              value={formData.confirmar_contraseña}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="confirmar_contraseña"
              name="confirmar_contraseña"
              type="password"
              placeholder="Confirmar Contraseña"
            />
          </div>
          <div className="mb-4">
            <input
              value={formData.fecha_de_nacimiento}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="fecha_de_nacimiento"
              name="fecha_de_nacimiento"
              type="date"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-900 text-white font-medium py-3 px-4 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 mb-6"
          >
            Registro
          </button>
        </form>

        <div className="text-center mb-4">
          <p className="text-gray-600">
            ¿Ya tienes una cuenta?{" "}
            <button onClick={onToggleForm} className="text-blue-500 font-medium">
              Inicia sesión aquí
            </button>
          </p>
        </div>

        {mostrarNotificacion && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm">
              <h2 className="text-xl font-bold mb-4">¡Registro exitoso!</h2>
              <p className="mb-4">Tu cuenta ha sido creada correctamente.</p>
              <button
                onClick={() => setMostrarNotificacion(false)}
                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded"
              >
                Aceptar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

