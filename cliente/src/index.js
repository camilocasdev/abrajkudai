import React from 'react';
import ReactDOM from 'react-dom/client';
import './pages/style.css';
import reportWebVitals from './reportWebVitals';


//Páginas Principales
import * as pages from './pages';
//Páginas de Habitaciones
import { BrowserRouter, Routes, Route } from 'react-router';

const root = document.getElementById('root');



ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<pages.mainpage />} />
      <Route path="amenidades" element={<pages.amenidades />} />
      <Route path="eventos" element={<pages.eventos />} />
      <Route path="reserva" element={<pages.reserva />} />
      <Route path="pago" element={<pages.pago />} />
      <Route path="perfil" element={<pages.perfil />} />
      <Route path="signin" element={<pages.signin />} />
      <Route path="signup" element={<pages.signup />} />
      <Route path="/habitacion" element={<pages.rooms />} />
      <Route path="/404" element={<pages.error />}/>
    </Routes>
  </BrowserRouter>
)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
