"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateReserva = exports.getReservaId = exports.getReserva = exports.directBookingCreation = exports.deleteReserva = exports.bookingToPaying = exports.bookingSumamry = exports.bookingPay = void 0;
var _reserva = _interopRequireDefault(require("../models/reserva.js"));
var _jsonwebtoken = _interopRequireWildcard(require("jsonwebtoken"));
var _user = _interopRequireDefault(require("../models/user"));
var _room = _interopRequireDefault(require("../models/room.js"));
var _roomtype = _interopRequireDefault(require("../models/roomtype.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
//  ---------------------------------  FUNCIONES DE USUARIO  ----------------------------------------  //
var bookingToPaying = exports.bookingToPaying = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, fechaInicio, fechaHasta, cantidad, habitacion, estado, servicios, token, decoded, room, dayFrom, dayTo, diffms, dias, roomType, total, booking, save, updateRoom;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, fechaInicio = _req$body.fechaInicio, fechaHasta = _req$body.fechaHasta, cantidad = _req$body.cantidad, habitacion = _req$body.habitacion, estado = _req$body.estado, servicios = _req$body.servicios;
          token = req.cookies['Tookie'];
          decoded = _jsonwebtoken["default"].verify(token, process.env.SECRET_KEY);
          _context.next = 6;
          return _room["default"].findOne({
            roomid: habitacion
          }).sort({
            updatedAt: 1
          });
        case 6:
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
          _context.next = 12;
          return _roomtype["default"].findOne({
            _id: habitacion
          });
        case 12:
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
          _context.next = 17;
          return booking.save();
        case 17:
          save = _context.sent;
          _context.next = 20;
          return _room["default"].findOneAndUpdate({
            _id: room._id
          }, {
            estado: estado
          }, {
            "new": true
          });
        case 20:
          updateRoom = _context.sent;
          if (updateRoom) {
            _context.next = 23;
            break;
          }
          return _context.abrupt("return", res.status(404).json({
            msg: 'Habitación no encontrada'
          }));
        case 23:
          res.cookie('tb', save._id, {
            expires: new Date(Date.now() + 1 * 2 * 60 * 60 * 1000),
            path: process.env.COOKIE_CONFIG_ENV,
            secure: process.env.COOKIE_CFG_SECURE,
            httpOnly: process.env.COOKIE_CFG_HTTPONLY,
            samesite: process.env.COOKIE_CFG_SAME_SITE
          }); // tb === Temporal Booking
          return _context.abrupt("return", res.status(201).json({
            error: false,
            msg: 'Redirigiendo al pago...'
          }));
        case 27:
          _context.prev = 27;
          _context.t0 = _context["catch"](0);
          console.log('Error inesperado: ' + _context.t0);
          res.status(500).json({
            error: true,
            msg: 'Error inesperado: ' + _context.t0
          });
        case 31:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 27]]);
  }));
  return function bookingToPaying(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var bookingSumamry = exports.bookingSumamry = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var token, bookingId, userId, booking, user, roomtype;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          token = req.cookies['Tookie'];
          bookingId = req.cookies['tb']; //Id de Reserva (SIN CODIFICACIÓN)
          userId = _jsonwebtoken["default"].verify(token, process.env.SECRET_KEY); // ID DE USUARIO
          if (!(bookingId == undefined || userId == undefined)) {
            _context2.next = 6;
            break;
          }
          return _context2.abrupt("return", res.status(401).json({
            error: true,
            msg: 'Error en la toma de datos...',
            redirect: '/404?error=booking%20data%20missing'
          }));
        case 6:
          _context2.next = 8;
          return _reserva["default"].findOne({
            _id: bookingId
          });
        case 8:
          booking = _context2.sent;
          _context2.next = 11;
          return _user["default"].findOne({
            _id: userId.id
          });
        case 11:
          user = _context2.sent;
          _context2.next = 14;
          return _roomtype["default"].findOne({
            _id: booking.tipo
          });
        case 14:
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
          _context2.next = 22;
          break;
        case 18:
          _context2.prev = 18;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          res.status(500).json({
            error: true,
            msg: "Error Interno Inesperado"
          });
        case 22:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 18]]);
  }));
  return function bookingSumamry(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var bookingPay = exports.bookingPay = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var cookie, booking, _req$body2, cardName, cardNumber, cardExpire, cardCode, email, userNumber;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          cookie = req.cookies['tb'];
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
  return function bookingPay(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

//  -------------------------  FUNCIONES DE ADMINISTRADOR Y/O EMPLEADO  ------------------------------  //
var directBookingCreation = exports.directBookingCreation = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _req$body3, nombre, apellido, identificacion, telefono, email, fechaInicio, fechaHasta, cantidad, roomTypeId, servicios, cardName, cardNumber, cardExpire, cardCode, userNumber, _ref5, contrasena, codigo, pais, estado, user, room, dayFrom, dayTo, diffms, dias, roomType, total, booking;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _req$body3 = req.body, nombre = _req$body3.nombre, apellido = _req$body3.apellido, identificacion = _req$body3.identificacion, telefono = _req$body3.telefono, email = _req$body3.email, fechaInicio = _req$body3.fechaInicio, fechaHasta = _req$body3.fechaHasta, cantidad = _req$body3.cantidad, roomTypeId = _req$body3.roomTypeId, servicios = _req$body3.servicios, cardName = _req$body3.cardName, cardNumber = _req$body3.cardNumber, cardExpire = _req$body3.cardExpire, cardCode = _req$body3.cardCode, userNumber = _req$body3.userNumber;
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
          return _room["default"].findOne({
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
          return _roomtype["default"].findOne({
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
          booking = new _reserva["default"]({
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
var getReserva = exports.getReserva = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var reservas;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return _reserva["default"].find();
        case 2:
          reservas = _context5.sent;
          if (reservas.length < 1) res.status(200).json('Historial de reservas vacio.');
          res.status(200).json(reservas);
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
var getReservaId = exports.getReservaId = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var reserva;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return _reserva["default"].findById(req.params['reservaId']);
        case 2:
          reserva = _context6.sent;
          res.status(200).json(reserva);
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
var updateReserva = exports.updateReserva = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var actualizarReserva;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return _reserva["default"].findByIdAndUpdate(req.params['reservaId'], req.body, {
            "new": true
          });
        case 2:
          actualizarReserva = _context7.sent;
          res.status(204).json(actualizarReserva);
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
var deleteReserva = exports.deleteReserva = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var reservaId, eliminarReserva;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          reservaId = req.params.reservaId;
          _context8.next = 3;
          return _reserva["default"].findByIdAndDelete(reservaId);
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