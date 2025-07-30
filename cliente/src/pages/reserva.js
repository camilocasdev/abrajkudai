import './style.css';
import Footer from './components/footer.js';
import Header from './components/header.js';

import React, {useState, useEffect} from 'react';


function Reserva(){

    const [resultados, setResultados] = useState([{}]);
    const [error, setError] = useState()


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
                    throw error;
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
        <div id='root-m'>
            <div>
                <title>Reservas | Abraj Kudai</title>
            </div>
            <body>
                <section className="header">
                    <Header />
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