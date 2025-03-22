import './style.css'
import Footer from './components/footer.js';

function Eventos(){
    return(
        <div>
            <div>
                <title>Eventos | Abraj Kudai</title>
            </div>
            <body>
                <section class="header">
                    <article class="bannerbox">
                        <img src="https://nicodev.s-ul.eu/7CgDXBBX" 
                            title="Apartado del hotel"
                            alt="Imagen de un apartado del hotel"
                            class="homeImg"/>
                        <div class="bannertitle">
                            <div>
                                <h1><strong>Eventos</strong></h1>
                            </div>
                            <div class="bannerp">
                                <p>
                                    Descubra los eventos más exclusivos en el Hotel Abraj Kudai. 
                                    Desde celebraciones privadas hasta conferencias de prestigio, 
                                    nuestro equipo se encarga de cada detalle para que su evento 
                                    sea un éxito inolvidable.
                                </p>
                            </div>
                        </div>
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
                <main>
                    <section class="eventcont">
                        <a href="signin">
                            <article class="mainevent">
                                <a href="signin">
                                    <img src="https://nicodev.s-ul.eu/vOUPwrhG" alt="Concierto Exclusivo"/>
                                    <div class="maineventext">
                                        <h2>BILLIE EILISH EN EXCLUSIVA EN ABRAJ KUDAI</h2>
                                        <button>
                                            <strong>Reservar Tickets</strong>
                                        </button>
                                    </div>
                                </a>
                            </article>
                        </a>
                        <article class="restevent">
                            <div class="eventarjet">
                                <div class="estado">
                                    <p><strong>En marcha</strong> Hasta 25 Ago</p>
                                </div>
                                <div>
                                    <img src="https://nicodev.s-ul.eu/waDYn6v1" alt="Eventos exclusivos"/>
                                </div>
                                <div>
                                    <p>
                                        El Consumer Electronics Show (CES) es el epicentro de la innovación global, 
                                        y en el Hotel Abraj Kudai, ofrecemos el escenario perfecto para visionarios 
                                        y creadores. Con tecnología de punta, lujo y confort, hacemos que su 
                                        experiencia durante el CES sea extraordinaria
                                    </p>
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