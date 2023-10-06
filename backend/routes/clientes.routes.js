const express = require('express');
const router = express.Router();
const {obtenerTodos,postClientes,deleteClientes,putClientes} = require('../Controllers/Clientes.controllers.js'); 

// Ruta para obtener todos los clientes
router.get('/', obtenerTodos);

router.delete('/:id',deleteClientes)

router.post('/',postClientes)

router.put('/:id',putClientes)

/**
 * @swagger
 * components:
 *  schemas:
 *      Cliente:
 *          type: object
 *          properties:
 *              nombre:
 *                  type: string
 *                  description: Nombre del cliente
 *              apellido:
 *                  type: string
 *                  description: Apellido del cliente
 *              fechaNacimiento:
 *                  type: string
 *                  format: date
 *                  description: Fecha de nacimiento del cliente
 *              direccion:
 *                  type: string
 *                  description: Dirección del cliente
 *              celular:
 *                  type: string
 *                  description: Número de celular del cliente
 *              correoElectronico:
 *                  type: string
 *                  format: email
 *                  description: Correo electrónico del cliente
 *              empresa:
 *                  type: string
 *                  description: Nombre de la empresa del cliente
 *          required:
 *              - nombre
 *              - apellido
 *              - fechaNacimiento
 *              - direccion
 *              - celular
 *              - correoElectronico
 *              - empresa
 *          example:
 *              nombre: "Juan"
 *              apellido: "Pérez"
 *              fechaNacimiento: "1990-01-01"
 *              direccion: "123 Calle Principal"
 *              celular: "1234567890"
 *              correoElectronico: "juan@example.com"
 *              empresa: "Mi Empresa"
 */

/**
 * @swagger
 * /api/clientes/:
 *  get:
 *      summary: Obtener todos los clientes
 *      tags: [Clientes]
 *      responses:
 *          200:
 *              description: Lista de todos los clientes
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Cliente'
 */


/**
 * @swagger
 * /api/clientes/:
 *  post:
 *      summary: Crear un nuevo cliente
 *      tags: [Clientes]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Cliente'
 *      responses:
 *          200:
 *              description: Nuevo cliente creado
 */

/**
 * @swagger
 * /api/clientes/{id}:
 *  put:
 *      summary: Actualizar un cliente por ID
 *      tags: [Clientes]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *                type: string
 *            required: true
 *            description: ID del cliente
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Cliente'
 *      responses:
 *          200:
 *              description: Cliente actualizado
 *          404:
 *              description: Cliente no encontrado
 */

/**
 * @swagger
 * /api/clientes/{id}:
 *  delete:
 *      summary: Eliminar un cliente por ID
 *      tags: [Clientes]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *                type: string
 *            required: true
 *            description: ID del cliente
 *      responses:
 *          200:
 *              description: Cliente eliminado
 *          404:
 *              description: Cliente no encontrado
 */


module.exports = router;
