const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Clientes',
      version: '1.0.0',
      description: 'Una API para gestionar clientes',
    },
  },
  apis: ['./routes/clientes.routes.js'], // Ruta al archivo de rutas de tus clientes
};

const specs = swaggerJsdoc(options);

module.exports = specs;
