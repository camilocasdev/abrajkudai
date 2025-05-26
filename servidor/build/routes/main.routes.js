"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _reserva = _interopRequireDefault(require("./admin/reserva.routes"));
var _user = _interopRequireDefault(require("./admin/user.routes"));
var _room = _interopRequireDefault(require("./admin/room.routes"));
var _role = _interopRequireDefault(require("./admin/role.routes"));
var _roomtype = _interopRequireDefault(require("./admin/roomtype.routes"));
var _services = _interopRequireDefault(require("./admin/services.routes"));
var _account = _interopRequireDefault(require("./user/account.routes"));
var _auth = _interopRequireDefault(require("./user/auth.routes"));
var _reservar = _interopRequireDefault(require("./user/reservar.routes"));
var _rooms = _interopRequireDefault(require("./public/rooms.routes"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Admin Routes Import

// User Routes Import

// Public Routes Import

var router = (0, _express.Router)();
router.use('/admin', _reserva["default"], _user["default"], _room["default"], _role["default"], _roomtype["default"], _services["default"]);
router.use('/user', _account["default"], _auth["default"], _reservar["default"]);
router.use('/public', _rooms["default"]);
var _default = exports["default"] = router;