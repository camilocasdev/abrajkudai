"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateReserva = exports.payData = exports.getReservaId = exports.getReserva = exports.deleteReserva = exports.bookingToPaying = exports.bookingConfirmPay = void 0;
var _reserva = _interopRequireDefault(require("../models/reserva.js"));
var _config = _interopRequireDefault(require("../config.js"));
var _jsonwebtoken = _interopRequireWildcard(require("jsonwebtoken"));
var _user = _interopRequireDefault(require("../models/user"));
var _room = _interopRequireDefault(require("../models/room.js"));
var _roomtype = _interopRequireDefault(require("../models/roomtype.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var bookingToPaying = exports.bookingToPaying = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, fechaInicio, fechaHasta, cantidad, habitacion, estado, servicios, token, decoded, room, dayFrom, dayTo, diffms, dias, roomType, total, booking, save, updateRoom, cookiecfg;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, fechaInicio = _req$body.fechaInicio, fechaHasta = _req$body.fechaHasta, cantidad = _req$body.cantidad, habitacion = _req$body.habitacion, estado = _req$body.estado, servicios = _req$body.servicios;
          token = req.cookies['Tookie'];
          if (!token) {
            token = req.cookies['accessToken'];
          }
          decoded = _jsonwebtoken["default"].verify(token, _config["default"].SECRET_KEY);
          _context.next = 7;
          return _room["default"].findOne({
            roomid: habitacion
          }).sort({
            updatedAt: 1
          });
        case 7:
          room = _context.sent;
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
          _context.next = 13;
          return _roomtype["default"].findOne({
            _id: habitacion
          });
        case 13:
          roomType = _context.sent;
          total = dias * roomType.precio;
          booking = new _reserva["default"]({
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
          _context.next = 18;
          return booking.save();
        case 18:
          save = _context.sent;
          _context.next = 21;
          return _room["default"].findOneAndUpdate({
            _id: room._id
          }, {
            estado: estado
          }, {
            "new": true
          });
        case 21:
          updateRoom = _context.sent;
          if (updateRoom) {
            _context.next = 24;
            break;
          }
          return _context.abrupt("return", res.status(404).json({
            msg: 'Habitación no encontrada'
          }));
        case 24:
          cookiecfg = {
            expires: new Date(Date.now() + _config["default"].COOKIE_EXPIRATION * 2 * 60 * 60 * 1000),
            path: "/",
            httpOnly: true,
            secure: true,
            samesite: "Strict"
          };
          res.cookie('Booking-Temp', save._id, cookiecfg);
          return _context.abrupt("return", res.status(201).json({
            error: false,
            msg: 'Redirigiendo al pago...'
          }));
        case 29:
          _context.prev = 29;
          _context.t0 = _context["catch"](0);
          console.log('Error inesperado: ' + _context.t0);
          res.status(500).json({
            error: true,
            msg: 'Error inesperado: ' + _context.t0
          });
        case 33:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 29]]);
  }));
  return function bookingToPaying(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var payData = exports.payData = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var token, bookingId, userId, booking, user, roomtype;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          token = req.cookies['Tookie'];
          if (!token) {
            token = req.cookies['accessToken'];
          }
          bookingId = req.cookies['Booking-Temp']; //Id de Reserva (SIN CODIFICACIÓN)
          userId = _jsonwebtoken["default"].verify(token, _config["default"].SECRET_KEY); // ID DE USUARIO
          if (!(bookingId == undefined || userId == undefined)) {
            _context2.next = 7;
            break;
          }
          return _context2.abrupt("return", res.status(401).json({
            error: true,
            msg: 'Error en la toma de datos...',
            redirect: '/404?error=booking-data-missing'
          }));
        case 7:
          _context2.next = 9;
          return _reserva["default"].findOne({
            _id: bookingId
          });
        case 9:
          booking = _context2.sent;
          _context2.next = 12;
          return _user["default"].findOne({
            _id: userId.id
          });
        case 12:
          user = _context2.sent;
          _context2.next = 15;
          return _roomtype["default"].findOne({
            _id: booking.tipo
          });
        case 15:
          roomtype = _context2.sent;
          //Descodificar la id de reserva en caso de que no decodifique en el req.cookies
          //const reservaID = decodeURIComponent(cookie); 

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
            }
          });
          _context2.next = 23;
          break;
        case 19:
          _context2.prev = 19;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          res.status(500).json({
            error: true,
            msg: "Error Interno Inesperado"
          });
        case 23:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 19]]);
  }));
  return function payData(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var bookingConfirmPay = exports.bookingConfirmPay = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var cookie, booking, _req$body2, cardName, cardNumber, cardExpire, cardCode, email, userNumber;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          cookie = req.cookies['Booking-Temp'];
          _context3.next = 3;
          return _reserva["default"].findOne({
            _id: cookie
          });
        case 3:
          booking = _context3.sent;
          _req$body2 = req.body, cardName = _req$body2.cardName, cardNumber = _req$body2.cardNumber, cardExpire = _req$body2.cardExpire, cardCode = _req$body2.cardCode, email = _req$body2.email, userNumber = _req$body2.userNumber;
          res.status(201).json({
            msg: 'Todo OK!',
            contenido: 'w'
          });
        case 6:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function bookingConfirmPay(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var getReserva = exports.getReserva = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var reservas;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return _reserva["default"].find();
        case 2:
          reservas = _context4.sent;
          if (reservas.length < 1) res.status(200).json('Historial de reservas vacio.');
          res.status(200).json(reservas);
        case 5:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function getReserva(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var getReservaId = exports.getReservaId = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var reserva;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return _reserva["default"].findById(req.params.reservaId);
        case 2:
          reserva = _context5.sent;
          res.status(200).json(reserva);
        case 4:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function getReservaId(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var updateReserva = exports.updateReserva = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var actualizarReserva;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return _reserva["default"].findByIdAndUpdate(req.params.reservaId, req.body, {
            "new": true
          });
        case 2:
          actualizarReserva = _context6.sent;
          res.status(204).json(actualizarReserva);
        case 4:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function updateReserva(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var deleteReserva = exports.deleteReserva = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var reservaId, eliminarReserva;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          reservaId = req.params.reservaId;
          _context7.next = 3;
          return _reserva["default"].findByIdAndDelete(reservaId);
        case 3:
          eliminarReserva = _context7.sent;
          res.status(204).json(eliminarReserva);
        case 5:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function deleteReserva(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

/* Modificar las variables que relacionan al usuario ingresado, con la reserva hecha y los campos de input 
elegidos para hacer la reserva */