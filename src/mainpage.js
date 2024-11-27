import './style.css'

function Mainpage() {
    return(
        <div>
            <body>
                <section class="header">
                    <article class="bannerbox">
                        <img src="https://nicodev.s-ul.eu/NF7l0Fs8" 
                            title="Apartado del hotel"
                            alt="Imagen de un apartado del hotel"
                            class="homeImg"/>
                        <div class="bannertitle">
                            <div>
                                <h1><strong>Abraj Kudai</strong></h1>
                            </div>
                            <div class="bannerp">
                                <p>
                                    Redefine tu estancia en <em>La Meca</em> con el lujo sin igual del Hotel Abraj Kudai.
                                    Tu oasis de <strong>confort</strong> y <strong>elegancia</strong> te espera.
                                </p>
                            </div>
                            <div>
                                <fieldset method="post" action="alojamiento.html">
                                    <div class="indexfieldset">
                                        <label>
                                            <div class="bannerflexcolumn">
                                                <div class="bannerflexrow">
                                                    <span>Desde</span>
                                                    <span>Hasta</span>
                                                </div>
                                                <div class="bannerflexrow">
                                                    <input type="date" name="decha_desde" required/>
                                                    <input type="date" name="fecha_hasta" required/>
                                                </div>
                                            </div>
                                        </label>
                                        <button type="submit">Reservar</button>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </article>
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
                <main>
                    <section class="homeCont">
                        <article class="homeContArt">
                            <div>
                                <img src="https://nicodev.s-ul.eu/8XyS7Q0O"/>
                            </div>
                            <div>
                                <h2>Confort</h2>
                                <p>
                                    En el Hotel Abraj Kudai, el confort es nuestra máxima prioridad. 
                                    Cada rincón de nuestras instalaciones ha sido cuidadosamente diseñado 
                                    para ofrecer una atmósfera de relajación y bienestar. Nuestras amplias 
                                    y elegantes habitaciones están equipadas con amenidades de primera clase, 
                                    que van desde camas lujosas hasta tecnología de vanguardia, todo pensado 
                                    para su comodidad.
                                </p>
                            </div>
                        </article>
                        <article class="homeContArt">
                            <div>
                                <h2>
                                    Vistas
                                </h2>
                                <p>
                                    Déjate maravillar por las impresionantes vistas panorámicas de La Meca desde 
                                    cada rincón del Hotel Abraj Kudai. Nuestras habitaciones y suites están 
                                    estratégicamente ubicadas para ofrecer una experiencia visual inigualable, 
                                    permitiéndote contemplar la majestuosidad de la ciudad sagrada en todo momento. 
                                </p>
                            </div>
                            <div>
                                <img src="https://nicodev.s-ul.eu/VGk3hf96"/>
                            </div>
                        </article>
                        <article class="homeContArt">
                            <div>
                                <img src="https://nicodev.s-ul.eu/VGk3hf96"/>
                            </div>
                            <div>
                                <h2>Habitaciones</h2>
                                <p>
                                    Nuestras habitaciones, cuidadosamente diseñadas y decoradas con un estilo 
                                    elegante, brindan el refugio perfecto para relajarse después de un día de 
                                    exploración o trabajo. Equipadas con tecnología moderna, desde sistemas de 
                                    entretenimiento avanzados hasta conexión Wi-Fi de alta velocidad, nuestras 
                                    habitaciones ofrecen todo lo necesario para su comodidad.
                                </p>
                            </div>
                            </article>
                    </section>
                </main>
                <footer>
                    <section class="footer">
                        <article class="footerlogo">
                            <img src="https://nicodev.s-ul.eu/128gaUMW"/>
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
    );
}

export default Mainpage;

