import './style.css'
import Footer from './components/footer.js';
import Header from './components/header.js';

function Eventos(){
    return(
        <div id='root-m'>
            <div>
                <title>Eventos | Abraj Kudai</title>
            </div>
            <body>
                <section class="header">
                    <article class="banner-box">
                        <img 
                            src="https://nicodev.s-ul.eu/7CgDXBBX" 
                            title="Apartado del hotel"
                            alt="Imagen de los eventos generales del hotel"
                            class="homeImg"
                        />
                        <div class="banner-cont">
                            <div className='banner-cont-title'>
                                <h1><strong>Eventos</strong></h1>
                            </div>
                            <div class="banner-cont-description">
                                <p>
                                    Las amenidades del <strong>Hotel Abraj Kudai</strong> estan diseñadas para brindar
                                    una experiencia de lujo incomparable. Cada detalle esta pensado para
                                    su comodidad y bienestar.
                                </p>
                            </div>
                        </div>
                    </article>
                    <Header />
                </section>
                <main>
                    <section class="event-box">
                        <article class="main-event">
                            <a href="signin">
                                <img src="https://nicodev.s-ul.eu/nYBTHVf3" alt="Concierto Exclusivo"/>
                                <div class="main-event-content">
                                    <h2>MAHER ZAIN EN EXCLUSIVA EN ABRAJ KUDAI</h2>
                                    <button>
                                        <strong>Reservar Tickets</strong>
                                    </button>
                                </div>
                            </a>
                        </article>
                        <article class="other-events">
                            <div class="other-events-tarjet">
                                <div class="estado">
                                    <p><strong>En marcha</strong> Hasta 25 Ago</p>
                                </div>
                                <div>
                                    <img src="https://nicodev.s-ul.eu/waDYn6v1" alt="Eventos exclusivos"/>
                                </div>
                                <div className="other-events-tarjet-content">
                                    <div>
                                        <h2>CES 2025</h2>
                                        <p>
                                            El Consumer Electronics Show (CES) es el epicentro de la innovación global, 
                                            y en el Hotel Abraj Kudai, ofrecemos el escenario perfecto para visionarios 
                                            y creadores. Con tecnología de punta, lujo y confort, hacemos que su 
                                            experiencia durante el CES sea extraordinaria
                                        </p>
                                    </div>
                                    <p><strong>Ubicación: Mega Salón de Eventos 101</strong></p>
                                </div>
                            </div>
                        </article>
                    </section>
                </main>
                <Footer />
            </body>
        </div>
    )
}

export default Eventos;