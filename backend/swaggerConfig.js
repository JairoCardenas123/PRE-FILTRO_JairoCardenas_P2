// swaggerConfig.js

const swaggerJsdoc = require ('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API de GestionEmpresarial',
      version: '3.0.0',
      description: 'Documentación de la API de GestionEmpresarial',
    },
    servers:[
        {
            url: "http://localhost:8001"
        }
    ]
  },
  apis: ['./routes/clientes.routes.js', './routes/empleados.routes.js', './routes/empresas.routes.js', './routes/inventario.routes.js', './routes/proyectos.routes.js','./routes/usuarios.routes.js'], // Rutas de tus controladores
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec