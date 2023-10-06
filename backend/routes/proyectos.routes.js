const express = require('express')
const router = express.Router()
const {obtenerProyecto, postProyectos, deleteProyecto,putUsuarios} = require('../Controllers/Proyectos.controllers.js')

router.get('/', obtenerProyecto)

router.post('/', postProyectos)

router.delete('/:id', deleteProyecto)

router.put('/:id', putUsuarios)

/**
 * @swagger
 * components:
 *  schemas:
 *      Proyecto:
 *          type: object
 *          properties:
 *              nombre:
 *                  type: string
 *                  description: Nombre del proyecto
 *              descripcion:
 *                  type: string
 *                  description: Descripción del proyecto
 *              fechaInicio:
 *                  type: string
 *                  format: date
 *                  description: Fecha de inicio del proyecto
 *              fechaFinalizacion:
 *                  type: string
 *                  format: date
 *                  description: Fecha de finalización del proyecto
 *          required:
 *              - nombre
 *              - descripcion
 *              - fechaInicio
 *              - fechaFinalizacion
 *          example:
 *              nombre: "Proyecto A"
 *              descripcion: "Descripción del Proyecto A"
 *              fechaInicio: "2023-10-06"
 *              fechaFinalizacion: "2023-12-31"
 */

/**
 * @swagger
 * /api/proyectos/:
 *  get:
 *      summary: Obtener todos los proyectos
 *      tags: [Proyectos]
 *      responses:
 *          200:
 *              description: Lista de todos los proyectos
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Proyecto'
 */


/**
 * @swagger
 * /api/proyectos/:
 *  post:
 *      summary: Crear un nuevo proyecto
 *      tags: [Proyectos]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Proyecto'
 *      responses:
 *          200:
 *              description: Nuevo proyecto creado
 */

/**
 * @swagger
 * /api/proyectos/{id}:
 *  put:
 *      summary: Actualizar un proyecto por ID
 *      tags: [Proyectos]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *                type: string
 *            required: true
 *            description: ID del proyecto
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Proyecto'
 *      responses:
 *          200:
 *              description: Proyecto actualizado
 *          404:
 *              description: Proyecto no encontrado
 */

/**
 * @swagger
 * /api/proyectos/{id}:
 *  delete:
 *      summary: Eliminar un proyecto por ID
 *      tags: [Proyectos]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *                type: string
 *            required: true
 *            description: ID del proyecto
 *      responses:
 *          200:
 *              description: Proyecto eliminado
 *          404:
 *              description: Proyecto no encontrado
 */


module.exports = router