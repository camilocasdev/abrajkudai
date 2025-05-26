"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var usersctrl = _interopRequireWildcard(require("../../controllers/users.controller"));
var _authjwt = require("../../middlewares/authjwt");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var router = (0, _express.Router)();
router.get('/user/get/list', [_authjwt.verifyToken, _authjwt.isAdminOrEmpleado], usersctrl.get_user);
router.get('/user/get/:userId', [_authjwt.verifyToken, _authjwt.isAdminOrEmpleado], usersctrl.get_user_by_id);
router.post('/user/create', [_authjwt.verifyToken, _authjwt.isAdminOrEmpleado], usersctrl.add_user);
router.put('/user/update/:userId', [_authjwt.verifyToken, _authjwt.isAdminOrEmpleado], usersctrl.update_user);
router["delete"]('/user/delete/:userId', [_authjwt.verifyToken, _authjwt.isAdminOrEmpleado], usersctrl.del_user);
var _default = exports["default"] = router;