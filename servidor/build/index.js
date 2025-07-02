import dotenv from 'dotenv';
//NO SE EJECUTA ANTES DEL APP :RAGEE:
dotenv.config(process.cwd(), '.env');
import app, { browser } from './app.js';
import * as db from './database.js';
var port = process.env.PORT;
try {
  app.listen(port);
  console.log("Se inicio el servidor en el puerto: ", port);
  db.dbconnect();
  browser();
} catch (error) {
  console.log('Ha ocurrido un error al conectar', error);
}