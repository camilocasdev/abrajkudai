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
import { describe, it } from 'mocha';
import { expect } from 'chai';
import request from 'supertest';
import app from '../app.js';
import { dbconnect } from '../database.js';
import { getRandomInt } from '../utils/math.utils.js';

/* function roomPriceFun(precio, dias){
    return precio * dias
}

test('Example test for Jest', () => {

    expect(roomPriceFun(1200, 8)).toBe(9600)
    
}) */

before(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        this.timeout(10000);
        _context.next = 3;
        return dbconnect();
      case 3:
      case "end":
        return _context.stop();
    }
  }, _callee, this);
})));
describe('POST /api/user/signup', function () {
  it('Registrar un nuevo usuario con campos completos (realDB)', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var randomInt, res;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          this.timeout(10000);
          randomInt = getRandomInt(100000, 9999999);
          _context2.next = 4;
          return request(app).post('/api/user/signup').send({
            nombre: "test",
            apellido: "uno",
            pais: "Colombia",
            identificacion: randomInt,
            //must be different to another register in the database
            contrasena: "123456",
            correo: "test.mcs@".concat(randomInt, ".com"),
            telefono: 1234552
          });
        case 4:
          res = _context2.sent;
          expect(res.status).to.equal(201);
          expect(res.body).to.have.property('msg');
          expect(res.body).to.have.property('redirect');
        case 8:
        case "end":
          return _context2.stop();
      }
    }, _callee2, this);
  })));
  it('Registrar un nuevo usuario con identificación ya registrada', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var randomInt, res;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          this.timeout(10000);
          randomInt = getRandomInt(100000, 9999999);
          _context3.next = 4;
          return request(app).post('/api/user/signup') // ?error=id%20ya%20registrado
          .send({
            nombre: "test",
            apellido: "uno",
            pais: "Colombia",
            identificacion: 1057410444,
            //must be different to another register in the database
            contrasena: "123456",
            correo: "test.mcs@".concat(randomInt, ".com"),
            telefono: 1234552
          });
        case 4:
          res = _context3.sent;
          expect(res.status).to.equal(400);
          expect(res.body).to.have.property('msg');
          expect(res.body).to.have.property('redirect');
        case 8:
        case "end":
          return _context3.stop();
      }
    }, _callee3, this);
  })));
  it('Registrar un nuevo usuario con correo ya registrado', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var randomInt, res;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          this.timeout(10000);
          randomInt = getRandomInt(100000, 9999999);
          _context4.next = 4;
          return request(app).post('/api/user/signup').send({
            nombre: "test",
            apellido: "uno",
            pais: "Colombia",
            identificacion: randomInt,
            //must be different to another register in the database
            contrasena: "123456",
            correo: "camilo.castillo@gmail.com",
            telefono: 1234552
          });
        case 4:
          res = _context4.sent;
          expect(res.status).to.equal(400);
          expect(res.body).to.have.property('msg');
          expect(res.body).to.have.property('redirect');
        case 8:
        case "end":
          return _context4.stop();
      }
    }, _callee4, this);
  })));
});
var cookieSignin;
describe('POST /api/user/signin', function () {
  it('Iniciar sesión con credenciales registradas', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var res;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          this.timeout(10000);
          _context5.next = 3;
          return request(app).post('/api/user/signin').send({
            correo: 'default@admin.com',
            contrasena: 'na',
            keepSession: true
          });
        case 3:
          res = _context5.sent;
          cookieSignin = res.headers['set-cookie'].map(function (c) {
            return c.split(';')[0];
          }).join(';');
          expect(res.status).to.equal(200);
          expect(res.headers['set-cookie'][0]).to.include('accessToken');
          expect(res.headers['set-cookie'][1]).to.include('Tookie');
        case 8:
        case "end":
          return _context5.stop();
      }
    }, _callee5, this);
  })));
  it('Iniciar sesión con contraseña incorrecta', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var res, cookies;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          this.timeout(10000);
          _context6.next = 3;
          return request(app).post('/api/user/signin').send({
            correo: 'default@admin.com',
            contrasena: 'wrong_password_try',
            keepSession: true
          });
        case 3:
          res = _context6.sent;
          cookies = res.headers['set-cookie'];
          expect(res.status).to.equal(401);
          expect(cookies).to.be.undefined;
          expect(res.body).to.have.property('msg');
          expect(res.body).to.have.property('redirect');
        case 9:
        case "end":
          return _context6.stop();
      }
    }, _callee6, this);
  })));
  it('Iniciar sesión con credenciales no registradas', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
    var res, cookies;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          this.timeout(10000);
          _context7.next = 3;
          return request(app).post('/api/user/signin').send({
            correo: 'wrong@userdata.com',
            contrasena: 'wrong_password',
            keepSession: true
          });
        case 3:
          res = _context7.sent;
          cookies = res.headers['set-cookie'];
          expect(res.status).to.equal(404);
          expect(cookies).to.be.undefined;
        case 7:
        case "end":
          return _context7.stop();
      }
    }, _callee7, this);
  })));
});
describe('POST /api/user/logout', function () {
  it('Cerrar sesión de un usuario con sesión activa en el sistema', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
    var res, cookies;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          this.timeout(10000);
          _context8.next = 3;
          return request(app).post('/api/user/logout').set('Cookie', cookieSignin);
        case 3:
          res = _context8.sent;
          cookies = res.headers['set-cookie'];
          expect(res.status).to.equal(200);
          expect(cookies[0]).to.include('Tookie=;').and.to.include('Expires=');
          expect(cookies[1]).to.include('accessToken=;').and.to.include('Expires=');
          expect(res.body).to.have.property('msg');
          expect(res.body).to.have.property('redirect');
        case 10:
        case "end":
          return _context8.stop();
      }
    }, _callee8, this);
  })));
});
describe('POST /api/user/booking/create', function () {
  it('Crear una reserva (con falta de pago) con credenciales validas', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
    var res;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          this.timeout(10000);
          _context9.next = 3;
          return request(app).post('/api/user/booking/create').set('Cookie', cookieSignin).send({
            fechaInicio: "2025-8-25",
            fechaHasta: "2025-9-30",
            habitacion: "682d5d19814ed70ae2df7ab4",
            cantidad: 2,
            estado: "Pendiente",
            servicios: []
          });
        case 3:
          res = _context9.sent;
          expect(res.status).to.equal(201);
          expect(res.headers['set-cookie'][0]).to.include('tb');
        case 6:
        case "end":
          return _context9.stop();
      }
    }, _callee9, this);
  })));
  it('Crear una reserva (con falta de pago) sin credenciales', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee0() {
    var res;
    return _regeneratorRuntime().wrap(function _callee0$(_context0) {
      while (1) switch (_context0.prev = _context0.next) {
        case 0:
          this.timeout(10000);
          _context0.next = 3;
          return request(app).post('/api/user/booking/create').send({
            fechaInicio: "2025-8-25",
            fechaHasta: "2025-9-30",
            habitacion: "682d5d19814ed70ae2df7ab4",
            cantidad: 2,
            estado: "Pendiente",
            servicios: []
          });
        case 3:
          res = _context0.sent;
          expect(res.status).to.equal(404);
          expect(res.body).to.have.property('msg');
          expect(res.body).to.have.property('redirect');
        case 7:
        case "end":
          return _context0.stop();
      }
    }, _callee0, this);
  })));
  it('Crear una reserva (con falta de pago) con fechas de inicio pasadas', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee1() {
    var res;
    return _regeneratorRuntime().wrap(function _callee1$(_context1) {
      while (1) switch (_context1.prev = _context1.next) {
        case 0:
          this.timeout(10000);
          _context1.next = 3;
          return request(app).post('/api/user/booking/create').set('Cookie', cookieSignin).send({
            fechaInicio: "2024-6-25",
            fechaHasta: "2023-8-30",
            habitacion: "682d5d19814ed70ae2df7ab4",
            cantidad: 2,
            estado: "Pendiente",
            servicios: []
          });
        case 3:
          res = _context1.sent;
          expect(res.status).to.equal(400);
          expect(res.body).to.have.property('msg');
        case 6:
        case "end":
          return _context1.stop();
      }
    }, _callee1, this);
  })));
});
describe('GET /api/public/roomtype/get', function () {
  it('Consulta de la lista de los tipos de habitaciones (público)', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
    var res;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          this.timeout(10000);
          _context10.next = 3;
          return request(app).get('/api/public/roomtype/get');
        case 3:
          res = _context10.sent;
          expect(res.body).to.have.property('msg');
          expect(res.body['data']).to.have.lengthOf(8);
        case 6:
        case "end":
          return _context10.stop();
      }
    }, _callee10, this);
  })));
});
describe('GET /api/public/room/get/list', function () {
  it('Obtener la lista de habitaciones en la base de datos (público)', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
    var res;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          this.timeout(100000);
          _context11.next = 3;
          return request(app).get('/api/public/room/get/list');
        case 3:
          res = _context11.sent;
          expect(res.status).to.equal(200);
          expect(res.body).to.have.property('msg');
          //expect(res.body['data']).to.have.lengthOf(1800)
        case 6:
        case "end":
          return _context11.stop();
      }
    }, _callee11, this);
  })));
});
after(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
  return _regeneratorRuntime().wrap(function _callee12$(_context12) {
    while (1) switch (_context12.prev = _context12.next) {
      case 0:
        process.exit();
      case 1:
      case "end":
        return _context12.stop();
    }
  }, _callee12);
})));

/* 
{
    msg: "",
    data: [{}]
}
 */