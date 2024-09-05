import React, { useState, useEffect } from 'react';
import login from "../../assets/login.png";
import '../../index.css';
import { db, collection, addDoc, getDocs, query, doc, updateDoc, deleteDoc, getDoc } from './../../services/firebaseConfig';

export default function SignUpComponent() {
    // Estado para el formulario
    const [formData, setFormData] = useState({
        nombre_completo: '',
        usuario: '',
        contraseña: '',
        correo_electronico: '',
        fecha_de_nacimiento: ''
    });

    const [user, setUsers] = useState([]);
    const [isRegistering, setIsRegistering] = useState(false); // Controla el tipo de formulario
    const [mostrarNotificacion, setMostrarNotificacion] = useState(false);

    // Manejar cambios en el formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    // Manejar envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isRegistering) {
            // Enviar datos de registro
            try {
                const response = await createUser({
                    username: formData.usuario, // Usamos usuario como nombre de usuario para el registro
                    email: formData.mail,      // Usamos mail como correo electrónico para el registro
                    password: formData.contraseña // Usamos contraseña para la contraseña
                });
                console.log('Usuario registrado:', response);
                setMostrarNotificacion(true);
                setFormData({
                    nombre_completo: '',
                    usuario: '',
                    contraseña: '',
                    mail: '',
                    fecha_de_nacimiento: ''
                });
            } catch (error) {
                console.error('Error al registrar usuario:', error);
            }
        } else {
            // Enviar datos del usuario
            try {
                await addDoc(collection(db, 'loginUser'), {
                    nombre_completo: formData.nombre_completo,
                    usuario: formData.usuario,
                    contraseña: formData.contraseña,
                    mail: formData.mail,
                    fecha_de_nacimiento: formData.fecha_de_nacimiento,
                    puntaje: 0 // Puntaje inicial
                });
                setFormData({
                    nombre_completo: '',
                    usuario: '',
                    contraseña: '',
                    mail: '',
                    fecha_de_nacimiento: ''
                });
                fetchUsers(); // Recarga los usuarios
            } catch (e) {
                console.error("Error añadiendo al usuario ", e);
            }
        }
    };

    // Leer las tareas desde Firebase
    const fetchUsers = async () => {
        const q = query(collection(db, 'loginUser'));
        const querySnapshot = await getDocs(q);
        const usersArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUsers(usersArray);
    };

    // Manejar la actualización de una tarea
    const handleUpdateUser = async (id) => {
        const userDoc = doc(db, 'loginUser', id);
        const user = await getDoc(userDoc);
        const newNombreCompleto = prompt('Nuevo nombre completo:', user.data().nombre_completo);
        const newUsuario = prompt('Nuevo usuario:', user.data().usuario);
        const newContraseña = prompt('Nueva contraseña:', user.data().contraseña);
        const newMail = prompt('Nuevo correo electrónico:', user.data().mail);
        const newFechaDeNacimiento = prompt('Nueva fecha de nacimiento:', user.data().fecha_de_nacimiento);

        await updateDoc(userDoc, {
            nombre_completo: newNombreCompleto,
            usuario: newUsuario,
            contraseña: newContraseña,
            mail: newMail,
            fecha_de_nacimiento: newFechaDeNacimiento
        });

        fetchUsers(); // Recarga las tareas
    };

    // Manejar la eliminación de una tarea
    const handleDeleteUser = async (id) => {
        await deleteDoc(doc(db, 'loginUser', id));
        fetchUsers(); // Recarga las tareas
    };

    useEffect(() => {
        if (!isRegistering) {
            fetchUsers(); // Cargar las tareas cuando el componente se monta
        }
    }, [isRegistering]);

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-xl bg-blue-200">
                <div className="flex w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-xl">
                    <img src={login} alt="login-image" />
                </div>
                <div className="w-full xl:w-1/2 px-4 py-4 text-center">
                    <form className="bg-white rounded-lg" onSubmit={handleSubmit}>
                        <div className="p-3 pb-8 text-gray-700 text-center">
                            <h1 className="text-gray-900 text-xl">{isRegistering ? 'Agregar usuario' : 'SIGN UP' }</h1>
                        </div>
                        {!isRegistering && (
                            <>
                                <div className="mb-4">
                                    <label className="block text-left mr-10 ml-5 text-gray-700 text-sm font-bold mb-2" htmlFor="nombre_completo">
                                        Nombre Completo
                                    </label>
                                    <input
                                        value={formData.nombre_completo}
                                        onChange={handleChange}
                                        className="w-4/5 shadow-inner appearance-none border rounded py-2 px-3 bg-gray-200 text-gray-700 leading-normal focus:outline-none focus:shadow-outline"
                                        id="nombre_completo"
                                        name="nombre_completo"
                                        type="text"
                                        placeholder="Nombre Completo"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-left mr-10 ml-5 text-gray-700 text-sm font-bold mb-2" htmlFor="usuario">
                                        Usuario
                                    </label>
                                    <input
                                        value={formData.usuario}
                                        onChange={handleChange}
                                        className="w-4/5 shadow-inner appearance-none border rounded py-2 px-3 bg-gray-200 text-gray-700 leading-normal focus:outline-none focus:shadow-outline"
                                        id="usuario"
                                        name="usuario"
                                        type="text"
                                        placeholder="Usuario"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-left mr-10 ml-5 text-gray-700 text-sm font-bold mb-2" htmlFor="contraseña">
                                        Contraseña
                                    </label>
                                    <input
                                        value={formData.contraseña}
                                        onChange={handleChange}
                                        className="w-4/5 shadow-inner appearance-none border rounded py-2 px-3 bg-gray-200 text-gray-700 leading-normal focus:outline-none focus:shadow-outline"
                                        id="contraseña"
                                        name="contraseña"
                                        type="password"
                                        placeholder="**********"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-left mr-10 ml-5 text-gray-700 text-sm font-bold mb-2" htmlFor="mail">
                                        Correo electrónico
                                    </label>
                                    <input
                                        value={formData.mail}
                                        onChange={handleChange}
                                        className="w-4/5 shadow-inner appearance-none border rounded py-2 px-3 bg-gray-200 text-gray-700 leading-normal focus:outline-none focus:shadow-outline"
                                        id="mail"
                                        name="mail"
                                        type="email"
                                        placeholder="Correo electrónico"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-left mr-10 ml-5 text-gray-700 text-sm font-bold mb-2" htmlFor="fecha_de_nacimiento">
                                        Fecha de Nacimiento
                                    </label>
                                    <input
                                        value={formData.fecha_de_nacimiento}
                                        onChange={handleChange}
                                        className="w-4/5 shadow-inner appearance-none border rounded py-2 px-3 bg-gray-200 text-gray-700 leading-normal focus:outline-none focus:shadow-outline"
                                        id="fecha_de_nacimiento"
                                        name="fecha_de_nacimiento"
                                        type="date"
                                    />
                                </div>
                            </>
                        )}
                        <div className="flex items-center justify-center">
                            <div className="m-3 mx-auto">
                                <button
                                    type="submit"
                                    className="w-64 bg-blue-300 text-white font-bold rounded border-b-2 border-blue-200 hover:border-blue-400 hover:bg-blue-400 hover:text-white shadow-md py-2 inline-flex items-center justify-center"
                                >
                                    <span className="mr-2 text-sm leading-normal">{isRegistering ? 'Registrarse' : 'Agregar usuario'}</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={22}
                                        height={22}
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M13 3V11.06L16.89 8.17 19 10.28 12 17.28 5 10.28l2.11-2.11L11 11.06V3h2Z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </form>
                    {mostrarNotificacion && (
                        <NotificacionNewUser onClose={() => setMostrarNotificacion(false)} />
                    )}
                </div>
            </div>
        </div>
    );
}
