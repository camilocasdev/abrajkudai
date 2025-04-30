"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var reservactrl = _interopRequireWildcard(require("../controllers/reserva.controller.js"));
var _authjwt = require("../middlewares/authjwt.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var router = (0, _express.Router)();

//Controladores para Empleados (A Implementar)
router.get('/reserva', [_authjwt.verifyToken, _authjwt.isAdminOrEmpleado], reservactrl.getReserva);
router.get('/reserva/:reservaId', [_authjwt.verifyToken], reservactrl.getReservaId); // Operación por ID
router.put('/reserva/:reservaId', [_authjwt.verifyToken, _authjwt.isAdminOrEmpleado], reservactrl.updateReserva); // Operación por ID
router["delete"]('/reserva/:reservaId', [_authjwt.verifyToken, _authjwt.isAdminOrEmpleado], reservactrl.deleteReserva); // Operación por ID

//Crear reserva desde la Página de Habitación hasta el Pago confirmado de esta.
router.get('/paydata', [_authjwt.verifyToken], reservactrl.payData);
router.post('/booking/create', [_authjwt.verifyToken], reservactrl.bookingToPaying);
router.post('/booking/confirm', [_authjwt.verifyToken], reservactrl.bookingConfirmPay);
var _default = exports["default"] = router;