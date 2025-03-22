import './style.css';
import Footer from './components/footer.js';

import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function Reserva(){

    const [Resultados, setResultados] = useState({});

    const navigate = useNavigate();

    const room = [{precio: 200}] //BORRAR
    const number = 0
    const currency = 'USD'

    useEffect(() => {

        const resultados = async () => {
    
            try {
                const response = await fetch("/public/list", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                
                const data = await response.json()
                console.log(data)

                setResultados(data)

                console.log(Resultados[0].nombre)
            } catch (error) {
                console.error(error)
            }
        }
    
        resultados()

    }, [navigate])

    return(
        <div>
            <div>
                <title>Reservas | Abraj Kudai</title>
            </div>
            <body>
                <section class="header">
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
                <section class="res-rooms-section">
                    <div class="fixer">
                        <article class='res-room-title'>
                            <h2>Reservas Disponibles</h2>
                            <p>Encuentra tu alojamiento ideal para tu próxima estancia.</p>
                        </article>
                        <article class="res-filter"
                            //Filtros de fechas, cantidad y servicios
                            //Orden ascendente y descendente de precio
                        >
                            <div class="filters">
                                <div class="filter-title">
                                    <p>Filtros</p>
                                </div>
                                <div class='filter-fix'>
                                    <div class='filter-date-from'>
                                        <a style={{'pointer-events': 'none'}} >
                                            Desde
                                        </a>
                                    </div>
                                    <div>
                                        <a class='filter-date-to' style={{'pointer-events': 'none'}} >
                                            Hasta
                                        </a>
                                    </div>
                                    <div>
                                        <a class='quantity' style={{'pointer-events': 'none'}} >
                                            Cantidad
                                        </a>
                                    </div>
                                    <div>
                                        <a class='services' style={{'pointer-events': 'none'}} >
                                            Servicios
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="order-by">
                                <p>Ordenar por</p>
                            </div>
                        </article>
                        <article class="result-page">
                            <div class="result-box">
                                <a href='/habitacion?t=${number}' class="default-tarjet">
                                    <div>
                                        <img 
                                            src='https://nicodev.s-ul.eu/pKAPd7Qs'
                                            alt='Imagen de la habitación'
                                            
                                            />
                                    </div>
                                    <div class='room-price-title'>
                                        <div class='room-name'>
                                            <h2>Penthouse Black</h2>
                                        </div>
                                        <div class='room-price'>
                                            <h2>{room[number]?.precio}{currency}/noche</h2>
                                        </div>
                                    </div>
                                </a>
                                <a href='/habitacion?t=${number}' class="default-tarjet">
                                    <div>
                                        <img 
                                            src='https://nicodev.s-ul.eu/pKAPd7Qs'
                                            alt='Imagen de la habitación'
                                            
                                            />
                                    </div>
                                    <div class='room-price-title'>
                                        <div class='room-name'>
                                            <h2>Penthouse Black</h2>
                                        </div>
                                        <div class='room-price'>
                                            <h2>{room[number]?.precio}{currency}/noche</h2>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="result-box">
                                <a href='/habitacion?t=${number}' class="default-tarjet">
                                    <div>
                                        <img 
                                            src='https://nicodev.s-ul.eu/pKAPd7Qs'
                                            alt='Imagen de la habitación'
                                            
                                            />
                                    </div>
                                    <div class='room-price-title'>
                                        <div class='room-name'>
                                            <h2>Penthouse Black</h2>
                                        </div>
                                        <div class='room-price'>
                                            <h2>{room[number]?.precio}{currency}/noche</h2>
                                        </div>
                                    </div>
                                </a>
                                <a href='/habitacion?t=${number}' class="default-tarjet">
                                    <div>
                                        <img 
                                            src='https://nicodev.s-ul.eu/pKAPd7Qs'
                                            alt='Imagen de la habitación'
                                            
                                            />
                                    </div>
                                    <div class='room-price-title'>
                                        <div class='room-name'>
                                            <h2>Penthouse Black</h2>
                                        </div>
                                        <div class='room-price'>
                                            <h2>{room[number]?.precio}{currency}/noche</h2>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="result-box">
                                <a href='/habitacion?t=${number}' class="default-tarjet">
                                    <div>
                                        <img 
                                            src='https://nicodev.s-ul.eu/pKAPd7Qs'
                                            alt='Imagen de la habitación'
                                            
                                            />
                                    </div>
                                    <div class='room-price-title'>
                                        <div class='room-name'>
                                            <h2>Penthouse Black</h2>
                                        </div>
                                        <div class='room-price'>
                                            <h2>{room[number]?.precio}{currency}/noche</h2>
                                        </div>
                                    </div>
                                </a>
                                <a href='/habitacion?t=${number}' class="default-tarjet">
                                    <div>
                                        <img 
                                            src='https://nicodev.s-ul.eu/pKAPd7Qs'
                                            alt='Imagen de la habitación'
                                            
                                            />
                                    </div>
                                    <div class='room-price-title'>
                                        <div class='room-name'>
                                            <h2>Penthouse Black</h2>
                                        </div>
                                        <div class='room-price'>
                                            <h2>{room[number]?.precio}{currency}/noche</h2>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="result-box">
                                <a href='/habitacion?t=${number}' class="default-tarjet">
                                    <div>
                                        <img 
                                            src='https://nicodev.s-ul.eu/pKAPd7Qs'
                                            alt='Imagen de la habitación'
                                            
                                            />
                                    </div>
                                    <div class='room-price-title'>
                                        <div class='room-name'>
                                            <h2>Penthouse Black</h2>
                                        </div>
                                        <div class='room-price'>
                                            <h2>{room[number]?.precio}{currency}/noche</h2>
                                        </div>
                                    </div>
                                </a>
                                <a href='/habitacion?t=${number}' class="default-tarjet">
                                    <div>
                                        <img 
                                            src='https://nicodev.s-ul.eu/pKAPd7Qs'
                                            alt='Imagen de la habitación'
                                            
                                            />
                                    </div>
                                    <div class='room-price-title'>
                                        <div class='room-name'>
                                            <h2>Penthouse Black</h2>
                                        </div>
                                        <div class='room-price'>
                                            <h2>{room[number]?.precio}{currency}/noche</h2>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </article>
                    </div>
                </section>
                <Footer />
            </body>
        </div>
    )
}

export default Reserva;