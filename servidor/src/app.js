import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';
import reservart from './routes/reservar.routes';
import authrt from './routes/auth.routes';
import userprivrt from './routes/userpriv.routes';
import usersrt from './routes/user.routes';
import roomsrt from './routes/rooms.routes';
import { crearRole, crearRoom, defaultUsers, crearRoomType } from './libs/initialSetup';
import path from 'path';
import cookieParser  from 'cookie-parser';

const app = express();

app.set('pkg', pkg);

try {
    console.log('Iniciando entorno... ')

    crearRole();
    defaultUsers();
    crearRoomType();
    crearRoom();
    

} catch (error) {
    console.log(error);
}

app.set(morgan('dev'));

app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

app.use('/validation', authrt);
app.use('/public', roomsrt);
app.use('/restr', usersrt, reservart);
app.use('/priv', userprivrt);

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