"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultUsers = exports.crearRoomType = exports.crearRoom = exports.crearRole = void 0;
var _dns = require("dns");
var _role = _interopRequireDefault(require("../models/role"));
var _room = _interopRequireDefault(require("../models/room"));
var _roomtype = _interopRequireDefault(require("../models/roomtype"));
var _user = _interopRequireDefault(require("../models/user"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
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