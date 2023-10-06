

const express = require("express");
const cors = require("cors");
const swaggerUI =  require ('swagger-ui-express');
const swaggerSpec = require ('../swaggerConfig.js');
const routeClientes = require("../routes/clientes.routes.js")
const routeEmpleados = require("../routes/empleados.routes.js")
const routeProyecto = require('../routes/proyectos.routes.js')
const routeUsuarios = require('../routes/usuarios.routes.js')
const routeInventario = require('../routes/inventario.routes.js')
const routeEmpresas = require('../routes/empresas.routes.js')

class Server{


    constructor(){
        this.app = express();
        
        this.port = process.env.PORT;
        this.clientesPath = "/api/Clientes"
        this.empleadosPath = "/api/Empleados"
        this.proyectosPath = "/api/Proyectos"
        this.usuariosPath = "/api/Usuarios"
        this.inventarioPath = "/api/Inventario"
        this.empresasPath = "/api/Empresas"


        // ! Middleware
        this.middlewares();
 

        //! Routes
        this.routes();
    }

    middlewares(){

        //! Cors
        this.app.use(cors());

        // ? PUBLIC DIRECTORY
        this.app.use(express.static('public'));

        //! EXPRESS JSON
        this.app.use(express.json());

    }

    routes(){
        this.app.use(this.clientesPath,routeClientes)
        this.app.use(this.empleadosPath, routeEmpleados)
        this.app.use(this.proyectosPath, routeProyecto)
        this.app.use(this.usuariosPath, routeUsuarios)
        this.app.use(this.inventarioPath, routeInventario)
        this.app.use(this.empresasPath,routeEmpresas)
        this.app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server: ${this.port} `);
        })
    }
}


module.exports = Server;

