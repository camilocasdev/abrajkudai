import './style.css';
import Footer from './components/footer.js';

import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Perfil(){

    var {$currentRoom} = 'on work...'
    var {$historial} = 'on work...'
    var {$proxResShow} = 'on work...'

    const [usuario, setUsuario] = useState({});

    const navigate = useNavigate()

    useEffect(() => {
        const userdata = async() => {
            try {
                const response = await fetch('/priv/get', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    const data = await response.json()

                    if (data.error === true){
                        navigate(data.redirect)
                    }

                    setUsuario(data)
            } catch (error) {
                console.error('ERROR: No se pudo obtener el token ' + error);
            }
        }
        userdata()
    }, [navigate])

    const clearData = async(event) => {
        event.preventDefault()

        fetch('/priv/logout', {method:'POST'})
            .then(response =>{
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
    return(
        <div>
            <div>
                <title>Perfil | Abraj Kudai</title>
            </div>
            <body>
                <section class="header">
                    <article class="banner-box-perfil">
                        <img src="https://nicodev.s-ul.eu/VfvJhItz"
                            title="Habitacion Actual"
                            alt="Imagen de la habitacion actual del usuario"
                            />
                    </article>
                    <article class="headerbox">
                        <div>
                            <a class="headerlogo" href="/">
                                <img src="https://nicodev.s-ul.eu/hJFC5YUy" alt="Logotipo del Hotel" /></a>
                        </div>
                        <div class="headeranchores">
                            <div>
                                <a href="amenidades">Amenidades</a>
                            </div>
                            <div>
                                <a href="eventos">Eventos</a>
                            </div>
                            <div>
                                <a 
                                href="reserva"
                                rel="noreferrer">
                                Reservar
                                </a>
                            </div>
                        </div>
                        <div class="perfil">
                            <a href="signin">
                                <ion-icon name="person-circle" alt="Icono de perfil"></ion-icon>
                            </a>
                        </div>
                    </article>
                </section>
                <section class="banner">
                    <article class="currentroom">
                        <img src="https://nicodev.s-ul.eu/VfvJhItz" alt="Habitación Actual"/>
                        <div class="curRoom">
                            <h1>¡Hola! {usuario?.nombre}</h1>
                            <p> Habitacion Actual ...</p>
                        </div>
                    </article>            
                </section>
                <section class="perfcontent">
                    <article>
                        <nav>
                            <div class="navbar">
                                <a href="#reservas"><strong>Reservas</strong></a>
                                <a href="#configuracion"><strong>Configuración</strong></a>
                                <button class="logout" href='#' onClick={clearData}><strong>Cerrar Sesión</strong></button>                    
                            </div>
                        </nav>
                    </article>
                    <article id="reservas">
                        <div>
                            <h2>Reserva Actual</h2>
                            <div class="perftarjet">
                                <div>
                                    <img src="https://nicodev.s-ul.eu/VfvJhItz" alt=""/>
                                </div>
                                <div>
                                    <h3>{$currentRoom}</h3>
                                    <p>Lorem ipsum</p>
                                </div>
                            </div>             
                        </div>
                        <div>
                            <h2>Reserva Próximas</h2>
                            <div class="perftarjet">
                                <div>
                                    <img src={$currentRoom} alt="Imágenen de la habitación actual"/>
                                </div>
                                <div>
                                    <h3>{$proxResShow}</h3>
                                    <p>Lorem ipsum</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="histcontein">
                                <h2>Historial de Reservas</h2>
                                <div class="perftarjet">
                                    <div>
                                        <img src="https://nicodev.s-ul.eu/VfvJhItz" alt="Imágen relaciónada a la habitación del historial"/>
                                    </div>
                                    <div>
                                        <h3>{$historial}</h3>
                                        <p>Lorem ipsum</p>
                                    </div>
                                </div>
                                <div class="perftarjet">
                                    <div>
                                        <img src={$currentRoom} alt="Imágen relacionada a la habitación del historial"/>
                                    </div>
                                    <div>
                                        <h3>{$historial}</h3>
                                        <p>Lorem ipsum</p>
                                    </div>
                                </div>
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