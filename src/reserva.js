import './style.css'

function Reserva(){
    return(
        <div>
            <div>
                <title>Reservas | Abraj Kudai</title>
            </div>
            <body>
                <section class="header">
                    <article class="headerbox">
                        <div>
                            <a class="headerlogo" href="index.html">
                                <img src="https://nicodev.s-ul.eu/hJFC5YUy"/></a>
                        </div>
                        <div class="headeranchores">
                            <div>
                                <a href="alojamiento.html">Alojamiento</a>
                            </div>
                            <div>
                                <a href="amenidades.html">Amenidades</a>
                            </div>
                            <div>
                                <a href="eventos.html">Eventos</a>
                            </div>
                            <div>
                                <a 
                                href="reserva.html"
                                target="_blank"
                                rel="noreferrer">
                                Reservar
                                </a>
                            </div>
                        </div>
                        <div class="perfil">
                            <a href="signin.html">
                                <img src="https://nicodev.s-ul.eu/Dt8gET3T"/>
                            </a>
                        </div>
                    </article>
                </section>
                <section>
                    <h1>Lista de Reserva</h1>
                    <article>
                        <p>Barra de navegación de habitaciones</p>
                    </article>
                    <article>
                        <p>Resultado de habitaciones (default=relevancia)</p>
                    </article>
                </section>
                <footer>
                    <section class="footer">
                        <article class="footerlogo">
                            <img src="images/ui/icon.png"/>
                            <h3>Abraj Kudai Hotel</h3>
                            <p>أبراج كدي</p>
                        </article>
                        <article class="footercont">
                            <div>
                                <h3><strong>Acerca del Hotel</strong></h3>
                            </div> 
                            <div class="footercontlv2">
                                <div class="footerubicontact">
                                    <div class="footerp1">
                                        <a href="https://www.google.com/maps/place/Abraj+Kudai/@21.4022905,39.8278211,18.04z" 
                                        target="_blank">
                                                <img class="icubicacion" src="images/ui/ubicacion.png"/>
                                        </a>
                                        <a href="https://www.google.com/maps/place/Abraj+Kudai/@21.4022905,39.8278211,18.04z" 
                                        target="_blank">
                                                <span>King Abdul Aziz Road, Manafia District, La Meca, Arabia Saudita</span>
                                        </a>
                                    </div>
                                    <div class="footerp2">
                                        <div>
                                            <img class="icontacto" src="images/ui/llamada.png"/>
                                        </div>
                                        <div>
                                            <div>
                                                <a href="mailto:support@abrajkudai.com">support@abrajkudai.com</a>
                                            </div>
                                            <div>
                                                <a href="tel:+966-29301-48939">Llamanos!</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="footerp3">
                                    <div>
                                        <div>
                                            <a>Términos y Condiciones</a>
                                        </div>
                                        <div>
                                            <a>Políticas de Privacidad</a>
                                        </div> 
                                        <div>
                                            <a>Políticas de Cookies</a>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <a>Avisos Legales</a>
                                        </div>
                                        <div>
                                            <a>FAQ</a>
                                        </div> 
                                        <div>
                                            <a>Mapa del Sitio</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="footercredit">
                                <p>
                                    El Hotel Abraj Kudai, diseñado por Dar Al-Handasah, representa una obra
                                    maestra de la arquitectura moderna en le corazon de La Meca. Este sitio
                                    web ha sido desarrollado en colaboración con 404 Developers, garantizando
                                    uan experiencia digital excepcional para nuestros huéspedes.
                                </p>
                            </div>
                        </article>
                    </section>
                </footer>
            </body>
        </div>
    )
}

export default Reserva;