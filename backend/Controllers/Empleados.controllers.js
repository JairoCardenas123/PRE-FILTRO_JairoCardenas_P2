const Empleado = require('../Models/Empleados.js')

const postEmpleado = async (req,res) =>{
    try {
        const {nombre,cargo,salario} = req.body
        const empleados = await Empleado({nombre,cargo,salario})
        await empleados.save()
        res.json({
            "message":"Se posteo empresa",
            empleados
        })

    } catch (error) {
        
    }
}

const putEmpleados = async (req, res)=>{
      const { id } = req.params;

      const { _id, ...resto } = req.body;
      const empleados = await Empleado.findByIdAndUpdate( id, resto, {new:true});
      res.json({
          msg:"Usuario Actualizado",
          empleados : empleados
      });
  }

const deleteEmpleado = async(req,res)=>{
    const {id} = req.params
    try {
        const remove = await Empleado.findByIdAndRemove(id)
        if(!remove){
            return res.status(404).json({message:"No se encontro empleado"})
        }
        res.json({message:"Se elimino correctamnte"})
    } catch (error) {
        res.status(404).json({error:"Fallo en delete empleado"})
    }
}

const obtenerEmpleados = async (req,res) =>{
    try {
        const empleados = await Empleado.find().limit(1000)
        res.json(empleados)
    } catch (error) {
        res.status(404).json("No salio nada socio")
    }

}

module.exports = {obtenerEmpleados,deleteEmpleado,postEmpleado,putEmpleados}