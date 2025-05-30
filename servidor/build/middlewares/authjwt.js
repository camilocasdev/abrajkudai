"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = exports.refreshToken = exports.isUsuario = exports.isEmpleado = exports.isAdminOrEmpleado = exports.isAdmin = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _user = _interopRequireDefault(require("../models/user"));
var _role = _interopRequireDefault(require("../models/role"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var refreshToken = exports.refreshToken = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res, next) {
    var accessCookie, tookieCookie, accessTookieData, COOKIE_CFG, token, aToken, _token, tookieCookieData, current, left, _token2, _aToken;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          accessCookie = req.cookies['accessToken'];
          tookieCookie = req.cookies['Tookie'];
          if (!(!accessCookie && !tookieCookie || !accessCookie)) {
            _context.next = 5;
            break;
          }
          return _context.abrupt("return", next());
        case 5:
          //PARA ESTA PARTE HAY QUE APRENDER A USAR SNIPPETS O COMO SE LLAMEN (si valen la pena usarlos acá)
          accessTookieData = _jsonwebtoken["default"].decode(accessCookie, process.env.SECRET_KEY);
          COOKIE_CFG = {
            path: process.env.COOKIE_CONFIG_ENV,
            secure: process.env.COOKIE_CFG_SECURE,
            httpOnly: process.env.COOKIE_CFG_HTTPONLY,
            samesite: process.env.COOKIE_CFG_SAME_SITE
          };
          if (!tookieCookie) {
            if (accessTookieData.refresh === true) {
              token = _jsonwebtoken["default"].sign({
                id: accessTookieData.id
              }, process.env.SECRET_KEY, {
                expiresIn: parseInt(process.env.EXPIRE_TOKEN_Tookie)
              });
              res.cookie('Tookie', token, _objectSpread(_objectSpread({}, COOKIE_CFG), {}, {
                maxAge: parseInt(process.env.EXPIRE_COOKIE_Tookie)
              }));
              aToken = _jsonwebtoken["default"].sign({
                id: accessTookieData.id,
                refresh: true
              }, process.env.SECRET_KEY, {
                expiresIn: parseInt(process.env.EXPIRE_TOKEN_accessToken)
              });
              res.cookie('accessToken', aToken, _objectSpread(_objectSpread({}, process.env.COOKIE_CFG), {}, {
                maxAge: parseInt(process.env.EXPIRE_COOKIE_accessToken)
              }));
              req.cookies.Tookie = token;
            } else if (accessCookie) {
              _token = _jsonwebtoken["default"].sign({
                id: accessTookieData.id
              }, process.env.SECRET_KEY, {
                expiresIn: parseInt(process.env.EXPIRE_TOKEN_Tookie)
              });
              res.cookie('Tookie', _token, _objectSpread(_objectSpread({}, COOKIE_CFG), {}, {
                maxAge: parseInt(process.env.EXPIRE_COOKIE_Tookie)
              }));
              req.cookies.Tookie = _token;
              //Acá no se renueva el token de funciones porque el refresh != true
            }
          } else {
            tookieCookieData = _jsonwebtoken["default"].decode(tookieCookie, process.env.SECRET_KEY);
            current = new Date();
            left = (tookieCookieData.exp - current.getTime() / 1000) / 60;
            if (left < 15 || !tookieCookie) {
              console.log('Renovacion previa a la caducidad');
              _token2 = _jsonwebtoken["default"].sign({
                id: tookieCookieData.id
              }, process.env.SECRET_KEY, {
                expiresIn: parseInt(process.env.EXPIRE_TOKEN_Tookie)
              });
              res.cookie('Tookie', _token2, _objectSpread(_objectSpread({}, COOKIE_CFG), {}, {
                maxAge: parseInt(process.env.EXPIRE_COOKIE_Tookie)
              }));
              if (accessTookieData.refresh === true) {
                _aToken = _jsonwebtoken["default"].sign({
                  id: accessTookieData.id,
                  refresh: true
                }, process.env.SECRET_KEY, {
                  expiresIn: parseInt(process.env.EXPIRE_TOKEN_accessToken)
                });
                res.cookie('accessToken', _aToken, _objectSpread(_objectSpread({}, COOKIE_CFG), {}, {
                  maxAge: parseInt(process.env.EXPIRE_COOKIE_accessToken)
                }));
              }
            }
          }
          next();
          _context.next = 15;
          break;
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          res.status(402).json({
            msg: "Error"
          });
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 11]]);
  }));
  return function refreshToken(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var verifyToken = exports.verifyToken = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res, next) {
    var token, decoded, usuario;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.prev = 1;
          _context2.next = 4;
          return req.cookies['Tookie'];
        case 4:
          token = _context2.sent;
          _context2.next = 10;
          break;
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](1);
          return _context2.abrupt("return", res.status(401).json({
            error: true,
            msg: 'No hay token, por favor inicia sesión',
            redirect: '/signin?error=not%20logged'
          }));
        case 10:
          decoded = _jsonwebtoken["default"].verify(token, process.env.SECRET_KEY); //Verifica el token
          if (decoded) {
            _context2.next = 13;
            break;
          }
          return _context2.abrupt("return", res.status(401).json({
            msg: "not decoded"
          }));
        case 13:
          _context2.next = 15;
          return _user["default"].findById(decoded.id, {
            contrasena: 0
          });
        case 15:
          usuario = _context2.sent;
          if (usuario) {
            _context2.next = 18;
            break;
          }
          return _context2.abrupt("return", res.status(404).json({
            error: true,
            message: 'Token sin usuario asociado...',
            redirect: '/signin?error=user%20not%20found'
          }));
        case 18:
          next();
          _context2.next = 24;
          break;
        case 21:
          _context2.prev = 21;
          _context2.t1 = _context2["catch"](0);
          res.status(404).json({
            error: true,
            msg: 'Error al autenticar el token',
            redirect: '/signin?error=invalid%20token'
          });
        case 24:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 21], [1, 7]]);
  }));
  return function verifyToken(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
var isAdmin = exports.isAdmin = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res, next) {
    var decoded, user, role, i;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          decoded = _jsonwebtoken["default"].verify(req.cookies['Tookie'], process.env.SECRET_KEY);
          _context3.next = 3;
          return _user["default"].findById(decoded.id);
        case 3:
          user = _context3.sent;
          _context3.next = 6;
          return _role["default"].find({
            _id: user.role
          });
        case 6:
          role = _context3.sent;
          i = 0;
        case 8:
          if (!(i < role.length)) {
            _context3.next = 14;
            break;
          }
          if (!(role[i].nombre === "admin")) {
            _context3.next = 11;
            break;
          }
          return _context3.abrupt("return", next());
        case 11:
          i++;
          _context3.next = 8;
          break;
        case 14:
          return _context3.abrupt("return", res.status(403).json({
            message: "Requiere perfil de administrador"
          }));
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function isAdmin(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();
var isUsuario = exports.isUsuario = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res, next) {
    var user, role, i;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return _user["default"].findById(req.UsuarioId);
        case 2:
          user = _context4.sent;
          console.log("isEmpleado verifying...");
          _context4.next = 6;
          return _role["default"].find({
            _id: {
              $in: user.role
            }
          });
        case 6:
          role = _context4.sent;
          i = 0;
        case 8:
          if (!(i < role.length)) {
            _context4.next = 15;
            break;
          }
          if (!(role[i].nombre === "usuario")) {
            _context4.next = 12;
            break;
          }
          next();
          return _context4.abrupt("return");
        case 12:
          i++;
          _context4.next = 8;
          break;
        case 15:
          return _context4.abrupt("return", res.status(403).json({
            message: "Error de lógica: Requiere perfil de Usuario"
          }));
        case 16:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function isUsuario(_x0, _x1, _x10) {
    return _ref4.apply(this, arguments);
  };
}();
var isEmpleado = exports.isEmpleado = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res, next) {
    var user, role, i;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return _user["default"].findById(req.UsuarioId);
        case 2:
          user = _context5.sent;
          _context5.next = 5;
          return _role["default"].find({
            _id: {
              $in: user.role
            }
          });
        case 5:
          role = _context5.sent;
          i = 0;
        case 7:
          if (!(i < role.length)) {
            _context5.next = 14;
            break;
          }
          if (!(role[i].nombre === "empleado")) {
            _context5.next = 11;
            break;
          }
          next();
          return _context5.abrupt("return");
        case 11:
          i++;
          _context5.next = 7;
          break;
        case 14:
          return _context5.abrupt("return", res.status(403).json({
            message: "Requiere perfil de empleado"
          }));
        case 15:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function isEmpleado(_x11, _x12, _x13) {
    return _ref5.apply(this, arguments);
  };
}();

//[MEJORAR] Trabajar en hacer verificaciones individuales y no combinadas en una función...

var isAdminOrEmpleado = exports.isAdminOrEmpleado = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res, next) {
    var tokenData, user, roles, i;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          tokenData = _jsonwebtoken["default"].decode(req.cookies['Tookie'], process.env.SECRET_KEY);
          _context6.next = 4;
          return _user["default"].findById(tokenData.id);
        case 4:
          user = _context6.sent;
          _context6.next = 7;
          return _role["default"].find({
            _id: {
              $in: user.role
            }
          });
        case 7:
          roles = _context6.sent;
          i = 0;
        case 9:
          if (!(i < roles.length)) {
            _context6.next = 15;
            break;
          }
          if (!(roles[i].nombre === "admin" || roles[i].nombre === "empleado")) {
            _context6.next = 12;
            break;
          }
          return _context6.abrupt("return", next());
        case 12:
          i++;
          _context6.next = 9;
          break;
        case 15:
          return _context6.abrupt("return", res.status(403).json({
            message: "Requiere perfil de administrador o empleado"
          }));
        case 18:
          _context6.prev = 18;
          _context6.t0 = _context6["catch"](0);
          return _context6.abrupt("return", res.status(500).json({
            message: "Error interno del servidor",
            error: _context6.t0
          }));
        case 21:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 18]]);
  }));
  return function isAdminOrEmpleado(_x14, _x15, _x16) {
    return _ref6.apply(this, arguments);
  };
}();

//REVISAR LAS FUNCIONES SUPERIORES, EL CHEQUEO DE QUE ROL ES SE PUEDE HACER EN UNA SOLA FUNCIÓN