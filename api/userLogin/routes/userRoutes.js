// Dependencias (express,enrutador y controller)
const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

// Definición de los endpoints a las consultas del controller

// Obtener usuarios
router.get('/', controller.getUsers);

// Obtener usuario por Username
router.get('/:usuario', controller.getUniqueUser);

// Borrar usuario
router.delete('/:usuario', controller.deleteUser);

// Actualizar usuario
router.put('/:usuario', controller.updateUser);

module.exports = router