const {Schema,model} = require('mongoose')

const empresasSchema = Schema(
    {
        nombre:{
            type:String,
            required:true,
            trim:true
        },
        direccion:{
            type:String,
            required:true,
            trim:true
        },
        telefono:{
            type:String,
            required:true,
            trim:true
        }
    }
)

const Empresas = model("Empresas", empresasSchema,"Empresas")

module.exports = Empresas