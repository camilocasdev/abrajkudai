import app, {browser} from './app.js';
import * as db from './database.js';
import dotenv from 'dotenv'
import path from 'path'

const env = dotenv.config({path: path.resolve('./.env')})

const port = 3000

try {
    app.listen(port);
    console.log("Se inicio el servidor en el puerto: ", port);

    
    db.dbconnect();
    browser()
    
} catch (error) {
    console.log('Ha ocurrido un error al conectar', error)
}






