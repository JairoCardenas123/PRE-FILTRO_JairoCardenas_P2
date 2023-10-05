const Inventario = require('../Models/Inventario.js')

const postInventario =  async (req,res) =>{
    const {nombre,cantidad,proveedor,calidad} = req.body
    try {
        const inventario = new Inventario({nombre,cantidad,proveedor,calidad})
        await inventario.save()
        res.json({
            "message":"Si Sirvio El Post",
            inventario
        })
    } catch (error) {
        res.status(404).json({message:"El error esta en postInventario"})
    }
}

const putInventario = async (req, res)=>{
    const { id } = req.params;
    const { _id, ...resto } = req.body;

    const inventario = await Inventario.findByIdAndUpdate( id, resto, {new:true});
    res.json({
        msg:"Usuario Actualizado",
        inventario : inventario
    });
}

const deleteInventario = async (req,res)=>{
    const {id} = req.params
    try {
        const remove = await Inventario.findByIdAndRemove(id)
        if(!remove){
            return res.status(404).json({message:"No se encontro Inventario"})
        }

        res.json({message:"Inventario borrado correctamente"})
    } catch (error) {
        res.status(404).json({error:"Error en deleteInventario"})    }
}


const obtenerInventario = async(req,res) =>{
    try {
        const result = await Inventario.find().limit(100)
        res.json(result)
    } catch (error) {
        res.status(404).json('No Obtuvo, El problema es del controlador')
    }
}

module.exports = {obtenerInventario, deleteInventario, postInventario,putInventario}