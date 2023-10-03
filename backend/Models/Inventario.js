const {Schema, model} = require('mongoose')

const inventarioSchema = Schema(
    {
        nombre:{
            type:String,
            required:true,
            trim:true
        },
        cantidad:{
            type:Number,
            required:true,
            trim:true
        },
        proveedor:{
            type:String,
            required:true,
            trim:true
        },
        calidad:{
            type:String,
            required:true,
            trim:true
        }
    }
)


const Inventario = model("Inventario", inventarioSchema, "Inventario")

module.exports = Inventario