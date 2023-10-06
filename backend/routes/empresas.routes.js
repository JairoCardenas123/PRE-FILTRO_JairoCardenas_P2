const express = require('express')
const router = express.Router()
const {obtenerEmpresas,deleteEmpresa,postEmpresas,putEmpresas} = require('../Controllers/Empresas.controllers.js')

router.get('/', obtenerEmpresas)

router.delete('/:id',deleteEmpresa)

router.post('/',postEmpresas)

router.put('/:id',putEmpresas)

/**
 * @swagger
 * components:
 *  schemas:
 *      Empresa:
 *          type: object
 *          properties:
 *              nombre:
 *                  type: string
 *                  description: Nombre de la empresa
 *              direccion:
 *                  type: string
 *                  description: Dirección de la empresa
 *              telefono:
 *                  type: string
 *                  description: Teléfono de la empresa
 *          required:
 *              - nombre
 *              - direccion
 *              - telefono
 *          example:
 *              nombre: "Mi Empresa"
 *              direccion: "123 Calle Principal"
 *              telefono: "1234567890"
 */

/**
 * @swagger
 * /api/empresas/:
 *  get:
 *      summary: Obtener todas las empresas
 *      tags: [Empresas]
 *      responses:
 *          200:
 *              description: Lista de todas las empresas
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Empresa'
 */



/**
 * @swagger
 * /api/empresas/:
 *  post:
 *      summary: Crear una nueva empresa
 *      tags: [Empresas]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Empresa'
 *      responses:
 *          200:
 *              description: Nueva empresa creada
 */

/**
 * @swagger
 * /api/empresas/{id}:
 *  put:
 *      summary: Actualizar una empresa por ID
 *      tags: [Empresas]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *                type: string
 *            required: true
 *            description: ID de la empresa
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Empresa'
 *      responses:
 *          200:
 *              description: Empresa actualizada
 *          404:
 *              description: Empresa no encontrada
 */

/**
 * @swagger
 * /api/empresas/{id}:
 *  delete:
 *      summary: Eliminar una empresa por ID
 *      tags: [Empresas]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *                type: string
 *            required: true
 *            description: ID de la empresa
 *      responses:
 *          200:
 *              description: Empresa eliminada
 *          404:
 *              description: Empresa no encontrada
 */



module.exports = router