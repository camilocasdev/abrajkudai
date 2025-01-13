import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';
import reservart from './routes/reservar.routes';
import authrt from './routes/auth.routes'
import userprivrt from './routes/userpriv.routes'
import usersrt from './routes/user.routes'
import { crearRole } from './libs/initialSetup';
import path from 'path'

const app = express();

app.set('pkg', pkg);

crearRole();

app.set(morgan('dev'));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/validation', authrt)
app.use('/restr', usersrt, reservart)
app.use('/priv', userprivrt)

const basePath = path.resolve('..')
app.use(express.static(path.join(basePath, 'cliente/build')))

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