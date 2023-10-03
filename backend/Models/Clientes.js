const {Schema,model} = require('mongoose');

const clienteSchema = Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    apellido: {
      type: String,
      required: true,
      trim: true,
    },
    fechaNacimiento: {
      type: Date,
      required: true,
    },
    direccion: {
      type: String,
      required: true,
      trim: true,
    },
    celular: {
      type: Number,
      required: true,
      trim: true,
    },
    correoElectronico: {
      type: String,
      required: true,
      trim: true,
    },
    empresa: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);


const Clientes = model('Clientes', clienteSchema, "Clientes");

module.exports = Clientes


