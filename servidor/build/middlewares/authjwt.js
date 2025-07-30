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
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
import jwt from 'jsonwebtoken';
import Usuario from '../models/user.js';
import Role from '../models/role.js';
export var refreshToken = /*#__PURE__*/function () {
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
          accessTookieData = jwt.decode(accessCookie, process.env.SECRET_KEY);
          COOKIE_CFG = {
            path: process.env.COOKIE_CONFIG_ENV,
            secure: process.env.COOKIE_CFG_SECURE,
            httpOnly: process.env.COOKIE_CFG_HTTPONLY,
            samesite: process.env.COOKIE_CFG_SAME_SITE
          };
          if (!tookieCookie) {
            if (accessTookieData.refresh === true) {
              token = jwt.sign({
                id: accessTookieData.id
              }, process.env.SECRET_KEY, {
                expiresIn: parseInt(process.env.EXPIRE_TOKEN_Tookie)
              });
              res.cookie('Tookie', token, _objectSpread(_objectSpread({}, COOKIE_CFG), {}, {
                maxAge: parseInt(process.env.EXPIRE_COOKIE_Tookie)
              }));
              aToken = jwt.sign({
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
              _token = jwt.sign({
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
            tookieCookieData = jwt.decode(tookieCookie, process.env.SECRET_KEY);
            current = new Date();
            left = (tookieCookieData.exp - current.getTime() / 1000) / 60;
            if (left < 15 || !tookieCookie) {
              console.log('Renovacion previa a la caducidad');
              _token2 = jwt.sign({
                id: tookieCookieData.id
              }, process.env.SECRET_KEY, {
                expiresIn: parseInt(process.env.EXPIRE_TOKEN_Tookie)
              });
              res.cookie('Tookie', _token2, _objectSpread(_objectSpread({}, COOKIE_CFG), {}, {
                maxAge: parseInt(process.env.EXPIRE_COOKIE_Tookie)
              }));
              if (accessTookieData.refresh === true) {
                _aToken = jwt.sign({
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
export var verifyToken = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res, next) {
    var token, decoded, usuario;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.prev = 1;
          token = req.cookies['Tookie'];
          _context2.next = 8;
          break;
        case 5:
          _context2.prev = 5;
          _context2.t0 = _context2["catch"](1);
          return _context2.abrupt("return", res.status(401).json({
            error: true,
            msg: 'No hay token, por favor inicia sesión',
            redirect: '/signin?error=not%20logged'
          }));
        case 8:
          decoded = jwt.verify(token, process.env.SECRET_KEY); //Verifica el token
          if (decoded) {
            _context2.next = 11;
            break;
          }
          return _context2.abrupt("return", res.status(401).json({
            msg: "not decoded"
          }));
        case 11:
          _context2.next = 13;
          return Usuario.findById(decoded.id, {
            contrasena: 0
          });
        case 13:
          usuario = _context2.sent;
          if (usuario) {
            _context2.next = 16;
            break;
          }
          return _context2.abrupt("return", res.status(401).json({
            error: true,
            message: 'Token sin usuario asociado...',
            redirect: '/signin?error=user%20not%20found'
          }));
        case 16:
          next();
          _context2.next = 22;
          break;
        case 19:
          _context2.prev = 19;
          _context2.t1 = _context2["catch"](0);
          res.status(401).json({
            error: true,
            msg: 'Error al autenticar el token',
            redirect: '/signin?error=invalid%20token'
          });
        case 22:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 19], [1, 5]]);
  }));
  return function verifyToken(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
export var isAdmin = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res, next) {
    var decoded, user, role, i;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          decoded = jwt.verify(req.cookies['Tookie'], process.env.SECRET_KEY);
          _context3.next = 3;
          return Usuario.findById(decoded.id);
        case 3:
          user = _context3.sent;
          _context3.next = 6;
          return Role.find({
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
export var isUsuario = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res, next) {
    var user, role, i;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Usuario.findById(req.UsuarioId);
        case 2:
          user = _context4.sent;
          console.log("isEmpleado verifying...");
          _context4.next = 6;
          return Role.find({
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
export var isEmpleado = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res, next) {
    var user, role, i;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Usuario.findById(req.UsuarioId);
        case 2:
          user = _context5.sent;
          _context5.next = 5;
          return Role.find({
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

export var isAdminOrEmpleado = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res, next) {
    var tokenData, user, roles, i;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          tokenData = jwt.decode(req.cookies['Tookie'], process.env.SECRET_KEY);
          _context6.next = 4;
          return Usuario.findById(tokenData.id);
        case 4:
          user = _context6.sent;
          _context6.next = 7;
          return Role.find({
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