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
import Usuario from '../models/user.js';
import jwt from 'jsonwebtoken';
import Role from '../models/role.js';
import nodemailer from 'nodemailer';
import { getRandomInt } from '../utils/math.utils.js';
export var signIn = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var redirect, _req$body, correo, contrasena, keepSession, usuarioEncontrado, matchPass, tokens;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, correo = _req$body.correo, contrasena = _req$body.contrasena, keepSession = _req$body.keepSession;
          _context.next = 4;
          return Usuario.findOne({
            correo: correo
          }).populate("role");
        case 4:
          usuarioEncontrado = _context.sent;
          if (usuarioEncontrado) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return", res.status(404).json({
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
          return Usuario.comparePassword(contrasena, usuarioEncontrado.contrasena);
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
              tokens[i] = jwt.sign({
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
              tokens[i] = jwt.sign({
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
export var signUp = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$body2, nombre, apellido, pais, identificacion, contrasena, correo, telefono, role, nuevoUsuario, foundRoles, defaultRole, _defaultRole, emailFound, identFound, usuarioGuardado;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body2 = req.body, nombre = _req$body2.nombre, apellido = _req$body2.apellido, pais = _req$body2.pais, identificacion = _req$body2.identificacion, contrasena = _req$body2.contrasena, correo = _req$body2.correo, telefono = _req$body2.telefono, role = _req$body2.role;
          _context2.t0 = Usuario;
          _context2.t1 = nombre;
          _context2.t2 = apellido;
          _context2.t3 = pais;
          _context2.t4 = identificacion;
          _context2.next = 8;
          return Usuario.encryptPassword(contrasena);
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
          return Role.find({
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
          return Role.findOne({
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
          return Role.findOne({
            nombre: 'usuario'
          });
        case 28:
          _defaultRole = _context2.sent;
          nuevoUsuario.role = [_defaultRole._id];
        case 30:
          _context2.next = 32;
          return Usuario.findOne({
            correo: correo
          });
        case 32:
          emailFound = _context2.sent;
          if (!emailFound) {
            _context2.next = 35;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            msg: 'Correo ya existe',
            redirect: '/signup?email%20already%20exists'
          }));
        case 35:
          _context2.next = 37;
          return Usuario.findOne({
            identificacion: identificacion
          });
        case 37:
          identFound = _context2.sent;
          if (!identFound) {
            _context2.next = 40;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            msg: 'Identificación ya existe',
            redirect: '/signup?identification%20already%20exists'
          }));
        case 40:
          _context2.next = 42;
          return nuevoUsuario.save();
        case 42:
          usuarioGuardado = _context2.sent;
          jwt.sign({
            id: usuarioGuardado._id
          }, process.env.SECRET_KEY, {
            expiresIn: 864000 //24 Horas
          });
          res.status(201).json({
            msg: 'Registro exitoso.',
            redirect: '/signin'
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
export var forgotPass = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$body3, email, verificationCode, transporter, user, code, userUpdateCode, tokenCode, html, message, _user, _userUpdateCode, coded;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _req$body3 = req.body, email = _req$body3.email, verificationCode = _req$body3.verificationCode;
          if (!(!verificationCode || verificationCode === null)) {
            _context3.next = 25;
            break;
          }
          // VALIDACIÓN DE CONEXIÓN CON EL SERVICIO DE EMAIL
          transporter = nodemailer.createTransport({
            host: "smtp-relay.brevo.com",
            port: 587,
            secure: false,
            // use TLS
            auth: {
              user: "93762e001@smtp-brevo.com",
              pass: "Gv2c83SkabR1hqOM"
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
            }
          });
          _context3.prev = 4;
          _context3.next = 7;
          return Usuario.findOne({
            correo: email
          });
        case 7:
          user = _context3.sent;
          if (!(user === null || !user)) {
            _context3.next = 10;
            break;
          }
          throw 1;
        case 10:
          _context3.next = 15;
          break;
        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](4);
          return _context3.abrupt("return", res.status(401).json({
            error: true,
            msg: "El correo no existe en el sistema."
          }));
        case 15:
          // CREACIÓN DE CÓDIGO Y ENVÍO DE CORREO
          code = getRandomInt(100000, 999999);
          _context3.next = 18;
          return Usuario.findOneAndUpdate({
            _id: user._id
          }, {
            codigo: code
          }, {
            "new": true
          });
        case 18:
          userUpdateCode = _context3.sent;
          tokenCode = jwt.sign({
            id: user._id,
            codigo: code,
            correo: email
          }, process.env.SECRET_KEY, {
            expiresIn: 60 * 30
          });
          html = "<div style=\"font-family: Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; margin: auto;\">\n            <h2 style=\"color: #005087;\">Restablecimiento de contrase\xF1a</h2>\n            <p>Hola,</p>\n            <p>\n                Hemos recibido una solicitud para restablecer la contrase\xF1a de tu cuenta en <strong>Abraj Kudai</strong>.\n            </p>\n            <p>\n                Si has sido t\xFA, tu c\xF3digo de verificaci\xF3n es:\n            </p>\n            <p style=\"font-size: 24px; font-weight: bold; color: #007bff;\">\n                ".concat(code, "\n            </p>\n            <p>\n                O alternativamente, puedes hacer clic en el siguiente enlace:\n            </p>\n            <p>\n                <a href=\"https://www.abrajkudai.com/restorepassword?t=").concat(tokenCode, "\" style=\"color: #007bff;\">\n                https://www.abrajkudai.com/restorepassword?t=").concat(tokenCode, "\n                </a>\n            </p>\n            <p>\n                Este enlace ser\xE1 v\xE1lido por <strong>30 minutos</strong>. Si no realizas el cambio dentro de ese periodo, deber\xE1s solicitar uno nuevo.\n            </p>\n            <p>\n                Si <strong>no solicitaste esta recuperaci\xF3n</strong>, puedes ignorar este mensaje. Tu cuenta seguir\xE1 segura.\n            </p>\n            <p>\n                Gracias por confiar en <strong>Abraj Kudai</strong>. Te esperamos pronto.\n            </p>\n            <p>Atentamente,<br><strong>El equipo de Abraj Kudai</strong></p>\n            <hr style=\"margin-top: 30px;\">\n            <p style=\"font-size: 12px; color: #888;\">\n                Si tienes problemas para hacer clic en el enlace, copia y p\xE9galo en tu navegador.\n            </p>\n            </div>");
          message = {
            from: '"Support Abraj Kudai" <camilo.castillo3090@gmail.com>',
            to: email,
            subject: 'Solicitud de cambio de contraseña de Abraj Kudai',
            text: "Hola, Hemos recibido una solicitud para restablecer la contrase\xF1a de tu cuenta en Abraj Kudai. Si has sido t\xFA, el codigo de verificaci\xF3n es ".concat(code, " o alternativamente clic en el siguiente enlace: https://www.abrajkudai.com/restorepassword?t=").concat(tokenCode, " Este enlace ser\xE1 v\xE1lido por 30 minutos. Si no realizas el cambio dentro de ese periodo, deber\xE1s solicitar uno nuevo. Si no has solicitado esta recuperaci\xF3n, puedes ignorar este mensaje. Tu cuenta seguir\xE1 segura. Gracias por confiar en Abraj Kudai. Te esperamos pronto. Atentamente, El equipo de Abraj Kudai"),
            html: html
          };
          transporter.sendMail(message, function (err, info) {
            if (err) {
              console.log('Error occurred. ' + err.message);
              return process.exit(1);
            }

            //console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            res.status(200).json({
              next: true,
              msg: "Clear"
            });
          });
          _context3.next = 38;
          break;
        case 25:
          _context3.next = 27;
          return Usuario.findOne({
            correo: email
          });
        case 27:
          _user = _context3.sent;
          if (!(_user.codigo === parseInt(verificationCode))) {
            _context3.next = 37;
            break;
          }
          _context3.next = 31;
          return Usuario.findOneAndUpdate({
            correo: email
          }, {
            codigo: null
          }, {
            "new": true
          });
        case 31:
          _userUpdateCode = _context3.sent;
          coded = jwt.sign({
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
    }, _callee3, null, [[4, 12]]);
  }));
  return function forgotPass(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();