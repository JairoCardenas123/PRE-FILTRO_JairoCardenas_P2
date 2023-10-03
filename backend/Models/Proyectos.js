const {Schema, model} = require('mongoose')

const proyectosSchema = Schema(
    {
        nombre:{
            type:String,
            required:true,
            trim:true
        },
        descripcion:{
            type:String,  
            required:true,
            trim:true
        },
        fechaInicio:{
            type:String,
            required:true,
            trim:true
        },
        fechaFinalizacion:{
            type:String,
            required:true,
            trim:true
        }
    }
)


const Proyectos = model("Proyectos", proyectosSchema, "Proyectos" )

module.exports = Proyectos