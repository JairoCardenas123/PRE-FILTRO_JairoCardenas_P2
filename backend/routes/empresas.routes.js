const express = require('express')
const router = express.Router()
const {obtenerEmpresas,deleteEmpresa,postEmpresas} = require('../Controllers/Empresas.controllers.js')

router.get('/', obtenerEmpresas)

router.delete('/:id',deleteEmpresa)

router.post('/',postEmpresas)

module.exports = router