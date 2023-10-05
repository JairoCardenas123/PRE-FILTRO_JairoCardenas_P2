const express = require('express');
const router = express.Router();
const {obtenerTodos,postClientes,deleteClientes,putClientes} = require('../Controllers/Clientes.controllers.js'); 

// Ruta para obtener todos los clientes
router.get('/', obtenerTodos);

router.delete('/:id',deleteClientes)

router.post('/',postClientes)

router.put('/:id',putClientes)

module.exports = router;
