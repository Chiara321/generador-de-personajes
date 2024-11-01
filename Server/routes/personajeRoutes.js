// service/routes/personajeRoutes.js
const express = require('express');
const { obtenerPersonajeAleatorio } = require('../controllers/personajeController');
const router = express.Router();

// Ruta para obtener un personaje aleatorio
router.get('/aleatorio', obtenerPersonajeAleatorio);

module.exports = router;
