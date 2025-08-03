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
            <a key={i} href={`/habitacion?t=${i}`} className="default-tarjet">
                <div>
                    <img 
                        src={e?.imagen}
                        alt='Imagen de la habitación'
                    />
                </div>
                
                <div className='room-content'>
                    <div className='room-name'>
                        <h2>{e?.nombre}</h2>
                    </div>
                    <div className='room-content-price'>
                        <h2>${e?.precio}<span>/noche</span></h2>
                        <div className='room-price-button'>
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
            <div>
                <section className="header">
                    <Header />
                </section>
                <section className="res-rooms-section">
                    <div className="fixer">
                        <article className='res-room-title'>
                            <h2>Reservas Disponibles</h2>
                            <p>Encuentra tu alojamiento ideal para tu próxima estancia.</p>
                        </article>
                        <article className='res-filter-box'>
                            <section className='res-filter-box-p1'>
                                <a className='filter-button' hidden>
                                    <ion-icon className="filter-icon" name="options"></ion-icon>
                                </a>
                                <div className="filter-title">
                                    <p>Filtros</p>
                                </div>
                                <div className="filters">
                                    <div className='filter-fix'>
                                        <div className='filter-date-from'>
                                            <a style={{'pointerEvents': 'none'}} >
                                                Desde
                                            </a>
                                        </div>
                                        <div>
                                            <a className='filter-date-to' style={{'pointerEvents': 'none'}} >
                                                Hasta
                                            </a>
                                        </div>
                                        <div>
                                            <a className='quantity' style={{'pointerEvents': 'none'}} >
                                                Cantidad
                                            </a>
                                        </div>
                                        <div>
                                            <a className='services' style={{'pointerEvents': 'none'}} >
                                                Servicios
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className='res-filter-box-p1'>
                                <a className='filter-button' hidden>
                                    <ion-icon name="reorder-four"></ion-icon>
                                </a>
                                
                                <div className="filters">
                                    <p>Ordenar por</p>
                                </div>
                            </section>
                        </article>
                        <article className="result-page">
                            <div className="result-box">
                                {showResultados}
                            </div>
                        </article>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    )
}

export default Reserva;