import { Schema, model } from "mongoose";
var reserva = new Schema({
  usuario: {
    rel: 'Usuario',
    type: Schema.Types.ObjectId
  },
  habitacion: {
    rel: 'Room',
    type: Schema.Types.ObjectId
  },
  tipo: {
    rel: 'Roomtype',
    type: Schema.Types.ObjectId
  },
  fechaInicio: {
    type: Date
  },
  fechaHasta: {
    type: String
  },
  cantidad: {
    type: Number
  },
  dias: {
    type: Number
  },
  total: {
    type: Number,
    require: true
  },
  estado: {
    type: String,
    require: true,
    "enum": ['Pendiente', 'Cancelado', 'Pagado']
  },
  servicios: [{
    type: String
  }]
}, {
  timestamps: true,
  versionKey: false
});
export default model('Reserva', reserva);