import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url';

dotenv.config({
    path: path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../.env')
})

import app, {browser} from './app.js';
import * as db from './database.js';

const port = process.env.PORT

try {
    app.listen(port);
    console.log("Se inicio el servidor en el puerto: ", port);

    
    db.dbconnect();
    browser()
    
} catch (error) {
    console.log('Ha ocurrido un error al conectar', error)
}






