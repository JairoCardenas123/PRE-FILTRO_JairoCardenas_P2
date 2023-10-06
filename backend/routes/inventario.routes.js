const express = require('express');
const router = express.Router();
const {obtenerInventario, deleteInventario,postInventario,putInventario} = require('../Controllers/Inventario.controllers.js')

router.get('/', obtenerInventario)

router.delete('/:id', deleteInventario)

router.post('/', postInventario)

router.put('/:id', putInventario)

/**
 * @swagger
 * components:
 *  schemas:
 *      Inventario:
 *          type: object
 *          properties:
 *              nombre:
 *                  type: string
 *                  description: Nombre del inventario
 *              cantidad:
 *                  type: number
 *                  description: Cantidad del inventario
 *              proveedor:
 *                  type: string
 *                  description: Proveedor del inventario
 *              calidad:
 *                  type: string
 *                  description: Calidad del inventario
 *          required:
 *              - nombre
 *              - cantidad
 *              - proveedor
 *              - calidad
 *          example:
 *              nombre: "Producto A"
 *              cantidad: 100
 *              proveedor: "Proveedor X"
 *              calidad: "Buena"
 */

/**
 * @swagger
 * /api/inventario/:
 *  get:
 *      summary: Obtener todo el inventario
 *      tags: [Inventario]
 *      responses:
 *          200:
 *              description: Lista de todo el inventario
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Inventario'
 */



/**
 * @swagger
 * /api/inventario/:
 *  post:
 *      summary: Crear un nuevo elemento en el inventario
 *      tags: [Inventario]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Inventario'
 *      responses:
 *          200:
 *              description: Nuevo elemento del inventario creado
 */

/**
 * @swagger
 * /api/inventario/{id}:
 *  put:
 *      summary: Actualizar un elemento del inventario por ID
 *      tags: [Inventario]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *                type: string
 *            required: true
 *            description: ID del elemento del inventario
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Inventario'
 *      responses:
 *          200:
 *              description: Elemento del inventario actualizado
 *          404:
 *              description: Elemento del inventario no encontrado
 */

/**
 * @swagger
 * /api/inventario/{id}:
 *  delete:
 *      summary: Eliminar un elemento del inventario por ID
 *      tags: [Inventario]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *                type: string
 *            required: true
 *            description: ID del elemento del inventario
 *      responses:
 *          200:
 *              description: Elemento del inventario eliminado
 *          404:
 *              description: Elemento del inventario no encontrado
 */



module.exports = router