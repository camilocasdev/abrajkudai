"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signUp = exports.signIn = exports.forgotPass = void 0;
var _user2 = _interopRequireDefault(require("../models/user"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _role = _interopRequireDefault(require("../models/role"));
var _nodemailer = _interopRequireDefault(require("nodemailer"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var signIn = exports.signIn = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var redirect, _req$body, correo, contrasena, keepSession, usuarioEncontrado, matchPass, tokens;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, correo = _req$body.correo, contrasena = _req$body.contrasena, keepSession = _req$body.keepSession;
          _context.next = 4;
          return _user2["default"].findOne({
            correo: correo
          }).populate("role");
        case 4:
          usuarioEncontrado = _context.sent;
          if (usuarioEncontrado) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return", res.status(401).json({
            token: null,
            msg: "Usuario no encontrado",
            redirect: '/signin?error=user%20not%20found'
          }));
        case 7:
          if (usuarioEncontrado.contrasena) {
            _context.next = 9;
            break;
          }
          return _context.abrupt("return", res.status(401).json({
            token: null,
            msg: "Contraseña no encontrada",
            redirect: '/signin?error=password%20not%20found'
          }));
        case 9:
          _context.next = 11;
          return _user2["default"].comparePassword(contrasena, usuarioEncontrado.contrasena);
        case 11:
          matchPass = _context.sent;
          if (matchPass) {
            _context.next = 14;
            break;
          }
          return _context.abrupt("return", res.status(401).json({
            token: null,
            msg: "Contraseña Invalida",
            redirect: '/signin?error=invalid%20password'
          }));
        case 14:
          if (['admin', 'empleado'].includes(usuarioEncontrado.role[0].nombre)) {
            redirect = '/dashboard';
          } else {
            redirect = '/perfil';
          }
          tokens = ['accessToken', 'Tookie'];
          if (keepSession === false) {
            tokens.forEach(function (name, i) {
              var expire;
              if (name === 'Tookie') {
                expire = {
                  maxAge: parseInt(process.env["EXPIRE_COOKIE_".concat(name)])
                };
              }
              tokens[i] = _jsonwebtoken["default"].sign({
                id: usuarioEncontrado._id,
                refresh: keepSession
              }, process.env.SECRET_KEY, {
                expiresIn: parseInt(process.env["EXPIRE_TOKEN_".concat(name)])
              });
              res.cookie(name, tokens[i], _objectSpread({
                path: process.env.COOKIE_CONFIG_ENV,
                secure: process.env.COOKIE_CFG_SECURE,
                httpOnly: process.env.COOKIE_CFG_HTTPONLY,
                samesite: process.env.COOKIE_CFG_SAME_SITE
              }, expire));
            });
          } else {
            tokens.forEach(function (name, i) {
              tokens[i] = _jsonwebtoken["default"].sign({
                id: usuarioEncontrado._id,
                refresh: keepSession
              }, process.env.SECRET_KEY, {
                expiresIn: parseInt(process.env["EXPIRE_TOKEN_".concat(name)])
              });
              res.cookie(name, tokens[i], {
                path: process.env.COOKIE_CONFIG_ENV,
                secure: process.env.COOKIE_CFG_SECURE,
                httpOnly: process.env.COOKIE_CFG_HTTPONLY,
                samesite: process.env.COOKIE_CFG_SAME_SITE,
                maxAge: parseInt(process.env["EXPIRE_COOKIE_".concat(name)])
              });
            });
          }
          return _context.abrupt("return", res.status(200).json({
            msg: "Usuario autenticado, iniciando sesión...",
            token: tokens,
            redirect: redirect
          }));
        case 20:
          _context.prev = 20;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          res.status(500).json('Error al autenticar el usuario');
        case 24:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 20]]);
  }));
  return function signIn(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var signUp = exports.signUp = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$body2, nombre, apellido, pais, identificacion, contrasena, correo, telefono, role, nuevoUsuario, foundRoles, defaultRole, _defaultRole, emailFound, identFound, usuarioGuardado;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body2 = req.body, nombre = _req$body2.nombre, apellido = _req$body2.apellido, pais = _req$body2.pais, identificacion = _req$body2.identificacion, contrasena = _req$body2.contrasena, correo = _req$body2.correo, telefono = _req$body2.telefono, role = _req$body2.role;
          _context2.t0 = _user2["default"];
          _context2.t1 = nombre;
          _context2.t2 = apellido;
          _context2.t3 = pais;
          _context2.t4 = identificacion;
          _context2.next = 8;
          return _user2["default"].encryptPassword(contrasena);
        case 8:
          _context2.t5 = _context2.sent;
          _context2.t6 = correo;
          _context2.t7 = telefono;
          _context2.t8 = role;
          _context2.t9 = {
            nombre: _context2.t1,
            apellido: _context2.t2,
            pais: _context2.t3,
            identificacion: _context2.t4,
            contrasena: _context2.t5,
            correo: _context2.t6,
            telefono: _context2.t7,
            role: _context2.t8
          };
          nuevoUsuario = new _context2.t0(_context2.t9);
          if (!role) {
            _context2.next = 26;
            break;
          }
          _context2.next = 17;
          return _role["default"].find({
            nombre: {
              $in: role
            }
          });
        case 17:
          foundRoles = _context2.sent;
          nuevoUsuario.role = foundRoles.map(function (role) {
            return role._id;
          });
          if (nuevoUsuario.role.includes("usuario")) {
            _context2.next = 24;
            break;
          }
          _context2.next = 22;
          return _role["default"].findOne({
            nombre: 'usuario'
          });
        case 22:
          defaultRole = _context2.sent;
          nuevoUsuario.role.push(defaultRole._id);
        case 24:
          _context2.next = 30;
          break;
        case 26:
          _context2.next = 28;
          return _role["default"].findOne({
            nombre: 'usuario'
          });
        case 28:
          _defaultRole = _context2.sent;
          nuevoUsuario.role = [_defaultRole._id];
        case 30:
          _context2.next = 32;
          return _user2["default"].findOne({
            correo: correo
          });
        case 32:
          emailFound = _context2.sent;
          if (!emailFound) {
            _context2.next = 35;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            msg: 'Correo ya existe'
          }));
        case 35:
          _context2.next = 37;
          return _user2["default"].findOne({
            identificacion: identificacion
          });
        case 37:
          identFound = _context2.sent;
          if (!identFound) {
            _context2.next = 40;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            msg: 'Identificación ya existe'
          }));
        case 40:
          _context2.next = 42;
          return nuevoUsuario.save();
        case 42:
          usuarioGuardado = _context2.sent;
          _jsonwebtoken["default"].sign({
            id: usuarioGuardado._id
          }, process.env.SECRET_KEY, {
            expiresIn: 864000 //24 Horas
          });
          res.status(200).json({
            msg: 'Registro exitoso.',
            usuarioGuardado: usuarioGuardado
          });
        case 45:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function signUp(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var forgotPass = exports.forgotPass = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$body3, email, verificationCode, getRandomInt, transporter, user, code, userUpdateCode, tokenCode, message, _user, _userUpdateCode, coded;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _req$body3 = req.body, email = _req$body3.email, verificationCode = _req$body3.verificationCode;
          if (!(!verificationCode || verificationCode === null)) {
            _context3.next = 25;
            break;
          }
          // CREACIÓN DE CÓDIGO Y ENVÍO DE CORREO
          getRandomInt = function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);
          };
          // VALIDACIÓN DE CONEXIÓN CON EL SERVICIO DE EMAIL
          transporter = _nodemailer["default"].createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            // use TLS
            auth: {
              user: "vern.reinger64@ethereal.email",
              pass: "QEcf8KAY7eck4D8g1W"
            },
            tls: {
              // do not fail on invalid certs
              rejectUnauthorized: false
            }
          });
          transporter.verify(function (error, success) {
            if (error) {
              console.log(error);
              return res.status(501).json({
                error: true,
                msg: "Error interno del servidor."
              });
            } else {
              console.log("Server is ready to take our messages");
              console.log(success);
            }
          });
          _context3.prev = 5;
          _context3.next = 8;
          return _user2["default"].findOne({
            correo: email
          });
        case 8:
          user = _context3.sent;
          if (!(user === null || !user)) {
            _context3.next = 11;
            break;
          }
          throw 1;
        case 11:
          _context3.next = 16;
          break;
        case 13:
          _context3.prev = 13;
          _context3.t0 = _context3["catch"](5);
          return _context3.abrupt("return", res.status(401).json({
            error: true,
            msg: "El correo no existe en el sistema."
          }));
        case 16:
          code = getRandomInt(100000, 999999);
          _context3.next = 19;
          return _user2["default"].findOneAndUpdate({
            _id: user._id
          }, {
            codigo: code
          }, {
            "new": true
          });
        case 19:
          userUpdateCode = _context3.sent;
          tokenCode = _jsonwebtoken["default"].sign({
            codigo: code,
            correo: email
          }, process.env.SECRET_KEY, {
            expiresIn: 60 * 30
          });
          message = {
            from: 'no-reply@abrajkudai.com',
            to: email,
            subject: 'Solicitud de cambio de contraseña de Abraj Kudai',
            text: "Hola, Hemos recibido una solicitud para restablecer la contrase\xF1a de tu cuenta en Abraj Kudai. Si has sido t\xFA, el codigo de verificaci\xF3n es ".concat(code, " o alternativamente clic en el siguiente enlace: https://www.abrajkudai.com/restorepassword?t=").concat(tokenCode, " Este enlace ser\xE1 v\xE1lido por 30 minutos. Si no realizas el cambio dentro de ese periodo, deber\xE1s solicitar uno nuevo. Si no has solicitado esta recuperaci\xF3n, puedes ignorar este mensaje. Tu cuenta seguir\xE1 segura. Gracias por confiar en Abraj Kudai. Te esperamos pronto. Atentamente, El equipo de Abraj Kudai"),
            html: "<p><b>No s\xE9</b> que es esto!</p>"
          };
          transporter.sendMail(message, function (err, info) {
            if (err) {
              console.log('Error occurred. ' + err.message);
              return process.exit(1);
            }

            //console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', _nodemailer["default"].getTestMessageUrl(info));
            res.status(200).json({
              next: true,
              msg: "Clear"
            });
          });
          _context3.next = 38;
          break;
        case 25:
          _context3.next = 27;
          return _user2["default"].findOne({
            correo: email
          });
        case 27:
          _user = _context3.sent;
          if (!(_user.codigo === verificationCode)) {
            _context3.next = 37;
            break;
          }
          _context3.next = 31;
          return _user2["default"].findOneAndUpdate({
            correo: email
          }, {
            codigo: null
          }, {
            "new": true
          });
        case 31:
          _userUpdateCode = _context3.sent;
          coded = _jsonwebtoken["default"].sign({
            id: _user._id
          }, process.env.SECRET_KEY, {
            expiresIn: 1800
          });
          res.cookie('rupc', coded, {
            path: process.env.COOKIE_CONFIG_ENV,
            secure: process.env.COOKIE_CFG_SECURE,
            httpOnly: process.env.COOKIE_CFG_HTTPONLY,
            samesite: process.env.COOKIE_CFG_SAME_SITE,
            maxAge: 1800000
          }); //rupc = Restore User Password Cookie
          res.status(200).json({
            error: false,
            msg: 'Código verificado',
            redirect: '/restorepassword'
          });
          _context3.next = 38;
          break;
        case 37:
          res.status(401).json({
            error: true,
            msg: 'El código ingresado no es valido'
          });
        case 38:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[5, 13]]);
  }));
  return function forgotPass(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();