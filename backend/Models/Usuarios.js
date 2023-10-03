const {Schema,model} = require('mongoose')

const usuariosSchema = Schema(
    {
        nombre :{
            type:String,
            required: [true, 'Name is required']
        },
    
        email :{
            type:String,
            required: [true, 'Email is required'],
            unique:true
        }, 
        password :{
            type:String,
            required: [true, 'Password is required']
        },
        estado :{
            type:Boolean,
            default: true
        },
        googleSignIn :{
            type:Boolean,
            default: true
        }
    }
)

const Usuarios = model('Usuarios', usuariosSchema, 'Usuarios')

module.exports = Usuarios