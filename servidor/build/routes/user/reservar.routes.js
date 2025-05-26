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

//Crear reserva desde la Página de Habitación hasta el Pago confirmado de esta.
router.post('/booking/create', [_authjwt.refreshToken, _authjwt.verifyToken], reservactrl.bookingToPaying); // Crea reserva
router.get('/booking/summary', [_authjwt.refreshToken, _authjwt.verifyToken], reservactrl.bookingSumamry); // Resumen de la reserva en transacción
router.post('/booking/confirm', [_authjwt.refreshToken, _authjwt.verifyToken], reservactrl.bookingPay); // Pago de reserva
var _default = exports["default"] = router;