import express from 'express';
import morgan from 'morgan';
//import pkg from '../package.json' assert { type: 'json' };
import mainrouter from './routes/main.routes.js'
import { crearRole, crearRoom, defaultUsers, crearRoomType, expireBooking } from './libs/initialSetup.js';
import path from 'path';
import cookieParser  from 'cookie-parser';
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import { fileURLToPath } from 'url';

dotenv.config({
    path: path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../.env')
})

const app = express();

//app.set('pkg', pkg);

try {
    console.log('Iniciando entorno... ')

    crearRole();
    defaultUsers();
    crearRoomType();

    setTimeout(function(){ //El uso de function para la definicion del setTimeout o setInterval esta en desuso
        crearRoom();
    }, 2000); // 2 Segundos

    setInterval(() => { //Este uso es más moderno y fácil de implementar
        console.log('[Auto Clean] Chequeando estado de reservas...')
        expireBooking()
    }, 43200000); // 12 Horas
    // 86400000); // 24 Horas

} catch (error) {
    console.log(error);
}

app.set(morgan('dev'));

const allowedOrigins = [
    process.env.CORS_ORIGIN_ONE,
    process.env.CORS_ORIGIN_RENDER,
    process.env.CORS_ORIGIN_VERCEL,
    process.env.CORS_ORIGIN_ANDROID
]


var corsOptionsDelegate = function (req, callback) {
    var corsOptions;
    if (allowedOrigins.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
    } else {
    corsOptions = { origin: false } // disable CORS for this request
    }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

app.use(cors(corsOptionsDelegate))

app.use(helmet({
    crossOriginResourcePolicy: false,
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            imgSrc: ["'self'", 'https://nicodev.s-ul.eu/', 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/'],
            scriptSrc: ["'self'", 'https://unpkg.com', 'https://js.stripe.com'],
            connectSrc: ["'self'", 'https://unpkg.com', 'https://js.stripe.com'],
            frameSrc: ["'self'", 'https://js.stripe.com']
        }
    }
}));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use('/api', mainrouter)

var basePath;

if (process.env.DOCKER_ACTIVE == 'true') {
    basePath = path.resolve('');
    console.log('Docker is running, basepath not modified: ', basePath)
} else {
    basePath = path.resolve('..');
    console.log('Docker is NOT running, basepath modified: ', basePath)
}


app.use(express.static(path.join(basePath, 'cliente/build')));

console.log(path.join(basePath, 'cliente/build', 'index.html'));

app.get('*', (req, res) => {
    res.sendFile(path.join(basePath, 'cliente/build', 'index.html'));
});

export const browser = function() {
    if (typeof window !== "undefined") {
        window.open('http://localhost:3000', '_blank');
    }
}

export default app;