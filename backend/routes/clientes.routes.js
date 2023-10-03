/**
 * @swagger
 * tags:
 *   name: Clientes
 *   description: Operaciones relacionadas con los Clientes
 */

const express = require('express');
const router = express.Router();
const { obtenerTodos, postClientes, deleteClientes } = require('../Controllers/Clientes.controllers.js');

/**
 * @swagger
 * /clientes:   
 *   get:
 *     summary: Obtiene todos los Clientes
 *     tags: [Clientes]
 *     responses:
 *       '200':
 *         description: Lista de Clientes
 */
router.get('/clientes', obtenerTodos);

/**
 * @swagger
 * /clientes:   
 *   post:
 *     summary: Crea un nuevo Clientes
 *     tags: [Clientes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Clientes'
 *     responses:
 *       '200':
 *         description: Cliente creado con éxito
 */
router.post('/clientes', postClientes);

/**
 * @swagger
 * /clientes/{id}:   
 *   delete:
 *     summary: Elimina un cliente por ID
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del cliente a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Cliente eliminado con éxito
 *       '404':
 *         description: No se encontró el cliente
 */
router.delete('/clientes/:id', deleteClientes);

module.exports = router;
