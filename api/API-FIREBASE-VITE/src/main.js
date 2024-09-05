import { db, collection, addDoc, getDocs, query, doc, updateDoc, deleteDoc, getDoc } from './firebaseConfig.js';

// Selecciona el formulario y el contenedor de tareas del DOM

const todoForm = document.getElementById('todo_form');
const tasksContainer = document.getElementById('tasks_container');

// Crear
// Función para crear un nuevo documento en la colección 'loginUser'

const create = async (nombre_completo, usuario, contraseña, mail, fecha_de_nacimiento) => {
    try {
     // Añade un nuevo documento a la colección 'loginUser' con los datos proporcionados
        const docRef = await addDoc(collection(db, 'loginUser'), { //se actualizo el nombre de la nueva coleccion de firebase
            nombre_completo,
            usuario,
            contraseña,
            mail,
            fecha_de_nacimiento,
            puntaje: 0 // Puntaje inicial establecido en 0
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

// Evento que se dispara cuando se envía el formulario
todoForm.addEventListener('submit', async e => {
    e.preventDefault(); // Evita que el formulario se envíe de la forma tradicional
        // Obtiene los valores de los campos del formulario
    const nombre_completo = todoForm['todo_nombre_completo'].value;
    const usuario = todoForm['todo_usuario'].value;
    const contraseña = todoForm['todo_contraseña'].value;
    const mail = todoForm['todo_mail'].value;
    const fecha_de_nacimiento = todoForm['todo_fecha_de_nacimiento'].value;

// Llama a la función create para crear un nuevo documento en Firebase
    await create(nombre_completo, usuario, contraseña, mail, fecha_de_nacimiento);

    todoForm.reset(); // Resetea el formulario
    readTasks();  // Recarga las tareas para mostrar el nuevo documento
});

// Leer
// Función para leer los documentos de la colección 'loginUser'
const readTasks = async () => {
    const q = query(collection(db, 'loginUser'));// Crea una consulta a la colección 'loginUser'
    const querySnapshot = await getDocs(q); // Ejecuta la consulta y obtiene los documentos
    tasksContainer.innerHTML = '';// Limpia el contenedor de tareas
    querySnapshot.forEach((doc) => {
        const task = doc.data(); // Obtiene los datos de cada documento

// Añade cada tarea al contenedor de tareas
        tasksContainer.innerHTML += `
            <div class="task" data-id="${doc.id}">
                <h3>${task.nombre_completo}</h3>
                <p>${task.usuario}</p>
                <p>${task.mail}</p>
                <p>${task.fecha_de_nacimiento}</p>
                <p>Puntaje: ${task.puntaje}</p>
                <button class="btn btn-primary update">Update</button>
                <button class="btn btn-danger delete">Delete</button>
            </div>
        `;
    });

    // Agrega eventos a los botones de actualizar y eliminar
    document.querySelectorAll('.update').forEach(button => {
        button.addEventListener('click', handleUpdate);
    });

    document.querySelectorAll('.delete').forEach(button => {
        button.addEventListener('click', handleDelete);
    });
};

// Actualizar
// Función para manejar la actualización de un documento
const handleUpdate = async (e) => {
    const taskElement = e.target.closest('.task');// Encuentra el elemento de la tarea
    const taskId = taskElement.dataset.id; // Obtiene el ID del documento
    const taskDoc = doc(db, 'usuario', taskId); // Obtiene la referencia al documento 
    const task = await getDoc(taskDoc); // Obtiene los datos del documento

// Pide al usuario nuevos valores para actualizar el documento
    const nuevoNombreCompleto = prompt('Nuevo nombre completo:', task.data().nombre_completo);
    const nuevoUsuario = prompt('Nuevo usuario:', task.data().usuario);
    const nuevaContraseña = prompt('Nueva contraseña:', task.data().contraseña);
    const nuevoMail = prompt('Nuevo mail:', task.data().mail);
    const nuevaFechaDeNacimiento = prompt('Nueva fecha de nacimiento:', task.data().fecha_de_nacimiento);

    // Actualiza el documento con los nuevos valores
    await updateDoc(taskDoc, {
        nombre_completo: nuevoNombreCompleto,
        usuario: nuevoUsuario,
        contraseña: nuevaContraseña,
        mail: nuevoMail,
        fecha_de_nacimiento: nuevaFechaDeNacimiento
    });

    readTasks(); // Recargar las tareas para mostrar los cambios
};

// Eliminar
//Función para manejar la eliminación de un documento
const handleDelete = async (e) => {
    const taskElement = e.target.closest('.task');  // Encuentra el elemento de la tarea
    const taskId = taskElement.dataset.id; // Obtiene el ID del documento
    await deleteDoc(doc(db, 'usuario', taskId)); // Elimina el documento de Firebase


    readTasks(); // Recargar las tareas para reflejar los cambios
};

// Cargar tareas cuando se carga la página
window.addEventListener('DOMContentLoaded', readTasks);

todoForm.addEventListener('submit', async e => {
    e.preventDefault();
    const nombre_completo = todoForm['todo_nombre_completo'].value;
    const usuario = todoForm['todo_usuario'].value;
    const contraseña = todoForm['todo_contraseña'].value;
    const mail = todoForm['todo_mail'].value;
    const fecha_de_nacimiento = todoForm['todo_fecha_de_nacimiento'].value;

    await create(nombre_completo, usuario, contraseña, mail, fecha_de_nacimiento);

    todoForm.reset();
    readTasks(); // Recargar las tareas
});
