const express = require('express');
const router = express.Router();
const {obtenerUsuarios,postUsuarios,deleteUsuarios,putUsuarios,changeUsuarios} = require('../Controllers/Usuarios.controllers')

router.get('/',obtenerUsuarios)

router.post('/',postUsuarios)

router.delete('/:id',deleteUsuarios)

router.put('/:id',putUsuarios)

router.delete('/change/:id',changeUsuarios)

/**
 * @swagger
 * components:
 *  schemas:
 *      Usuario:
 *          type: object
 *          properties:
 *              nombre:
 *                  type: string
 *                  description: Nombre del usuario
 *              email:
 *                  type: string
 *                  description: Correo electrónico del usuario
 *              password:
 *                  type: string
 *                  description: Contraseña del usuario
 *              estado:
 *                  type: boolean
 *                  description: Estado del usuario
 *              googleSignIn:
 *                  type: boolean
 *                  description: Indicador de inicio de sesión de Google del usuario
 *          required:
 *              - nombre
 *              - email
 *              - password
 *          example:
 *              nombre: "Juan Pérez"
 *              email: "juan@example.com"
 *              password: "contraseña123"
 *              estado: true
 *              googleSignIn: false
 */

/**
 * @swagger
 * /api/usuarios/:
 *  get:
 *      summary: Obtener todos los usuarios
 *      tags: [Usuarios]
 *      responses:
 *          200:
 *              description: Lista de todos los usuarios
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Usuario'
 */

/**
 * @swagger
 * /api/usuarios/{id}:
 *  get:
 *      summary: Obtener un usuario por ID
 *      tags: [Usuarios]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *                type: string
 *            required: true
 *            description: ID del usuario
 *      responses:
 *          200:
 *              description: Usuario encontrado
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Usuario'
 *          404:
 *              description: Usuario no encontrado
 */

/**
 * @swagger
 * /api/usuarios/:
 *  post:
 *      summary: Crear un nuevo usuario
 *      tags: [Usuarios]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Usuario'
 *      responses:
 *          200:
 *              description: Nuevo usuario creado
 */

/**
 * @swagger
 * /api/usuarios/{id}:
 *  put:
 *      summary: Actualizar un usuario por ID
 *      tags: [Usuarios]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *                type: string
 *            required: true
 *            description: ID del usuario
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Usuario'
 *      responses:
 *          200:
 *              description: Usuario actualizado
 *          404:
 *              description: Usuario no encontrado
 */

/**
 * @swagger
 * /api/usuarios/{id}:
 *  delete:
 *      summary: Eliminar un usuario por ID
 *      tags: [Usuarios]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *                type: string
 *            required: true
 *            description: ID del usuario
 *      responses:
 *          200:
 *              description: Usuario eliminado
 *          404:
 *              description: Usuario no encontrado
 */

/**
 * @swagger
 * /api/usuarios/change/{id}:
 *  delete:
 *      summary: Cambiar el estado de un usuario por ID
 *      tags: [Usuarios]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *                type: string
 *            required: true
 *            description: ID del usuario
 *      responses:
 *          200:
 *              description: Estado del usuario cambiado
 *          404:
 *              description: Usuario no encontrado
 */


module.exports = router