"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var roomSchema = new _mongoose.Schema({
  codigo: {
    type: String
  },
  tipo: {
    type: String
  },
  estado: {
    type: String
  },
  capacidad: {
    type: Number
  },
  precio: {
    type: Number
  }
}, {
  timestamp: true,
  versionkey: false
});
var _default = exports["default"] = (0, _mongoose.model)('Room', roomSchema);