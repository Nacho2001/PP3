// Importación de express, controller y enrutador
const express = require('express');
const { autenticacion } = require('../controllers/authController');
const router = express.Router();

// Ruta de autenticación
router.post('/', autenticacion);

module.exports = router;