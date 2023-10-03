const express = require('express');
const router = express.Router();
const {obtenerInventario, deleteInventario,postInventario} = require('../Controllers/Inventario.controllers.js')

router.get('/', obtenerInventario)

router.delete('/:id', deleteInventario)

router.post('/', postInventario)

module.exports = router