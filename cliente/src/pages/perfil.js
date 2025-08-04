import './style.css';
import Footer from './components/footer.js';
import Header from './components/header.js';
import Loading from './components/loading-modals/loadingScreen'
import ProfileBooking from './components/profile-sections/profileBooking.js';

import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ProfileDataUser from './components/profile-sections/profileUserData.js';
import ProfileSettings from './components/profile-sections/profileSettings.js';

function Perfil(){

    const [usuario, setUsuario] = useState(null);
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

    if (usuario === null) return (
        <div className = 'loading-box'>
            <Loading nombre='perfil'/>
        </div>
    );
    const hash = window.location.hash;
    return(
        <div id='root-m'>
            <div>
                <title>Perfil | Abraj Kudai</title>
            </div>
            <div>
                <section className="header">
                    <article className="bg-profile-banner-box">
                        <img 
                            src={userBookings[userBookings.length-1]?.tipo?.imagen[0] || "https://nicodev.s-ul.eu/T8nI9Gxs"}
                            onError={(e) => { e.target.src = "https://nicodev.s-ul.eu/T8nI9Gxs"; }}
                            title="Apartado del hotel"
                            alt="Fondo de la reserva actual del hotel"
                        />
                    </article>
                    <Header />
                </section>
                <section className="banner">
                    <article className="current-room">
                        <img 
                            src={userBookings[0]?.tipo?.imagen[0] || "https://nicodev.s-ul.eu/T8nI9Gxs"} 
                            onError={(e) => { e.target.src = "https://nicodev.s-ul.eu/T8nI9Gxs"; }}
                            alt="Habitación Actual"
                        />
                        <div className="current-room-content">
                            <h1>¡Hola! {usuario?.nombre}</h1>
                            <div className='current-room-content-text'>
                                <h3>{userBookings[0]?.tipo?.nombre || "Sin Reservas"}</h3>
                                <p>Habitacion Actual</p>
                            </div>
                        </div>
                    </article>            
                </section>
                <section className="profile-content">
                    <article className='navbar-box'>
                        <div className="navbar">
                            <div className='navbar-anchores'>
                                <a href="#reservas"><strong>Reservas</strong></a>
                                <a href="#datos"><strong>Datos</strong></a>
                                <a href="#configuracion"><strong>Configuración</strong></a>
                            </div>
                            <button className="logout" href='#' onClick={clearData}><strong>Cerrar Sesión</strong></button>                    
                        </div>
                    </article>
                    {(hash === '#reservas' || hash === '') && <ProfileBooking userBookings={userBookings} />}
                    {hash === '#datos' && <ProfileDataUser usuario={usuario} setUsuario={setUsuario} />} 
                    {hash === '#configuracion' && <ProfileSettings />}
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Perfil;