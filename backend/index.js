const dotenv = require('dotenv')
const conectarDB = require('./config/config.js')
const Server = require('./Models/Server.js')

dotenv.config();
const server = new Server();

conectarDB();

server.listen()

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const specs = require('./swagger');

const app = express();
const port = process.env.PORT || 3001;

// ... (configuración de tu aplicación)

// Agrega Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// ... (rutas de tu aplicación)

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

