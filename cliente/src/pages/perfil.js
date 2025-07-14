import './style.css';
import Footer from './components/footer.js';
import Header from './components/header.js';

import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Perfil(){

    const [usuario, setUsuario] = useState({});
    const [userBookings, setUserBookings] = useState([{}]);

    const navigate = useNavigate()

    useEffect(() => {
        const userdata = async() => {
            try {
                const response = await fetch('/api/user/get', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    const data = await response.json()

                    if (data.error === true){
                        navigate(data.redirect)
                    }

                    console.log(data)

                    setUsuario(data.userData)
                    setUserBookings(data.reservasData)
            } catch (error) {
                console.error('ERROR: No se pudo obtener el token ' + error);
            }
        }
        userdata()
    }, [navigate])

    const clearData = async(event) => {
        event.preventDefault()

        fetch('/api/user/logout', {method:'POST'})
            .then(response => {
                if(response.ok){
                    localStorage.clear()
                    sessionStorage.clear()
                    window.location.href = '/signin';
            } else {
                alert('Error: Al cerrar sesión')
                }
            })
            .catch (error => console.error('Error:', error))
    }

    if (!Array.isArray(userBookings)) {
        return <p>Cargando historial de reservas...</p>;
    }

    const bookingHistorial = userBookings.map((e, i) => {
        try{
            return (
                <div className="profile-booking-tarjet" key={i}>
                    <div>
                        <img src={e?.tipo?.imagen?.[0]} alt={`Habitación número ${i} del historial de reservas.`} />
                    </div>
                    <div className="profile-booking-tarjet-content">
                        <h3>{e?.tipo?.nombre}</h3>
                        <p>{`Fecha de Inicio: ${e?.fechaInicio}`}</p>
                        <p>{`Fecha de Fin: ${e?.fechaHasta}`}</p>
                        <p>{`Estado: ${e?.estado}`}</p>
                    </div>
                </div>
            );
        } catch (error){
            console.log(error)
        }
    });
    return(
        <div>
            <div>
                <title>Perfil | Abraj Kudai</title>
            </div>
            <body>
                <section className="header">
                    <article class="bg-profile-banner-box">
                        <img 
                            src={userBookings[userBookings.length-1]?.tipo?.imagen[0]} 
                            title="Apartado del hotel"
                            alt="Fondo de la reserva actual del hotel"
                        />
                    </article>
                    <Header />
                </section>
                <section class="banner">
                    <article class="current-room">
                        <img src={userBookings[0]?.tipo?.imagen[0]} alt="Habitación Actual"/>
                        <div class="current-room-content">
                            <h1>¡Hola! {usuario?.nombre}</h1>
                            <div className='current-room-content-text'>
                                <h3>{userBookings[0]?.tipo?.nombre}</h3>
                                <p>Habitacion Actual</p>
                            </div>
                        </div>
                    </article>            
                </section>
                <section class="profile-content">
                    <article className='navbar-box'>
                        <div class="navbar">
                            <div className='navbar-anchores'>
                                <a href="#reservas"><strong>Reservas</strong></a>
                                <a href="#datos"><strong>Datos</strong></a>
                                <a href="#configuracion"><strong>Configuración</strong></a>
                            </div>
                            <button class="logout" href='#' onClick={clearData}><strong>Cerrar Sesión</strong></button>                    
                        </div>
                    </article>
                    <article id="reservas">
                        <div>
                            <h2>Reserva Actual</h2>
                            <div class="profile-booking-tarjet">
                                <div>
                                    <img src={userBookings[6]?.tipo?.imagen[0]} alt="Imágenen de la habitación actual"/>
                                </div>
                                <div className="profile-booking-tarjet-content">
                                    <h3>{userBookings[6]?.tipo?.nombre}</h3>
                                    <p>{userBookings[6]?.tipo?.scriptShort}</p>
                                    <p><strong>{userBookings[6]?.fechaInicio}</strong></p>
                                </div>
                            </div>            
                        </div>
                        <div>
                            <h2>Reserva Próximas</h2>
                            <div class="profile-booking-tarjet">
                                <div>
                                    <img src={userBookings[0]?.tipo?.imagen[0]} alt="Imágenen de la habitación actual"/>
                                </div>
                                <div className="profile-booking-tarjet-content">
                                    <h3>{userBookings[0]?.tipo?.nombre}</h3>
                                    <p>{userBookings[0]?.tipo?.scriptShort}</p>
                                    <p><strong>{userBookings[0]?.fechaInicio}</strong></p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="profile-booking-historial">
                                <h2>Historial de Reservas</h2>
                                {bookingHistorial}
                            </div>
                        </div>
                    </article>
                    <article id="configuracion">
                        <div>
                            <p>Nada que ver aca</p>
                        </div>
                    </article>
                </section>
            </body>
            <Footer />
        </div>
    )
}

export default Perfil;