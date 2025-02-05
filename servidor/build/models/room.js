"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var roomSchema = new _mongoose.Schema({
  numero: {
    type: String,
    unique: true,
    required: true
  },
  estado: {
    type: String,
    "enum": ['Disponible', 'Ocupado', 'Mantenimiento', 'Limpieza', 'Reservado'],
    "default": 'Disponible'
  },
  roomid: {
    rel: 'Roomtype',
    type: _mongoose.Schema.Types.ObjectId,
    required: true
  }
}, {
  timestamp: true,
  versionkey: false
});

//NO OLVIDAR EL POPULATE PARA TRAER LOS DATOS RELACIONADOS DE OTROS MODELOS
var _default = exports["default"] = (0, _mongoose.model)('Room', roomSchema);