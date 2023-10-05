const Proyecto = require('../Models/Proyectos.js')

const postProyectos = async (req, res)=>{

    const {nombre, descripcion, fechaInicio,fechaFinalizacion} = req.body;
    const usuario = new Proyecto({nombre, descripcion, fechaInicio,fechaFinalizacion});
    await usuario.save();
    res.json({
        "message":"post api",
        usuario
    })
}

const putUsuarios = async (req, res)=>{
    const { id } = req.params;
    const { _id,...resto } = req.body;
    const usuario = await Proyecto.findByIdAndUpdate( id, resto, {new:true});
    res.json({
        msg:"Usuario Actualizado",
        usuario : usuario
    });
}


const deleteProyecto = async(req, res)=>{
    try {
        const {id} = req.params;
        const remove = await Proyecto.findByIdAndRemove(id);
        if(!remove){
            return res.status(404).json("Usuario no encontrado")
        } 

        res.json({message:"Proyecto borrado correctamente"})
    } catch (error) {
        res.status(404).json({error:"El error esta en deleteProyecto"})
    }
}


const obtenerProyecto = async(req,res) =>{
    try {
        const result = await Proyecto.find().limit(100)
        res.json(result)
    } catch (error) {
        console.log("error");
        res.status(404).json('No Capturo')
    }
}

module.exports = {obtenerProyecto,postProyectos,deleteProyecto,putUsuarios}
