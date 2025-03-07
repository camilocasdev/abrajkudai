"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var reserva = new _mongoose.Schema({
  usuario: [{
    rel: 'Usuario',
    type: _mongoose.Schema.Types.ObjectId
  }],
  fecha: {
    type: Date
  },
  hora: {
    type: String
  },
  habitacion: [{
    rel: 'Room',
    type: _mongoose.Schema.Types.ObjectId
  }],
  total: {
    type: Number,
    require: true
  },
  estadoPago: {
    type: String,
    require: true
  }
}, {
  timestamps: true,
  versionKey: false
});
var _default = exports["default"] = (0, _mongoose.model)('Reserva', reserva);