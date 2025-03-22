import './style.css'
import Footer from './components/footer.js';

function Amenidades(){
    return(
        <div>
            <div>
                <title>Amenidades | Abraj Kudai</title>
            </div>
            <body>
                <section class="header">
                    <article class="bannerbox">
                        <img src="https://nicodev.s-ul.eu/MqywaNIk" 
                            title="Apartado del hotel"
                            alt="Imagen de un apartado del hotel"
                            class="homeImg"/>
                        <div class="bannertitle">
                            <div>
                                <h1><strong>Amenidades</strong></h1>
                            </div>
                            <div class="bannerp">
                                <p>
                                    Las amenidades del Hote  Abraj Kudai están diseñadas para brindar 
                                    una experiencia de lujo incomparable. Desde el spa rejuvenecedor 
                                    hasta las instalaciones de fitness de última generación, cada detalle 
                                    esta pensado para comodidad su comodidad y bienestar.
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
                    <section class="ameniscroll">
                        <article class="amensep">
                            <div class="ameniscrolltarjet">
                                <div>
                                    <img src="https://nicodev.s-ul.eu/XUCsO1nU" alt="Imagen de la buffete"/>
                                    <div class="amenicont">
                                        <h2>
                                            Buffet tipo Gourmet
                                        </h2>
                                        <button href="signin">Acceder</button>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article class="amensep">
                            <div class="ameniscrolltarjet">
                                <div>
                                    <img src="https://nicodev.s-ul.eu/tWQ4Cv2w" alt="Imagen de la piscina"/>
                                    <div class="amenicont">
                                        <h2>
                                            Spa y Relajación
                                        </h2>
                                        <button href="signin">Acceder</button>
                                    </div>
                                </div>
                            </div>
                        </article> 
                        <article class="amensep">
                            <div class="ameniscrolltarjet">
                                <div>
                                    <img src="https://nicodev.s-ul.eu/Tq2u3YvU" alt="Imagen del restaurante"/>
                                    <div class="amenicont">
                                        <h2>
                                            Restaurantes Top
                                        </h2>
                                        <button href="signin">Acceder</button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </section> 
                    <section class="amenip2">
                        <article class="text">
                            <p>
                                Disfruta del lujo y confort: spa, 
                                restaurates gourmet, gimnasio y entretenimiento de clase mundial. Cada detalle 
                                esta pensado pra hacer tu estancia inolvidable.
                            </p>
                        </article>
                        <article>
                            <p>Imagenes</p>
                        </article>
                    </section>
                </main>
                <Footer />
            </body>
        </div>
    )
}

export default Amenidades;