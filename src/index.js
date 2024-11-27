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
import Signin from './signin';
//Páginas de Habitaciones
import Deluxesuite from './habitaciones/deluxesuite';
import Executivesuite from './habitaciones/executivesuite';
import Familysuite from './habitaciones/familysuite';
import Honeymoonsuite from './habitaciones/honeymoonsuite';
import Juniorsuite from './habitaciones/juniorsuite';
import Presidentesuite from './habitaciones/presidentsuite';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Presidentesuite />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
