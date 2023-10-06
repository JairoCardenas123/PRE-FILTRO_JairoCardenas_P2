const express = require('express')
const router = express.Router()
const {obtenerEmpleados,deleteEmpleado,postEmpleado,putEmpleados}  = require('../Controllers/Empleados.controllers.js')

router.get('/', obtenerEmpleados)

router.delete('/:id',deleteEmpleado)

router.post('/',postEmpleado)

router.put('/:id',putEmpleados)

/**
 * @swagger
 * components:
 *  schemas:
 *      Empleado:
 *          type: object
 *          properties:
 *              nombre:
 *                  type: string
 *                  description: Nombre del empleado
 *              cargo:
 *                  type: string
 *                  description: Cargo del empleado
 *              salario:
 *                  type: number
 *                  description: Salario del empleado
 *          required:
 *              - nombre
 *              - cargo
 *              - salario
 *          example:
 *              nombre: "Juan Pérez"
 *              cargo: "Gerente"
 *              salario: 50000
 */

/**
 * @swagger
 * /api/empleados/:
 *  get:
 *      summary: Obtener todos los empleados
 *      tags: [Empleados]
 *      responses:
 *          200:
 *              description: Lista de todos los empleados
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Empleado'
 */

/**
 * @swagger
 * /api/empleados/:
 *  post:
 *      summary: Crear un nuevo empleado
 *      tags: [Empleados]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Empleado'
 *      responses:
 *          200:
 *              description: Nuevo empleado creado
 */

/**
 * @swagger
 * /api/empleados/{id}:
 *  put:
 *      summary: Actualizar un empleado por ID
 *      tags: [Empleados]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *                type: string
 *            required: true
 *            description: ID del empleado
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Empleado'
 *      responses:
 *          200:
 *              description: Empleado actualizado
 *          404:
 *              description: Empleado no encontrado
 */

/**
 * @swagger
 * /api/empleados/{id}:
 *  delete:
 *      summary: Eliminar un empleado por ID
 *      tags: [Empleados]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *                type: string
 *            required: true
 *            description: ID del empleado
 *      responses:
 *          200:
 *              description: Empleado eliminado
 *          404:
 *              description: Empleado no encontrado
 */


module.exports = router