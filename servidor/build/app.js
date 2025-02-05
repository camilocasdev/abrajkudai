"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.browser = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _package = _interopRequireDefault(require("../package.json"));
var _reservar = _interopRequireDefault(require("./routes/reservar.routes"));
var _auth = _interopRequireDefault(require("./routes/auth.routes"));
var _userpriv = _interopRequireDefault(require("./routes/userpriv.routes"));
var _user = _interopRequireDefault(require("./routes/user.routes"));
var _rooms = _interopRequireDefault(require("./routes/rooms.routes"));
var _initialSetup = require("./libs/initialSetup");
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var app = (0, _express["default"])();
app.set('pkg', _package["default"]);
try {
  console.log('Iniciando entorno... ');
  (0, _initialSetup.crearRole)();
  (0, _initialSetup.crearRoom)();
  (0, _initialSetup.defaultUsers)();
} catch (error) {
  console.log(error);
}
app.set((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use('/validation', _auth["default"]);
app.use('/public', _rooms["default"]);
app.use('/restr', _user["default"], _reservar["default"]);
app.use('/priv', _userpriv["default"]);
var basePath = _path["default"].resolve('..');
app.use(_express["default"]["static"](_path["default"].join(basePath, 'cliente/build')));
console.log(_path["default"].join(basePath, 'cliente/build', 'index.html'));
app.get('*', function (req, res) {
  res.sendFile(_path["default"].join(basePath, 'cliente/build', 'index.html'));
});
var browser = exports.browser = function browser() {
  if (typeof window !== "undefined") {
    window.open('http://localhost:3000', '_blank');
  }
};
var _default = exports["default"] = app;