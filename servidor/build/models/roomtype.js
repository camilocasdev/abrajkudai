"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var roomType = new _mongoose.Schema({
  nombre: {
    type: String,
    unique: true,
    required: true
  },
  precio: {
    type: Number,
    required: true
  },
  capacidad: {
    type: Number,
    required: true
  },
  descripcion: {
    type: String
  }
}, {
  timestamps: false,
  versionkey: false
});
var _default = exports["default"] = (0, _mongoose.model)('Roomtype', roomType);