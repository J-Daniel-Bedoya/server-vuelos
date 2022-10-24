const mongoose = require("mongoose");

const VuelosScheme = new mongoose.Schema(
  {
    tipoVuelo: {
      type: Boolean
    },
    paisOrigen: {
      type: String
    },
    paisDestino: {
      type: String 
    },
    fechaSalida: {
      type: String
    },
    fechaLlegada: {
      type: String
    },
    cupon: {
      type: Boolean
    },
    totalPersonas: { 
      adultos: {
        type: Number
      }, 
      niños: {
        type: Number
      }, 
      bebes: {
        type: Number
      } 
    }
  },
  {
    timestamps:true, //TODO createAt, updateAt
    versionKey: false
  }
);

module.exports = mongoose.model("vuelos", VuelosScheme)