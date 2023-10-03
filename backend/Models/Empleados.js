const {Schema,model} = require('mongoose')

const empleadoSchema = Schema(
    {
        nombre:{
            type:String,
            required:true,
            trim:true
        },
        cargo:{
            type:String,
            required:true,
            trim:true
        },
        salario:{
            type:Number,
            required:true,
            trim:true
        }
    }
)

const Empleados = model("Empleados", empleadoSchema, "Empleados")

module.exports = Empleados