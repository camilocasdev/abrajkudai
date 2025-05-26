"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update_user = exports.profileData = exports.newPassword = exports.logout = exports.get_user_by_id = exports.get_user = exports.del_user = exports.add_user = void 0;
var _user = _interopRequireDefault(require("../models/user"));
var _role = _interopRequireDefault(require("../models/role"));
var _reserva = _interopRequireDefault(require("../models/reserva"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var get_user = exports.get_user = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var usuarios;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _user["default"].find();
        case 2:
          usuarios = _context.sent;
          res.status(201).json(usuarios);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function get_user(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var del_user = exports.del_user = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var userId, deleteUser;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          userId = req.params.userId;
          _context2.next = 3;
          return _user["default"].findByIdAndDelete(userId);
        case 3:
          deleteUser = _context2.sent;
          res.status(204).json(deleteUser);
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function del_user(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var get_user_by_id = exports.get_user_by_id = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var userId, userById;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          userId = req.params.userId;
          _context3.next = 3;
          return _user["default"].findById(userId);
        case 3:
          userById = _context3.sent;
          res.status(201).json(userById);
        case 5:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function get_user_by_id(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var add_user = exports.add_user = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _req$body, nombre, apellido, contrasena, identificacion, pais, correo, telefono, role, nuevoUsuario, foundRoles, defaultRole, _defaultRole, emailFound, usuarioGuardado;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _req$body = req.body, nombre = _req$body.nombre, apellido = _req$body.apellido, contrasena = _req$body.contrasena, identificacion = _req$body.identificacion, pais = _req$body.pais, correo = _req$body.correo, telefono = _req$body.telefono, role = _req$body.role;
          _context4.t0 = _user["default"];
          _context4.t1 = nombre;
          _context4.t2 = apellido;
          _context4.next = 6;
          return _user["default"].encryptPassword(contrasena);
        case 6:
          _context4.t3 = _context4.sent;
          _context4.t4 = identificacion;
          _context4.t5 = pais;
          _context4.t6 = correo;
          _context4.t7 = telefono;
          _context4.t8 = role;
          _context4.t9 = {
            nombre: _context4.t1,
            apellido: _context4.t2,
            contrasena: _context4.t3,
            identificacion: _context4.t4,
            pais: _context4.t5,
            correo: _context4.t6,
            telefono: _context4.t7,
            role: _context4.t8
          };
          nuevoUsuario = new _context4.t0(_context4.t9);
          if (!role) {
            _context4.next = 26;
            break;
          }
          _context4.next = 17;
          return _role["default"].find({
            nombre: {
              $in: role
            }
          });
        case 17:
          foundRoles = _context4.sent;
          nuevoUsuario.role = foundRoles.map(function (role) {
            return role._id;
          });
          if (nuevoUsuario.role.includes("usuario")) {
            _context4.next = 24;
            break;
          }
          _context4.next = 22;
          return _role["default"].findOne({
            nombre: 'usuario'
          });
        case 22:
          defaultRole = _context4.sent;
          nuevoUsuario.role.push(defaultRole._id);
        case 24:
          _context4.next = 30;
          break;
        case 26:
          _context4.next = 28;
          return _role["default"].findOne({
            nombre: 'usuario'
          });
        case 28:
          _defaultRole = _context4.sent;
          nuevoUsuario.role = [_defaultRole._id];
        case 30:
          _context4.next = 32;
          return _user["default"].findOne({
            correo: correo
          });
        case 32:
          emailFound = _context4.sent;
          if (!emailFound) {
            _context4.next = 35;
            break;
          }
          return _context4.abrupt("return", res.status(400).json({
            msg: 'Correo ya existe'
          }));
        case 35:
          _context4.next = 37;
          return nuevoUsuario.save();
        case 37:
          usuarioGuardado = _context4.sent;
          _jsonwebtoken["default"].sign({
            id: usuarioGuardado._id
          }, process.env.SECRET_KEY, {
            expiresIn: 864000 //24 Horas
          });
          res.status(200).json(usuarioGuardado);
        case 40:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function add_user(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var update_user = exports.update_user = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var actualizarUsuario;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _user["default"].findByIdAndUpdate(req.params.userId, req.body, {
            "new": true
          });
        case 3:
          actualizarUsuario = _context5.sent;
          if (actualizarUsuario) {
            _context5.next = 6;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            msg: 'Usuario no encontrado'
          }));
        case 6:
          res.status(200).json(actualizarUsuario);
          _context5.next = 13;
          break;
        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);
          res.status(500).json({
            msg: 'Error al actualizar el usuario'
          });
        case 13:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 9]]);
  }));
  return function update_user(_x9, _x0) {
    return _ref5.apply(this, arguments);
  };
}();
var profileData = exports.profileData = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var token, decoded, usuario, reservas;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          console.log('profileData');
          _context6.prev = 1;
          token = req.cookies['Tookie'];
          decoded = _jsonwebtoken["default"].verify(token, process.env.SECRET_KEY);
          _context6.next = 6;
          return _user["default"].findById(decoded.id, {
            contrasena: 0
          });
        case 6:
          usuario = _context6.sent;
          _context6.next = 9;
          return _reserva["default"].find({
            usuario: decoded.id
          }).populate({
            path: 'habitacion',
            model: 'Room'
          }).populate({
            path: 'tipo',
            model: 'Roomtype'
          });
        case 9:
          reservas = _context6.sent;
          if (usuario) {
            _context6.next = 12;
            break;
          }
          return _context6.abrupt("return", res.status(404).json({
            message: 'Usuario no encontrado'
          }));
        case 12:
          ;
          res.status(200).json({
            error: false,
            userData: usuario,
            reservasData: reservas
          });
          _context6.next = 20;
          break;
        case 16:
          _context6.prev = 16;
          _context6.t0 = _context6["catch"](1);
          console.log(_context6.t0);
          return _context6.abrupt("return", res.status(401).json({
            error: true,
            message: 'Error al autenticar el token',
            redirect: '/signin?error=invalid_token'
          }));
        case 20:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[1, 16]]);
  }));
  return function profileData(_x1, _x10) {
    return _ref6.apply(this, arguments);
  };
}();
var logout = exports.logout = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          res.clearCookie('Tookie');
          res.clearCookie('accessToken');
          res.status(200).json({
            message: 'Sesión cerrada'
          });
          return _context7.abrupt("return");
        case 4:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function logout(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();
var newPassword = exports.newPassword = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var coded, data;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          coded = req.cookies['rupc'];
          if (!coded) {
            res.status(401).json({
              error: true,
              msg: 'Sin datos disponibles, realice el proceso nuevamente',
              redirect: '/validation/forgotpassword?error=no%20data%20avaible'
            });
          }
          data = _jsonwebtoken["default"].verify(coded, process.env.SECRET_KEY);
          console.log(data);
        case 4:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function newPassword(_x13, _x14) {
    return _ref8.apply(this, arguments);
  };
}();