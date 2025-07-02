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
import Role from '../models/role.js';
import Room from '../models/room.js';
import Roomtype from '../models/roomtype.js';
import Reserva from '../models/reserva.js';
import User from '../models/user.js';
export var crearRole = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var count, values;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Role.collection.estimatedDocumentCount();
        case 3:
          count = _context.sent;
          if (!(count > 0)) {
            _context.next = 6;
            break;
          }
          return _context.abrupt("return");
        case 6:
          _context.next = 8;
          return Promise.all([new Role({
            nombre: 'admin'
          }).save(), new Role({
            nombre: 'usuario'
          }).save(), new Role({
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
export var defaultUsers = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var count, array, del, empleado, admin, usuario, values;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return User.find({
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
          return User.find({
            nombre: 'default'
          });
        case 11:
          array = _context2.sent;
          _context2.next = 14;
          return User.deleteMany({
            _id: {
              $in: [array[0]._id, array[1]._id]
            }
          });
        case 14:
          del = _context2.sent;
        case 15:
          _context2.next = 17;
          return Role.findOne({
            nombre: 'empleado'
          });
        case 17:
          empleado = _context2.sent;
          _context2.next = 20;
          return Role.findOne({
            nombre: 'admin'
          });
        case 20:
          admin = _context2.sent;
          _context2.next = 23;
          return Role.findOne({
            nombre: 'usuario'
          });
        case 23:
          usuario = _context2.sent;
          _context2.t0 = Promise;
          _context2.t1 = User;
          _context2.next = 28;
          return User.encryptPassword('na');
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
          _context2.t6 = User;
          _context2.next = 35;
          return User.encryptPassword('na');
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
          _context2.t11 = User;
          _context2.next = 42;
          return User.encryptPassword('na');
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
export var crearRoomType = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var count, array, del, values;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Roomtype.collection.estimatedDocumentCount();
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
          return Roomtype.find();
        case 11:
          array = _context3.sent;
          _context3.next = 14;
          return Roomtype.deleteMany({});
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
          return Roomtype.insertMany([{
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
export var crearRoom = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var count, array, del, nh, nhm, tr, ps, n, rt, values;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Room.collection.estimatedDocumentCount();
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
          return Room.find();
        case 10:
          array = _context4.sent;
          _context4.next = 13;
          return Room.deleteMany();
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
          return Roomtype.find().sort({
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
          return Room.insertMany([{
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
export var expireBooking = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var pending, canceled, current, i, bookingDate, days, deleteBooking, changeRoomState, _bookingDate, hours, _changeRoomState, changeBookingState;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Reserva.find({
            estado: 'Pendiente'
          });
        case 2:
          pending = _context5.sent;
          _context5.next = 5;
          return Reserva.find({
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
          return Reserva.findOneAndDelete({
            _id: canceled[i]._id
          });
        case 15:
          deleteBooking = _context5.sent;
          _context5.next = 18;
          return Room.findOneAndUpdate({
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
          return Room.findOneAndUpdate({
            _id: pending[i].habitacion
          }, {
            estado: 'Disponible'
          }, {
            "new": true
          });
        case 35:
          _changeRoomState = _context5.sent;
          _context5.next = 38;
          return Reserva.findOneAndUpdate({
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