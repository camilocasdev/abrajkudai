"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var servicesctrl = _interopRequireWildcard(require("../../controllers/services.controller"));
var _authjwt = require("../../middlewares/authjwt");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var router = (0, _express.Router)();
router.post('/services/create', [_authjwt.refreshToken, _authjwt.verifyToken, _authjwt.isAdminOrEmpleado], servicesctrl.serviceCreate);
router.get('/services/get/list', [_authjwt.refreshToken, _authjwt.verifyToken, _authjwt.isAdminOrEmpleado], servicesctrl.servicesList);
router.get('/services/get/:serviceId', [_authjwt.refreshToken, _authjwt.verifyToken, _authjwt.isAdminOrEmpleado], servicesctrl.serviceById);
router.put('/services/update/:serviceId', [_authjwt.refreshToken, _authjwt.verifyToken, _authjwt.isAdminOrEmpleado], servicesctrl.serviceUpdate);
router["delete"]('/services/delete/:serviceId', [_authjwt.refreshToken, _authjwt.verifyToken, _authjwt.isAdminOrEmpleado], servicesctrl.serviceDelete);
var _default = exports["default"] = router;