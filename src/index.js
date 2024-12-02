import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import reportWebVitals from './reportWebVitals';

//Páginas Principales
import Mainpage from './mainpage';
import Amenidades from './amenidades';
import Alojamiento from './alojamiento';
import Eventos from './eventos';
import Pago from './pago';
import Perfil from './perfil';
import Reserva from './reserva';
import Signup from './signup';
import Login from './login';
//Páginas de Habitaciones
import Deluxesuite from './habitaciones/deluxesuite';
import Executivesuite from './habitaciones/executivesuite';
import Familysuite from './habitaciones/familysuite';
import Honeymoonsuite from './habitaciones/honeymoonsuite';
import Juniorsuite from './habitaciones/juniorsuite';
import Presidentialsuite from './habitaciones/presidentialsuite';
import { BrowserRouter, Routes, Route } from 'react-router';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="amenidades" element={<Amenidades />} />
      <Route path="alojamiento" element={<Alojamiento />} />
      <Route path="eventos" element={<Eventos />} />
      <Route path="reserva" element={<Reserva />} />
      <Route path="pago" element={<Pago />} />
      <Route path="perfil" element={<Perfil />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="habitaciones/deluxesuite" element={<Deluxesuite />} />
      <Route path="habitaciones/executivesuite" element={<Executivesuite />} />
      <Route path="habitaciones/familysuite" element={<Familysuite />} />
      <Route path="habitaciones/honeymoonsuite" element={<Honeymoonsuite />} />
      <Route path="habitaciones/juniorsuite" element={<Juniorsuite />} />
      <Route path="habitaciones/presidentialsuite" element={<Presidentialsuite />} />
    </Routes>
  </BrowserRouter>
)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
