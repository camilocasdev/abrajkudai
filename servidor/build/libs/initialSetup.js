"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expireBooking = exports.defaultUsers = exports.crearRoomType = exports.crearRoom = exports.crearRole = void 0;
var _role = _interopRequireDefault(require("../models/role"));
var _room = _interopRequireDefault(require("../models/room"));
var _roomtype = _interopRequireDefault(require("../models/roomtype"));
var _reserva = _interopRequireDefault(require("../models/reserva"));
var _user = _interopRequireDefault(require("../models/user"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var crearRole = exports.crearRole = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var count, values;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _role["default"].collection.estimatedDocumentCount();
        case 3:
          count = _context.sent;
          if (!(count > 0)) {
            _context.next = 6;
            break;
          }
          return _context.abrupt("return");
        case 6:
          _context.next = 8;
          return Promise.all([new _role["default"]({
            nombre: 'admin'
          }).save(), new _role["default"]({
            nombre: 'usuario'
          }).save(), new _role["default"]({
            nombre: 'empleado'
          }).save()]);
        case 8:
          values = _context.sent;
          _context.next = 14;
          break;
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 11]]);
  }));
  return function crearRole(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var defaultUsers = exports.defaultUsers = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var count, array, del, empleado, admin, usuario, values;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _user["default"].find({
            nombre: 'default'
          }).countDocuments();
        case 3:
          count = _context2.sent;
          if (!(count == 3)) {
            _context2.next = 6;
            break;
          }
          return _context2.abrupt("return");
        case 6:
          if (!(count == 0 || count >= 1 && count < 3)) {
            _context2.next = 55;
            break;
          }
          _context2.prev = 7;
          if (!(count >= 1)) {
            _context2.next = 15;
            break;
          }
          _context2.next = 11;
          return _user["default"].find({
            nombre: 'default'
          });
        case 11:
          array = _context2.sent;
          _context2.next = 14;
          return _user["default"].deleteMany({
            _id: {
              $in: [array[0]._id, array[1]._id]
            }
          });
        case 14:
          del = _context2.sent;
        case 15:
          _context2.next = 17;
          return _role["default"].findOne({
            nombre: 'empleado'
          });
        case 17:
          empleado = _context2.sent;
          _context2.next = 20;
          return _role["default"].findOne({
            nombre: 'admin'
          });
        case 20:
          admin = _context2.sent;
          _context2.next = 23;
          return _role["default"].findOne({
            nombre: 'usuario'
          });
        case 23:
          usuario = _context2.sent;
          _context2.t0 = Promise;
          _context2.t1 = _user["default"];
          _context2.next = 28;
          return _user["default"].encryptPassword('na');
        case 28:
          _context2.t2 = _context2.sent;
          _context2.t3 = [empleado._id];
          _context2.t4 = {
            nombre: 'default',
            apellido: 'empleado',
            pais: 'naa',
            identificacion: 'naap',
            contrasena: _context2.t2,
            correo: 'default@empleado.com',
            telefono: 0,
            role: _context2.t3
          };
          _context2.t5 = new _context2.t1(_context2.t4).save();
          _context2.t6 = _user["default"];
          _context2.next = 35;
          return _user["default"].encryptPassword('na');
        case 35:
          _context2.t7 = _context2.sent;
          _context2.t8 = [admin._id];
          _context2.t9 = {
            nombre: 'default',
            apellido: 'admin',
            pais: 'na',
            identificacion: 'naa',
            contrasena: _context2.t7,
            correo: 'default@admin.com',
            telefono: 0,
            role: _context2.t8
          };
          _context2.t10 = new _context2.t6(_context2.t9).save();
          _context2.t11 = _user["default"];
          _context2.next = 42;
          return _user["default"].encryptPassword('na');
        case 42:
          _context2.t12 = _context2.sent;
          _context2.t13 = [usuario._id];
          _context2.t14 = {
            nombre: 'default',
            apellido: 'usuario',
            pais: 'na',
            identificacion: 'na',
            contrasena: _context2.t12,
            correo: 'default@usuario.com',
            telefono: 0,
            role: _context2.t13
          };
          _context2.t15 = new _context2.t11(_context2.t14).save();
          _context2.t16 = [_context2.t5, _context2.t10, _context2.t15];
          _context2.next = 49;
          return _context2.t0.all.call(_context2.t0, _context2.t16);
        case 49:
          values = _context2.sent;
          _context2.next = 55;
          break;
        case 52:
          _context2.prev = 52;
          _context2.t17 = _context2["catch"](7);
          console.log(_context2.t17);
        case 55:
          _context2.next = 60;
          break;
        case 57:
          _context2.prev = 57;
          _context2.t18 = _context2["catch"](0);
          console.log(_context2.t18);
        case 60:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 57], [7, 52]]);
  }));
  return function defaultUsers(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var crearRoomType = exports.crearRoomType = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var count, array, del, values;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _roomtype["default"].collection.estimatedDocumentCount();
        case 3:
          count = _context3.sent;
          if (!(count === 8)) {
            _context3.next = 6;
            break;
          }
          return _context3.abrupt("return");
        case 6:
          if (!(count >= 1 && count < 8)) {
            _context3.next = 20;
            break;
          }
          _context3.prev = 7;
          if (!(count >= 1)) {
            _context3.next = 15;
            break;
          }
          _context3.next = 11;
          return _roomtype["default"].find();
        case 11:
          array = _context3.sent;
          _context3.next = 14;
          return _roomtype["default"].deleteMany({});
        case 14:
          del = _context3.sent;
        case 15:
          _context3.next = 20;
          break;
        case 17:
          _context3.prev = 17;
          _context3.t0 = _context3["catch"](7);
          console.log(_context3.t0);
        case 20:
          _context3.next = 22;
          return _roomtype["default"].insertMany([{
            nombre: 'Junior Suite',
            precio: 250,
            capacidad: 3,
            scriptLong: "<h3><strong>Junior Suite</strong></h3><p>La Junior Suite es una habitación espaciosa y elegante, diseñada para ofrecer comodidad y lujo en un ambiente acogedor. Ideal para viajeros que buscan un equilibrio entre confort y exclusividad, esta suite cuenta con una decoración sofisticada y moderna, junto con una variedad de servicios que garantizan una estancia placentera.</p><h4><strong>✨ Características principales</strong></h4><ul><li>🛏 Amplia cama king-size o dos camas individuales, con sábanas de alta calidad.</li><li>🏡 Área de estar separada, perfecta para relajarse o trabajar.</li><li>🌅 Vistas panorámicas a la ciudad o al paisaje natural del hotel.</li><li>🖥 Smart TV de pantalla plana con canales internacionales y servicio de streaming.</li><li>☕ Cafetera y minibar, con una selección de bebidas y snacks premium.</li><li>🚿 Baño privado de lujo, con ducha de efecto lluvia y amenidades de alta gama.</li><li>💨 Aire acondicionado y calefacción, ajustables para mayor confort.</li><li>📶 WiFi de alta velocidad, ideal para trabajar o entretenerse.</li><li>🛎 Servicio a la habitación 24/7, para atender cualquier necesidad.</li></ul><h4><strong>🌟 Experiencia única</strong></h4><p>Disfruta de un espacio diseñado para el descanso y la comodidad, con detalles cuidadosamente seleccionados para hacer de tu estancia una experiencia inolvidable. La Junior Suite es la opción perfecta para parejas, viajeros de negocios o aquellos que buscan un plus de confort durante su viaje.</p>",
            scriptShort: "Una habitación espaciosa y elegante, ideal para quienes buscan comodidad y exclusividad, con modernas amenidades y vistas panorámicas.",
            imagen: ['https://nicodev.s-ul.eu/j7SH6hi3']
          }, {
            nombre: 'Honeymoon Suite',
            precio: 300,
            capacidad: 2,
            scriptLong: "<h3><strong>Hooneymoon Suite</strong></h3><p>La Honeymoon Suite es el escape perfecto para parejas que buscan una experiencia íntima, lujosa y llena de detalles inolvidables. Diseñada para celebrar el amor, esta suite ofrece un ambiente acogedor, elegante y con comodidades exclusivas para que cada momento sea especial.</p><h4><strong>✨ Características principales</strong></h4><ul><li>🛏 Cama king-size extraconfortable, con sábanas de lujo y decoración romántica.</li><li>🌅 Vistas espectaculares, ideales para disfrutar de amaneceres y atardeceres inolvidables.</li><li>🖥 Smart TV de pantalla plana con canales internacionales y servicio de streaming.</li><li>☕ Cafetera y minibar, con una selección de bebidas y snacks premium.</li><li>🚿 Baño privado de lujo, con ducha de efecto lluvia y amenidades de alta gama.</li><li>💨 Aire acondicionado y calefacción, ajustables para mayor confort.</li><li>📶 WiFi de alta velocidad, ideal para trabajar o entretenerse.</li><li>🛎 Servicio a la habitación 24/7, para atender cualquier necesidad.</li></ul><h4><strong>🌟 Experiencia única</strong></h4><p>Disfruta de un espacio diseñado para el descanso y la comodidad, con detalles cuidadosamente seleccionados para hacer de tu estancia una experiencia inolvidable. La Honeymoon Suite es la opción perfecta para parejas que buscan un ambiente exclusivo y romántico.</p>",
            scriptShort: "Un refugio romántico con jacuzzi privado, decoración especial y servicios exclusivos para una experiencia inolvidable en pareja.",
            imagen: ['https://nicodev.s-ul.eu/eVEkueHl']
          }, {
            nombre: 'Executive Suite',
            precio: 350,
            capacidad: 4,
            scriptLong: "<h3><strong>Executive Suite</strong></h3><p>La Executive Suite es perfecta para viajeros de negocios o personas que buscan una estancia cómoda con servicios exclusivos. Diseñada con un estilo moderno y funcional, ofrece un espacio amplio con todas las comodidades necesarias para el trabajo y el descanso.</p><h4><strong>✨ Características principales</strong></h4><ul><li>🛏 Cama king-size con ropa de cama de lujo.</li><li>💼 Escritorio ejecutivo con silla ergonómica.</li><li>📶 WiFi de alta velocidad y puertos de carga.</li><li>🖥 Smart TV con acceso a plataformas de streaming.</li><li>☕ Cafetera con selección de cafés y tés premium.</li><li>🚿 Baño privado con ducha de efecto lluvia.</li><li>🛎 Servicio a la habitación 24/7.</li></ul><h4><strong>🌟 Experiencia única</strong></h4><p>Con un diseño pensado para la productividad y la relajación, la Executive Suite ofrece el equilibrio perfecto entre trabajo y confort.</p>",
            scriptShort: "Espacio sofisticado diseñado para viajeros de negocios, con escritorio ejecutivo, WiFi de alta velocidad y total confort.",
            imagen: ['https://nicodev.s-ul.eu/bw4KjHpc']
          }, {
            nombre: 'Deluxe Suite',
            precio: 450,
            capacidad: 5,
            scriptLong: "<h3><strong>Deluxe Suite</strong></h3><p>La Deluxe Suite ofrece una combinación ideal de lujo y confort, con espacios elegantes y detalles sofisticados. Diseñada para viajeros exigentes, esta suite cuenta con una decoración exclusiva y comodidades de primer nivel.</p><h4><strong>✨ Características principales</strong></h4><ul><li>🛏 Cama king-size con colchón de lujo.</li><li>🌅 Balcón privado con vistas impresionantes.</li><li>🖥 Smart TV de 55 pulgadas con canales premium.</li><li>☕ Minibar y cafetera con opciones gourmet.</li><li>🚿 Baño de mármol con ducha y bañera independiente.</li><li>💨 Control de clima personalizado.</li><li>🛎 Servicio de mayordomo 24/7.</li></ul><h4><strong>🌟 Experiencia única</strong></h4><p>Vive una estancia de lujo en un ambiente sofisticado, con todas las comodidades para una experiencia inolvidable.</p>",
            scriptShort: "Lujo y confort en una suite con balcón privado, Smart TV, baño de mármol y un ambiente exclusivo para una estancia inolvidable.",
            imagen: ['https://nicodev.s-ul.eu/NqdOigvV']
          }, {
            nombre: 'Family Suite',
            precio: 500,
            capacidad: 8,
            scriptLong: "<h3><strong>Family Suite</strong></h3><p>La Family Suite es ideal para familias o grupos que buscan un espacio amplio y cómodo. Diseñada para ofrecer privacidad y comodidad, cuenta con múltiples áreas para el descanso y la convivencia.</p><h4><strong>✨ Características principales</strong></h4><ul><li>🛏 Dos habitaciones separadas con camas king y twin.</li><li>🛋 Sala de estar con sofá cama.</li><li>🎮 Área de entretenimiento con TV y juegos.</li><li>☕ Cocina equipada con microondas y minibar.</li><li>🚿 Dos baños completos con amenidades de lujo.</li><li>💨 Aire acondicionado en todas las áreas.</li><li>🛎 Servicio de habitaciones para toda la familia.</li></ul><h4><strong>🌟 Experiencia única</strong></h4><p>Disfruta de un ambiente familiar con todas las comodidades, ideal para una estancia inolvidable con tus seres queridos.</p>",
            scriptShort: "Ideal para familias, con habitaciones separadas, sala de estar, cocina equipada y todas las comodidades para una estancia perfecta.",
            imagen: ['https://nicodev.s-ul.eu/pct9Cpj4']
          }, {
            nombre: 'Presidential Suite',
            precio: 700,
            capacidad: 6,
            scriptLong: "<h3><strong>Presidential Suite</strong></h3><p>La Presidential Suite representa el máximo nivel de lujo y exclusividad. Con un diseño elegante y detalles de alto nivel, esta suite ofrece una experiencia única para huéspedes VIP.</p><h4><strong>✨ Características principales</strong></h4><ul><li>🛏 Cama king-size con edredones de plumas.</li><li>🛋 Sala de estar y comedor privado.</li><li>🌅 Terraza privada con jacuzzi.</li><li>🖥 Oficina privada con escritorio ejecutivo.</li><li>🍾 Bar personalizado con selección premium.</li><li>🚿 Baño de mármol con bañera de hidromasaje.</li><li>🛎 Servicio de mayordomo y chofer privado.</li></ul><h4><strong>🌟 Experiencia única</strong></h4><p>Exclusividad, lujo y atención personalizada en cada detalle, diseñada para los huéspedes más exigentes.</p>",
            scriptShort: "Exclusividad y elegancia en una suite con terraza privada, jacuzzi, bar premium y servicio de mayordomo personalizado.",
            imagen: ['https://nicodev.s-ul.eu/tjaHUBsG']
          }, {
            nombre: 'Penthouse Gold',
            precio: 1000,
            capacidad: 10,
            scriptLong: "<h3><strong>Penthouse Gold</strong></h3><p>El Penthouse Gold es una joya arquitectónica con vistas impresionantes y servicios de alto nivel. Diseñado para quienes buscan exclusividad y confort, esta suite redefine la experiencia de lujo.</p><h4><strong>✨ Características principales</strong></h4><ul><li>🛏 Dos habitaciones principales con camas king-size.</li><li>🌅 Terraza privada con piscina infinity.</li><li>🎹 Piano de cola en la sala principal.</li><li>🍽 Comedor de lujo con chef privado disponible.</li><li>🚿 Baños de mármol con bañera de hidromasaje y sauna.</li><li>🎥 Cine privado con sistema de sonido envolvente.</li><li>🛎 Servicio de mayordomo exclusivo 24/7.</li></ul><h4><strong>🌟 Experiencia única</strong></h4><p>Un penthouse diseñado para los huéspedes más exigentes, donde cada detalle refleja la más alta calidad y exclusividad.</p>",
            scriptShort: "Un penthouse de lujo con piscina infinity, cine privado, comedor con chef y vistas impresionantes. Pura exclusividad.",
            imagen: ['https://nicodev.s-ul.eu/8QPXeaiq']
          }, {
            nombre: 'Penthouse Black',
            precio: 1500,
            capacidad: 12,
            scriptLong: "<h3><strong>Penthouse Black</strong></h3><p>El Penthouse Black es la máxima expresión de lujo, exclusividad y diseño vanguardista. Un espacio único con una vista panorámica inigualable y servicios personalizados.</p><h4><strong>✨ Características principales</strong></h4><ul><li>🛏 Suite principal con cama king-size y vestidor.</li><li>🌅 Terraza con vistas 360° y piscina privada.</li><li>🍽 Comedor con chef privado disponible.</li><li>🎵 Sistema de sonido inteligente en todas las áreas.</li><li>🚿 Spa privado con sauna y sala de masajes.</li><li>🎥 Cine en casa con butacas de lujo.</li><li>🛎 Servicio VIP con mayordomo y seguridad privada.</li></ul><h4><strong>🌟 Experiencia única</strong></h4><p>El lujo en su máxima expresión, con atención personalizada y detalles exclusivos para los huéspedes más exigentes.</p>",
            scriptShort: "La máxima expresión de lujo, con spa privado, piscina 360°, mayordomo exclusivo y diseño vanguardista para los más exigentes.",
            imagen: ['https://nicodev.s-ul.eu/pKAPd7Qs']
          }], {
            ordered: true
          });
        case 22:
          values = _context3.sent;
          _context3.next = 28;
          break;
        case 25:
          _context3.prev = 25;
          _context3.t1 = _context3["catch"](0);
          console.log(_context3.t1);
        case 28:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 25], [7, 17]]);
  }));
  return function crearRoomType(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var crearRoom = exports.crearRoom = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var count, array, del, nh, nhm, tr, ps, n, rt, values;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _room["default"].collection.estimatedDocumentCount();
        case 3:
          count = _context4.sent;
          if (!(count === 1800)) {
            _context4.next = 6;
            break;
          }
          return _context4.abrupt("return");
        case 6:
          _context4.prev = 6;
          if (!(count >= 1 || count < 1800)) {
            _context4.next = 16;
            break;
          }
          _context4.next = 10;
          return _room["default"].find();
        case 10:
          array = _context4.sent;
          _context4.next = 13;
          return _room["default"].deleteMany();
        case 13:
          del = _context4.sent;
          _context4.next = 17;
          break;
        case 16:
          return _context4.abrupt("return");
        case 17:
          _context4.next = 22;
          break;
        case 19:
          _context4.prev = 19;
          _context4.t0 = _context4["catch"](6);
          console.log(_context4.t0);
        case 22:
          ;

          //Número de Habitación
          // Se agrega un 0 para los números menores a 10
          // Torre de habitaciónes
          // Piso de habitaciónes
          //let rt; // Tipo de habitaciónes, se obtiene de la base de datos para la iteración
          n = 0;
          tr = 1;
        case 25:
          if (!(tr <= 6)) {
            _context4.next = 50;
            break;
          }
          ps = 1;
          ps = 1;
        case 28:
          if (!(ps <= 10)) {
            _context4.next = 46;
            break;
          }
          nh = 1;
          nh = 1;
        case 31:
          if (!(nh <= 30)) {
            _context4.next = 43;
            break;
          }
          if (nh < 10) {
            nhm = String(nh).padStart(2, '0');
          } else nhm = nh;
          _context4.next = 35;
          return _roomtype["default"].find().sort({
            precio: 1
          });
        case 35:
          rt = _context4.sent;
          if (ps == 1 && nh <= 15) {
            n = 0;
          } else if (ps == 1 && nh > 15) {
            n = 4;
          } else if (ps == 2 && nh <= 15) {
            n = 2;
          } else if (ps == 2 && nh > 15) {
            n = 1;
          } else if (ps == 3 || ps == 4) {
            n = 3;
          } else if (ps == 5 || ps == 6) {
            n = 5;
          } else if (ps == 7 || ps == 8) {
            n = 6;
          } else if (ps == 9 || ps == 10) {
            n = 7;
          }

          //console.log(`${rt.nombre}`,'Torre: ' + tr + ', Piso: ' + ps + ', Habitacion: ' + nhm)
          _context4.next = 39;
          return _room["default"].insertMany([{
            numero: "T".concat(tr, " ").concat(ps).concat(nhm),
            roomid: "".concat(rt[n]._id)
          }]);
        case 39:
          values = _context4.sent;
        case 40:
          nh++;
          _context4.next = 31;
          break;
        case 43:
          ps++;
          _context4.next = 28;
          break;
        case 46:
          ;
        case 47:
          tr++;
          _context4.next = 25;
          break;
        case 50:
          _context4.next = 55;
          break;
        case 52:
          _context4.prev = 52;
          _context4.t1 = _context4["catch"](0);
          console.log(_context4.t1);
        case 55:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 52], [6, 19]]);
  }));
  return function crearRoom(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var expireBooking = exports.expireBooking = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var pending, canceled, current, i, bookingDate, days, deleteBooking, changeRoomState, _bookingDate, hours, _changeRoomState, changeBookingState;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return _reserva["default"].find({
            estado: 'Pendiente'
          });
        case 2:
          pending = _context5.sent;
          _context5.next = 5;
          return _reserva["default"].find({
            estado: 'Cancelado'
          });
        case 5:
          canceled = _context5.sent;
          current = new Date();
          i = 0;
        case 8:
          if (!(i < canceled.length)) {
            _context5.next = 27;
            break;
          }
          bookingDate = canceled[i].updatedAt.getTime();
          days = Math.trunc(Math.abs(bookingDate / (1000 * 60 * 60 * 24) - current.getTime() / 86400000));
          if (!(days >= 2)) {
            _context5.next = 24;
            break;
          }
          _context5.prev = 12;
          _context5.next = 15;
          return _reserva["default"].findOneAndDelete({
            _id: canceled[i]._id
          });
        case 15:
          deleteBooking = _context5.sent;
          _context5.next = 18;
          return _room["default"].findOneAndUpdate({
            _id: canceled[i].habitacion
          }, {
            estado: 'Disponible'
          }, {
            "new": true
          });
        case 18:
          changeRoomState = _context5.sent;
          _context5.next = 24;
          break;
        case 21:
          _context5.prev = 21;
          _context5.t0 = _context5["catch"](12);
          console.error(_context5.t0);
        case 24:
          i++;
          _context5.next = 8;
          break;
        case 27:
          i = 0;
        case 28:
          if (!(i < pending.length)) {
            _context5.next = 47;
            break;
          }
          _bookingDate = pending[i].createdAt.getTime();
          hours = Math.trunc(Math.abs(_bookingDate / (1000 * 60 * 60) - current.getTime() / 3600000));
          if (!(hours > 2)) {
            _context5.next = 44;
            break;
          }
          _context5.prev = 32;
          _context5.next = 35;
          return _room["default"].findOneAndUpdate({
            _id: pending[i].habitacion
          }, {
            estado: 'Disponible'
          }, {
            "new": true
          });
        case 35:
          _changeRoomState = _context5.sent;
          _context5.next = 38;
          return _reserva["default"].findOneAndUpdate({
            _id: pending[i]._id
          }, {
            estado: 'Cancelado'
          }, {
            "new": true
          });
        case 38:
          changeBookingState = _context5.sent;
          _context5.next = 44;
          break;
        case 41:
          _context5.prev = 41;
          _context5.t1 = _context5["catch"](32);
          console.error(_context5.t1);
        case 44:
          i++;
          _context5.next = 28;
          break;
        case 47:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[12, 21], [32, 41]]);
  }));
  return function expireBooking(_x9, _x0) {
    return _ref5.apply(this, arguments);
  };
}();