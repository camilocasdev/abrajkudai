"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = exports["default"] = {
  DB_URI: 'mongodb+srv://dev_admin:dX3hG5qTYHLZ2enZ@abrajkudaidb.yqlzr0w.mongodb.net/?retryWrites=true&w=majority&appName=AbrajKudaiDB',
  SALT_PRODUCTION: 10,
  //Podemos configurar el numero de vueltas que puede hacer el hash de Dcrypt para encriptar nuestras variables.
  SALT_DEVELOPMENT: 5,
  //en este caso elegimos una más corta para cuando se este desarrollando para que no se relentize el proceso 
  SECRET_KEY: 'esta-es-la-secret-key-y-debe-ser-larga-y-secreta-podemos-usar-signos-@@-y-numero',
  COOKIE_CFG: {
    path: "/",
    httpOnly: true,
    secure: true,
    samesite: "Strict"
  },
  //AccessToken será el token de persistencia, el que permitirá generar un token de transacción.
  //Tookie será mi token de transacción, su vida debe ser corta, accessToken lo renovará cada vez.
  EXPIRE_COOKIE: {
    Tookie: 1000 * 60 * 60 * 2,
    accessToken: 1000 * 60 * 60 * 24 * 45
  },
  EXPIRE_TOKEN: {
    Tookie: 3600 * 2,
    accessToken: 86400 * 45
  }
};