# Proyecto de Tareas con Firebase y Node.js

Este proyecto es una aplicación de gestión de tareas (CRUD) utilizando Firebase como backend y Node.js con npm para la gestión de dependencias. La aplicación permite crear, leer, actualizar y eliminar tareas.

## Estructura del Proyecto

```plaintext
.
├── index.html
├── src
│   ├── firebaseConfig.js
│   ├── main.js
├── package.json
├── vite.config.js
└── README.md 
```
 ## Descripción del diagrama:

* index.html: Punto de entrada de la aplicación.
* src: Contiene la lógica de la aplicación. components: Componentes reutilizables (Task, TaskForm, TaskList).
* Task: Representa una tarea individual.
* TaskForm: Formulario para crear y editar tareas.
* TaskList: Lista de todas las tareas.
* styles: Hojas de estilo CSS.
* firebaseConfig.js: Configuración de Firebase.
* main.js: Lógica principal de la aplicación.
* package.json: Gestión de dependencias.
* vite.config.js: Configuración del servidor de desarrollo.


## INSTALACION

1- Clona este repositorio en tu máquina local.

    git clone https://github.com/tu-usuario/tu-repositorio.git
    cd tu-repositorio

2-Instala las dependencias necesarias con npm.

    npm install


3- Configura Firebase siguiendo los pasos a continuación.

  ## Configuración de Firebase
  
A- Crea un proyecto en Firebase Console.

B- Agrega una aplicación web a tu proyecto Firebase y copia la configuración de Firebase.

C- En el archivo src/firebaseConfig.js, reemplaza la configuración con tu propia configuración de Firebase:


4- Uso

A- Inicia el servidor de desarrollo.
B- Abre tu navegador y ve a http://localhost:3000 para ver la aplicación.


5- Estructura del Código

## index.html
    El archivo HTML contiene la estructura de la aplicación y el formulario para gestionar las tareas.

## src/firebaseConfig.js
    Este archivo contiene la configuración de Firebase y las funciones necesarias para interactuar con Firestore.

## src/main.js
    Este archivo contiene la lógica para crear, leer, actualizar y eliminar tareas.







## Tecnologías
* Frontend: HTML, CSS, JavaScript (con un framework como React)
* Backend: Firebase Firestore
* Herramientas: Node.js, npm, Vite

Explicación
Leer (Read):

La función readTasks utiliza getDocs y query para obtener todos los documentos de la colección tasks y los muestra en el contenedor tasks_container.
Actualizar (Update):

La función handleUpdate maneja la actualización de una tarea. Obtiene los datos actuales, solicita al usuario los nuevos datos y actualiza el documento usando updateDoc.
Eliminar (Delete):

La función handleDelete maneja la eliminación de una tarea. Obtiene el ID de la tarea y elimina el documento usando deleteDoc.
Eventos de Página:

window.addEventListener('DOMContentLoaded', readTasks) carga las tareas al cargar la página.
todoForm.addEventListener('submit', ...) maneja el envío del formulario y recarga las tareas después de agregar una nueva.

