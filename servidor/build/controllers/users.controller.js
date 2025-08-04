function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; var r = _regenerator(), e = r.m(_regeneratorRuntime), t = (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__).constructor; function n(r) { var e = "function" == typeof r && r.constructor; return !!e && (e === t || "GeneratorFunction" === (e.displayName || e.name)); } var o = { "throw": 1, "return": 2, "break": 3, "continue": 3 }; function a(r) { var e, t; return function (n) { e || (e = { stop: function stop() { return t(n.a, 2); }, "catch": function _catch() { return n.v; }, abrupt: function abrupt(r, e) { return t(n.a, o[r], e); }, delegateYield: function delegateYield(r, o, a) { return e.resultName = o, t(n.d, _regeneratorValues(r), a); }, finish: function finish(r) { return t(n.f, r); } }, t = function t(r, _t, o) { n.p = e.prev, n.n = e.next; try { return r(_t, o); } finally { e.next = n.n; } }), e.resultName && (e[e.resultName] = n.v, e.resultName = void 0), e.sent = n.v, e.next = n.n; try { return r.call(this, e); } finally { n.p = e.prev, n.n = e.next; } }; } return (_regeneratorRuntime = function _regeneratorRuntime() { return { wrap: function wrap(e, t, n, o) { return r.w(a(e), t, n, o && o.reverse()); }, isGeneratorFunction: n, mark: r.m, awrap: function awrap(r, e) { return new _OverloadYield(r, e); }, AsyncIterator: _regeneratorAsyncIterator, async: function async(r, e, t, o, u) { return (n(e) ? _regeneratorAsyncGen : _regeneratorAsync)(a(r), e, t, o, u); }, keys: _regeneratorKeys, values: _regeneratorValues }; })(); }
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function _regeneratorKeys(e) { var n = Object(e), r = []; for (var t in n) r.unshift(t); return function e() { for (; r.length;) if ((t = r.pop()) in n) return e.value = t, e.done = !1, e; return e.done = !0, e; }; }
function _regeneratorAsync(n, e, r, t, o) { var a = _regeneratorAsyncGen(n, e, r, t, o); return a.next().then(function (n) { return n.done ? n.value : a.next(); }); }
function _regeneratorAsyncGen(r, e, t, o, n) { return new _regeneratorAsyncIterator(_regenerator().w(r, e, t, o), n || Promise); }
function _regeneratorAsyncIterator(t, e) { function n(r, o, i, f) { try { var c = t[r](o), u = c.value; return u instanceof _OverloadYield ? e.resolve(u.v).then(function (t) { n("next", t, i, f); }, function (t) { n("throw", t, i, f); }) : e.resolve(u).then(function (t) { c.value = t, i(c); }, function (t) { return n("throw", t, i, f); }); } catch (t) { f(t); } } var r; this.next || (_regeneratorDefine2(_regeneratorAsyncIterator.prototype), _regeneratorDefine2(_regeneratorAsyncIterator.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function () { return this; })), _regeneratorDefine2(this, "_invoke", function (t, o, i) { function f() { return new e(function (e, r) { n(t, i, e, r); }); } return r = r ? r.then(f, f) : f(); }, !0); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function _OverloadYield(e, d) { this.v = e, this.k = d; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
import Usuario from "../models/user.js";
import Role from "../models/role.js";
import Reserva from "../models/reserva.js";
import jwt from "jsonwebtoken";
export var get_user = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var usuarios;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Usuario.find();
        case 2:
          usuarios = _context.sent;
          res.status(200).json({
            msg: '¡Consulta realizada exitosamente!',
            data: usuarios
          });
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
export var del_user = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var userId, deleteUser;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          userId = req.params.userId;
          _context2.next = 3;
          return Usuario.findByIdAndDelete(userId);
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
export var get_user_by_id = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var userId, userById;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          userId = req.params.userId;
          _context3.next = 3;
          return Usuario.findById(userId);
        case 3:
          userById = _context3.sent;
          res.status(200).json({
            msg: '¡Usuario consultado exitosamente!',
            data: userById
          });
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
export var add_user = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _req$body, nombre, apellido, contrasena, identificacion, pais, correo, telefono, role, nuevoUsuario, foundRoles, defaultRole, _defaultRole, emailFound, usuarioGuardado;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _req$body = req.body, nombre = _req$body.nombre, apellido = _req$body.apellido, contrasena = _req$body.contrasena, identificacion = _req$body.identificacion, pais = _req$body.pais, correo = _req$body.correo, telefono = _req$body.telefono, role = _req$body.role;
          _context4.t0 = Usuario;
          _context4.t1 = nombre;
          _context4.t2 = apellido;
          _context4.next = 6;
          return Usuario.encryptPassword(contrasena);
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
          return Role.find({
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
          return Role.findOne({
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
          return Role.findOne({
            nombre: 'usuario'
          });
        case 28:
          _defaultRole = _context4.sent;
          nuevoUsuario.role = [_defaultRole._id];
        case 30:
          _context4.next = 32;
          return Usuario.findOne({
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
          jwt.sign({
            id: usuarioGuardado._id
          }, process.env.SECRET_KEY, {
            expiresIn: 864000 //24 Horas
          });
          res.status(201).json({
            msg: '¡Usuario creado exitosamente!',
            created: usuarioGuardado
          });
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
export var update_user = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var actualizarUsuario;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Usuario.findByIdAndUpdate(req.params.userId, req.body, {
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
          res.status(200).json({
            msg: '¡Usuario modificado exitosamente!',
            updated: actualizarUsuario
          });
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
export var profileData = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var token, decoded, usuario, reservas, confirmedBooking;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          token = req.cookies['Tookie'];
          decoded = jwt.verify(token, process.env.SECRET_KEY);
          _context6.next = 5;
          return Usuario.findById(decoded.id, {
            contrasena: 0
          });
        case 5:
          usuario = _context6.sent;
          _context6.next = 8;
          return Reserva.find({
            usuario: decoded.id
          }).sort({
            createdAt: -1
          }).populate({
            path: 'habitacion',
            model: 'Room'
          }).populate({
            path: 'tipo',
            model: 'Roomtype'
          });
        case 8:
          reservas = _context6.sent;
          _context6.next = 11;
          return Reserva.find({
            usuario: decoded.id,
            estado: 'Pagado'
          }).sort({
            createdAt: -1
          }).populate({
            path: 'habitacion',
            model: 'Room'
          }).populate({
            path: 'tipo',
            model: 'Roomtype'
          });
        case 11:
          confirmedBooking = _context6.sent;
          res.status(200).json({
            error: false,
            userData: usuario,
            reservasData: reservas
          });
          _context6.next = 19;
          break;
        case 15:
          _context6.prev = 15;
          _context6.t0 = _context6["catch"](0);
          console.log(_context6.t0);
          return _context6.abrupt("return", res.status(401).json({
            error: true,
            message: 'Error al autenticar el token',
            redirect: '/signin?error=invalid_token'
          }));
        case 19:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 15]]);
  }));
  return function profileData(_x1, _x10) {
    return _ref6.apply(this, arguments);
  };
}();
export var logout = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          res.clearCookie('Tookie');
          res.clearCookie('accessToken');
          res.status(200).json({
            msg: 'Sesión cerrada',
            redirect: '/'
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
export var newPassword = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var coded, codedParams, data, _newPassword, updatePassword;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          coded = req.cookies['rupc'];
          if (coded) {
            _context8.next = 9;
            break;
          }
          codedParams = req.query.t;
          if (codedParams) {
            _context8.next = 8;
            break;
          }
          return _context8.abrupt("return", res.status(401).json({
            error: true,
            msg: 'Sin datos disponibles, realice el proceso nuevamente',
            redirect: '/forgotpassword?error=no%20data%20avaible'
          }));
        case 8:
          coded = codedParams;
        case 9:
          data = jwt.verify(coded, process.env.SECRET_KEY);
          _newPassword = req.body.newPassword;
          _context8.t0 = Usuario;
          _context8.t1 = {
            _id: data.id
          };
          _context8.next = 15;
          return Usuario.encryptPassword(_newPassword);
        case 15:
          _context8.t2 = _context8.sent;
          _context8.t3 = {
            contrasena: _context8.t2
          };
          _context8.t4 = {
            "new": true
          };
          _context8.next = 20;
          return _context8.t0.findOneAndUpdate.call(_context8.t0, _context8.t1, _context8.t3, _context8.t4);
        case 20:
          updatePassword = _context8.sent;
          res.status(200).json({
            msg: 'Contraseña cambiada correctamente',
            error: false,
            redirect: '/signin'
          });
          _context8.next = 27;
          break;
        case 24:
          _context8.prev = 24;
          _context8.t5 = _context8["catch"](0);
          res.status(500).json("Server Error");
        case 27:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 24]]);
  }));
  return function newPassword(_x13, _x14) {
    return _ref8.apply(this, arguments);
  };
}();
export var updateAccountData = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var token, user, _req$body2, nombre, apellido, pais, identificacion, contrasena, correo, telefono, updateUserData;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          token = req.cookies['Tookie'];
          user = jwt.decode(token);
          _req$body2 = req.body, nombre = _req$body2.nombre, apellido = _req$body2.apellido, pais = _req$body2.pais, identificacion = _req$body2.identificacion, contrasena = _req$body2.contrasena, correo = _req$body2.correo, telefono = _req$body2.telefono;
          _context9.next = 6;
          return Usuario.findByIdAndUpdate(user.id, {
            nombre: nombre,
            apellido: apellido,
            pais: pais,
            identificacion: identificacion,
            contrasena: contrasena,
            correo: correo,
            telefono: telefono
          }, {
            "new": true
          });
        case 6:
          updateUserData = _context9.sent;
          res.status(200).json({
            error: false,
            msg: "¡Usuario actualizado exitosamente!",
            userData: updateUserData
          });
          _context9.next = 14;
          break;
        case 10:
          _context9.prev = 10;
          _context9.t0 = _context9["catch"](0);
          console.log(_context9.t0);
          res.status(500).json({
            error: true,
            msg: 'Internal Server Error'
          });
        case 14:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 10]]);
  }));
  return function updateAccountData(_x15, _x16) {
    return _ref9.apply(this, arguments);
  };
}();
export var deleteAccount = /*#__PURE__*/function () {
  var _ref0 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee0(req, res) {
    var token, user, deleteUser;
    return _regeneratorRuntime().wrap(function _callee0$(_context0) {
      while (1) switch (_context0.prev = _context0.next) {
        case 0:
          _context0.prev = 0;
          token = req.cookies;
          user = jwt.decode(token === null || token === void 0 ? void 0 : token.Tookie);
          _context0.next = 5;
          return Usuario.findByIdAndDelete(user.id);
        case 5:
          deleteUser = _context0.sent;
          Object.keys(token).forEach(function (key) {
            res.clearCookie(key);
          });
          res.status(200).json({
            error: false,
            msg: "¡Usuario eliminado exitosamente!",
            redirect: '/'
          });
          _context0.next = 14;
          break;
        case 10:
          _context0.prev = 10;
          _context0.t0 = _context0["catch"](0);
          console.log(_context0.t0);
          res.status(500).json({
            error: true,
            msg: 'Internal Server Error'
          });
        case 14:
        case "end":
          return _context0.stop();
      }
    }, _callee0, null, [[0, 10]]);
  }));
  return function deleteAccount(_x17, _x18) {
    return _ref0.apply(this, arguments);
  };
}();