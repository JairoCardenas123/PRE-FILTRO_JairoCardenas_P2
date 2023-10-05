const Empresas = require('../Models/Empresas.js')

const postEmpresas = async (req,res)=>{
    try {
        const {nombre,direccion,telefono} = req.body;
        const empresa = new Empresas({nombre,direccion,telefono})
        await empresa.save()
        res.json({
            "message":"Se posteo la empressa",
            empresa
        })
    } catch (error) {
        
    }
}


const putEmpresas = async (req, res)=>{
    const { id } = req.params;
    const { _id, ...resto } = req.body;

    const empresas = await Empresas.findByIdAndUpdate( id, resto, {new:true});
    res.json({
        msg:"Usuario Actualizado",
        empresas : empresas
    });
}

const deleteEmpresa = async (req,res)=>{
    const {id} = req.params
    try {
        const remove = await Empresas.findByIdAndRemove(id)
        if(!remove){
            return res.status(404).json({message: 'Empresas not found'})
        }

        res.json({message: 'Empresa Borrada Correctamente'})
    } catch (error) {
        res.status(404).json({erro:"El error esta en deleteEmpresas "})
    }
}


const obtenerEmpresas = async(req,res) =>{
    try {
        const result = await Empresas.find().limit(100)
        res.json(result)
    } catch (error) {
        res.status(404).json("No capto, el error esta en el controlador")
    }
}

module.exports = {obtenerEmpresas,deleteEmpresa,postEmpresas,putEmpresas}