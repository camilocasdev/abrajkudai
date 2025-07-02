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
import Reserva from '../models/reserva.js';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import Room from '../models/room.js';
import Roomtype from '../models/roomtype.js';
import { Stripe } from 'stripe';
import { toStripeAmout } from '../utils/math.utils.js';

//  ---------------------------------  FUNCIONES DE USUARIO  ----------------------------------------  //
export var bookingToPaying = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, fechaInicio, fechaHasta, cantidad, habitacion, estado, servicios, token, decoded, room, dayFrom, dayTo, diffms, dias, roomType, total, booking, save, updateRoom, stripe, paymentTry;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, fechaInicio = _req$body.fechaInicio, fechaHasta = _req$body.fechaHasta, cantidad = _req$body.cantidad, habitacion = _req$body.habitacion, estado = _req$body.estado, servicios = _req$body.servicios;
          token = req.cookies['Tookie'];
          decoded = jwt.verify(token, process.env.SECRET_KEY);
          _context.next = 6;
          return Room.findOne({
            roomid: habitacion
          }).sort({
            updatedAt: 1
          });
        case 6:
          room = _context.sent;
          if (!(new Date(fechaInicio) < new Date())) {
            _context.next = 11;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            msg: 'La fecha ingresadas son incorrectas.',
            redirect: '?error=initial%20date%20is%20not%20valid'
          }));
        case 11:
          if (!(new Date(fechaHasta) < new Date())) {
            _context.next = 13;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            msg: 'La fecha ingresadas son incorrectas.',
            redirect: '?error=final%20date%20is%20not%20valid'
          }));
        case 13:
          //Transformamos en fecha el String que nos llega de la base de datos
          dayFrom = new Date(fechaInicio), dayTo = new Date(fechaHasta);
          diffms = Math.abs(dayTo.getTime() - dayFrom.getTime());
          /*--------------------------------------------------------------------------------#
          |  TRANSFORMACIÓN DE FECHAS                                                       |
          |  Con Math.abs forzamos a que el resultado sea positivo                          |                                    |
          |  getTime() hace el calculo de los milisegundos que trascurrieron desde          |
          |  la fecha que ingresamos hasta 1970, con los dos calculos nos da una            |
          |  diferencias de milisegundos, lo que procedemos es a restar esta diferencia     |
          |  y luego multiplicarla, por 1000 para un segundo, por 60 para un minuto, por    |
          |  60 para una hora y luego por 24 para un día, de esta forma nos dan los días.   |
          #________________________________________________________________________________*/
          dias = diffms / (1000 * 60 * 60 * 24); //Sería igual a decir que dividimos por 86.4M 
          //        == diffms / 86400000
          _context.next = 18;
          return Roomtype.findOne({
            _id: habitacion
          });
        case 18:
          roomType = _context.sent;
          total = dias * roomType.precio;
          booking = new Reserva({
            usuario: decoded.id,
            habitacion: room,
            // (1) Habitación guardará el ID de una habitación
            tipo: habitacion,
            // (1)Tipo guardará el tipo de habitación que el usuario desea
            fechaInicio: fechaInicio,
            fechaHasta: fechaHasta,
            cantidad: cantidad,
            //la cantidad maxima se manejara desde el front
            dias: dias,
            total: total,
            estado: estado,
            servicios: servicios
          });
          /*--------------------------------------------------------------------------------#
          |  (1) Corregir la toma de datos desde el front para que quede más claro en la    |
          |   lectura del back, ya que de la manera como esta, pueden confundirse el tipo   |
          |   de ID que se esta tomando.                                                    |
          #________________________________________________________________________________*/
          _context.next = 23;
          return booking.save();
        case 23:
          save = _context.sent;
          _context.next = 26;
          return Room.findOneAndUpdate({
            _id: room._id
          }, {
            estado: estado
          }, {
            "new": true
          });
        case 26:
          updateRoom = _context.sent;
          if (updateRoom) {
            _context.next = 29;
            break;
          }
          return _context.abrupt("return", res.status(404).json({
            msg: 'Habitación no encontrada'
          }));
        case 29:
          stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
          _context.next = 32;
          return stripe.paymentIntents.create({
            amount: toStripeAmout(total),
            currency: 'usd'
          });
        case 32:
          paymentTry = _context.sent;
          res.cookie('tb', {
            bookingId: save._id,
            stripeId: paymentTry.id
          }, {
            expires: new Date(Date.now() + 1 * 2 * 60 * 60 * 1000),
            path: process.env.COOKIE_CONFIG_ENV,
            secure: process.env.COOKIE_CFG_SECURE,
            httpOnly: process.env.COOKIE_CFG_HTTPONLY,
            samesite: process.env.COOKIE_CFG_SAME_SITE
          }); // tb === Temporal Booking
          return _context.abrupt("return", res.status(201).json({
            error: false,
            msg: 'Redirigiendo al pago...',
            redirect: '/pago'
          }));
        case 37:
          _context.prev = 37;
          _context.t0 = _context["catch"](0);
          console.log('Error inesperado: ' + _context.t0);
          res.status(500).json({
            error: true,
            msg: 'Error inesperado: ' + _context.t0
          });
        case 41:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 37]]);
  }));
  return function bookingToPaying(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
export var bookingSumamry = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var token, temporalBooking_Cookie, userId, stripe, booking, user, roomtype, stripeData;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          token = req.cookies['Tookie'];
          temporalBooking_Cookie = req.cookies['tb']; //Id de Reserva (SIN CODIFICACIÓN)
          userId = jwt.verify(token, process.env.SECRET_KEY); // ID DE USUARIO
          stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
          if (!(temporalBooking_Cookie == undefined || userId == undefined)) {
            _context2.next = 7;
            break;
          }
          return _context2.abrupt("return", res.status(401).json({
            error: true,
            msg: 'Error en la toma de datos...',
            redirect: '/404?error=booking%20data%20missing'
          }));
        case 7:
          _context2.next = 9;
          return Reserva.findOne({
            _id: temporalBooking_Cookie.bookingId
          });
        case 9:
          booking = _context2.sent;
          _context2.next = 12;
          return User.findOne({
            _id: userId.id
          });
        case 12:
          user = _context2.sent;
          _context2.next = 15;
          return Roomtype.findOne({
            _id: booking.tipo
          });
        case 15:
          roomtype = _context2.sent;
          _context2.next = 18;
          return stripe.paymentIntents.retrieve(temporalBooking_Cookie.stripeId);
        case 18:
          stripeData = _context2.sent;
          res.status(200).json({
            error: false,
            msg: 'Todo OK!',
            booking: booking,
            room: {
              nombre: roomtype.nombre,
              img: roomtype.imagen
            },
            user: {
              mail: user.correo,
              tel: user.telefono
            },
            stripe: {
              id: stripeData.id,
              cli_secret: stripeData.client_secret
            }
          });
          _context2.next = 26;
          break;
        case 22:
          _context2.prev = 22;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          res.status(500).json({
            error: true,
            msg: "Error Interno Inesperado"
          });
        case 26:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 22]]);
  }));
  return function bookingSumamry(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
export var bookingConfirmed = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var data, booking;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          data = req.cookies['tb'];
          _context3.next = 4;
          return Reserva.findOneAndUpdate({
            _id: data.bookingId
          }, {
            estado: 'Pagado'
          }, {
            "new": true
          });
        case 4:
          booking = _context3.sent;
          /*------------------------------------------------------#
          |    AQUÍ INCLUIR LA LÓGICA DE CREACIÓN DE FACTURAS     |
          #------------------------------------------------------*/

          res.status(200).json({
            msg: '¡Reserva confirmada exitosamente!',
            resumen: booking
          });
          _context3.next = 12;
          break;
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          res.status(500).json({
            msg: 'Internal Server Error',
            redirect: '/perfil'
          });
        case 12:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return function bookingConfirmed(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

//  -------------------------  FUNCIONES DE ADMINISTRADOR Y/O EMPLEADO  ------------------------------  //
export var directBookingCreation = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _req$body2, nombre, apellido, identificacion, telefono, email, fechaInicio, fechaHasta, cantidad, roomTypeId, servicios, cardName, cardNumber, cardExpire, cardCode, userNumber, _ref5, contrasena, codigo, pais, estado, user, room, dayFrom, dayTo, diffms, dias, roomType, total, booking;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _req$body2 = req.body, nombre = _req$body2.nombre, apellido = _req$body2.apellido, identificacion = _req$body2.identificacion, telefono = _req$body2.telefono, email = _req$body2.email, fechaInicio = _req$body2.fechaInicio, fechaHasta = _req$body2.fechaHasta, cantidad = _req$body2.cantidad, roomTypeId = _req$body2.roomTypeId, servicios = _req$body2.servicios, cardName = _req$body2.cardName, cardNumber = _req$body2.cardNumber, cardExpire = _req$body2.cardExpire, cardCode = _req$body2.cardCode, userNumber = _req$body2.userNumber;
          _ref5 = null, contrasena = _ref5.contrasena, codigo = _ref5.codigo, pais = _ref5.pais, estado = _ref5.estado; // codigo in the model by default is null
          _context4.next = 5;
          return new Usuario({
            nombre: nombre,
            apellido: apellido,
            pais: pais,
            identificacion: identificacion,
            telefono: telefono,
            contrasena: contrasena,
            correo: email,
            codigo: codigo,
            role: 'usuario'
          }).save();
        case 5:
          user = _context4.sent;
          _context4.next = 8;
          return Room.findOne({
            roomid: roomTypeId
          }).sort({
            updatedAt: 1
          });
        case 8:
          room = _context4.sent;
          dayFrom = new Date(fechaInicio), dayTo = new Date(fechaHasta);
          diffms = Math.abs(dayTo.getTime() - dayFrom.getTime());
          dias = diffms / (1000 * 60 * 60 * 24); // === divide by 86.4M 
          _context4.next = 14;
          return Roomtype.findOne({
            _id: roomTypeId
          });
        case 14:
          roomType = _context4.sent;
          total = dias * roomType.precio;
          /*  AQUÍ DEBEMOS VERIFICAR EL PAGO DEL USUARIO DIRECTAMENTE; DESPUES SE GUARDA LA RESERVA  #
          |                                                                                          |
          |                                                                                          |
          |                                                                                          |
          # _______________________________________________________________________________________ */
          if (pay.status === 'Paid') {
            estado = 'Pagado';
          } else res.status(403).json({
            msg: 'Pago rechazado'
          });
          booking = new Reserva({
            usuario: user._id,
            habitacion: room,
            tipo: roomTypeId,
            fechaInicio: fechaInicio,
            fechaHasta: fechaHasta,
            cantidad: cantidad,
            dias: dias,
            total: total,
            estado: estado,
            servicios: servicios
          });
          _context4.next = 24;
          break;
        case 20:
          _context4.prev = 20;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);
          res.status(500).json({
            msg: 'Error'
          });
        case 24:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 20]]);
  }));
  return function directBookingCreation(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
export var getReserva = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var reservas;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Reserva.find();
        case 2:
          reservas = _context5.sent;
          if (reservas.length < 1) res.status(200).json('Historial de reservas vacio.');
          res.status(200).json({
            msg: '¡Consulta realizada exitosamente!',
            data: reservas
          });
        case 5:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function getReserva(_x9, _x0) {
    return _ref6.apply(this, arguments);
  };
}();
export var getReservaId = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var reserva;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Reserva.findById(req.params['reservaId']).populate({
            path: 'usuario',
            model: 'Usuario'
          }).populate({
            path: 'tipo',
            model: 'Roomtype'
          }).populate({
            path: 'habitacion',
            model: 'Room'
          });
        case 2:
          reserva = _context6.sent;
          res.status(200).json({
            msg: '¡Habitación consultada exitosamente!',
            data: reserva
          });
        case 4:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function getReservaId(_x1, _x10) {
    return _ref7.apply(this, arguments);
  };
}();
export var updateReserva = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var actualizarReserva;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Reserva.findByIdAndUpdate(req.params['reservaId'], req.body, {
            "new": true
          });
        case 2:
          actualizarReserva = _context7.sent;
          res.status(200).json({
            msg: '¡Habitación modificada exitosamente!',
            updated: actualizarReserva
          });
        case 4:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function updateReserva(_x11, _x12) {
    return _ref8.apply(this, arguments);
  };
}();
export var deleteReserva = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var reservaId, eliminarReserva;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          reservaId = req.params.reservaId;
          _context8.next = 3;
          return Reserva.findByIdAndDelete(reservaId);
        case 3:
          eliminarReserva = _context8.sent;
          res.status(204).json(eliminarReserva);
        case 5:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function deleteReserva(_x13, _x14) {
    return _ref9.apply(this, arguments);
  };
}();

/* Modificar las variables que relacionan al usuario ingresado, con la reserva hecha y los campos de input 
elegidos para hacer la reserva */