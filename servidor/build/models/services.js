"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var serviceSchema = new _mongoose.Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  price: {
    type: Number
  },
  pricing_type: {
    type: String,
    Enum: ['per_person', 'per_days', 'per_reservation']
  },
  status: {
    type: String,
    "enum": ["avaible", "overtaken", "unavaible"]
  },
  roomtype_fe: {
    // fe = foranean entity
    ref: "Roomtype",
    type: _mongoose.Schema.Types.ObjectId
  },
  schedule: {
    type: Date
  }
});
var _default = exports["default"] = (0, _mongoose.model)('Services', serviceSchema);