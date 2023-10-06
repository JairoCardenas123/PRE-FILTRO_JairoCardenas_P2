const Cliente = require('../Models/Clientes.js');



const postClientes = async (req, res)=>{

    const {nombre, apellido, fechaNacimiento,direccion,celular,correoElectronico,empresa} = req.body;
    const clientes = new Cliente({nombre, apellido, fechaNacimiento, direccion,celular,correoElectronico,empresa});
    // Guardar en MONGODB
    await clientes.save();
    res.json({
        "message":"post api",
        clientes
    })
}

const putClientes = async (req, res)=>{
    const { id } = req.params;

    const { _id, ...resto } = req.body;
    const clientes = await Cliente.findByIdAndUpdate( id, resto, {new:true});

    res.json({
        msg:"Usuario Actualizado",
        clientes : clientes
    });
}



const deleteClientes = async(req,res)=>{
    const {id} = req.params;
    try {
        const remove = await Cliente.findByIdAndRemove(id)
        if(!remove){
            return res.status(404).json({message:"No se encontro Clientes"})
        }
        res.json({message:"Borrado correctamente cliente"})
    } catch (error) {
        res.status(404).json({error:"Fallo en deleteClientes"})
    }
}


const obtenerTodos = async (req,res)=>{
    try {
        const catalogo = await Cliente.find().limit(100); // Limita a 100 resultados
        res.json(catalogo)

    } catch (error) {
        console.log("error");
    }
}
module.exports = {obtenerTodos,postClientes,deleteClientes,putClientes}
