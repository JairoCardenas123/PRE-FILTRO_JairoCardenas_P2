const express = require('express');
const router = express.Router();
const {obtenerTodos,postClientes,deleteClientes} = require('../Controllers/Clientes.controllers.js'); 

// Ruta para obtener todos los clientes
router.get('/', obtenerTodos);

router.delete('/:id',deleteClientes)

router.post('/',postClientes)

module.exports = router;
