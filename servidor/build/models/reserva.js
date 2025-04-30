"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var reserva = new _mongoose.Schema({
  usuario: {
    rel: 'Usuario',
    type: _mongoose.Schema.Types.ObjectId
  },
  habitacion: {
    rel: 'Room',
    type: _mongoose.Schema.Types.ObjectId
  },
  tipo: {
    rel: 'Roomtype',
    type: _mongoose.Schema.Types.ObjectId
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
var _default = exports["default"] = (0, _mongoose.model)('Reserva', reserva);