"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var roleSchema = new _mongoose.Schema({
  nombre: String
}, {
  versionKey: false
});
var _default = exports["default"] = (0, _mongoose.model)('Role', roleSchema);