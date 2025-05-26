"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var reservactrl = _interopRequireWildcard(require("../../controllers/reserva.controller.js"));
var _authjwt = require("../../middlewares/authjwt.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var router = (0, _express.Router)();

//Controladores para Empleados (A Implementar)
router.post('/booking/create', [_authjwt.refreshToken, _authjwt.verifyToken, _authjwt.isAdminOrEmpleado], reservactrl.directBookingCreation);
router.get('/booking/get/list', [_authjwt.refreshToken, _authjwt.verifyToken, _authjwt.isAdminOrEmpleado], reservactrl.getReserva);
router.get('/booking/get/:reservaId', [_authjwt.refreshToken, _authjwt.verifyToken, _authjwt.isAdminOrEmpleado], reservactrl.getReservaId); // Operación por ID
router.put('/booking/update/:reservaId', [_authjwt.refreshToken, _authjwt.verifyToken, _authjwt.isAdminOrEmpleado], reservactrl.updateReserva); // Operación por ID
router["delete"]('/booking/delete/:reservaId', [_authjwt.refreshToken, _authjwt.verifyToken, _authjwt.isAdminOrEmpleado], reservactrl.deleteReserva); // Operación por ID
var _default = exports["default"] = router;