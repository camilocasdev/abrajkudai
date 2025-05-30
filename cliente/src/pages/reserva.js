import './style.css';
import Footer from './components/footer.js';

import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function Reserva(){

    const [resultados, setResultados] = useState([{}]);
    const [error, setError] = useState()

    const navigate = useNavigate();

    useEffect(() => {

        const resultados = async () => {
    
            try {
                const response = await fetch("/api/public/roomtype/get", {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                
                const data = await response.json()

                if (!data){
                    throw 1;
                }
                setResultados(data.data)
            } catch (error) {
                setError(error)
                console.error('Error Inesperado', error)
            }
        }

        resultados().catch(error => console.error(error));
    }, [])

    const showResultados = resultados.map((e, i) => {
        return(
            <a href={`/habitacion?t=${i}`} class="default-tarjet">
                <div>
                    <img 
                        src={e?.imagen}
                        alt='Imagen de la habitación'
                    />
                </div>
                
                <div class='room-content'>
                    <div class='room-name'>
                        <h2>{e?.nombre}</h2>
                    </div>
                    <div class='room-content-price'>
                        <h2>${e?.precio}<span>/noche</span></h2>
                        <div class='room-price-button'>
                            <h3>Reservar</h3>
                        </div>
                    </div>
                </div>
            </a>
        )
    });


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
                        <article class='res-filter-box'>
                            <section class='res-filter-box-p1'>
                                <a class='filter-button' hidden>
                                    <ion-icon className="filter-icon" name="options"></ion-icon>
                                </a>
                                <div class="filter-title">
                                    <p>Filtros</p>
                                </div>
                                <div class="filters">
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
                            </section>
                            <section class='res-filter-box-p1'>
                                <a class='filter-button' hidden>
                                    <ion-icon name="reorder-four"></ion-icon>
                                </a>
                                
                                <div class="filters">
                                    <p>Ordenar por</p>
                                </div>
                            </section>
                        </article>
                        <article class="result-page">
                            <div class="result-box">
                                {showResultados}
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