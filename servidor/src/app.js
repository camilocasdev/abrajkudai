import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';
import mainrouter from './routes/main.routes'
import { crearRole, crearRoom, defaultUsers, crearRoomType, expireBooking } from './libs/initialSetup';
import path from 'path';
import cookieParser  from 'cookie-parser';
import cors from 'cors'

const app = express();

app.set('pkg', pkg);

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
].filter(Boolean)

app.use(cors({
        origin: function (origin, callback) {
            if ( !origin || allowedOrigins.indexOf(origin) !== -1) {
                callback(null, true)
            } else {
                callback(new Error('Not allowed by CORS'))
            }
        },
        credentials: true
    }))

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use('/api', mainrouter)

const basePath = path.resolve('..');
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