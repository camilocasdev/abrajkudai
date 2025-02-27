import '../style.css'

function Presidentialsuite(){
    return(
        <div>
            <div>
                <title>Presidential Suite | Abraj Kudai</title>
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
                <main>
                    <section class="habitacion"> 
                        <article class="habimgcontein"> 
                            <div class="habimgtext">
                                <h2>Presidential Suite</h2>
                            </div>
                            <div class="habimgwidth">
                                <img src="https://nicodev.s-ul.eu/tjaHUBsG" alt="Imagen de la habitación"/>
                            </div>
                        </article>
                        <article class="habdescontein"> 
                            <div>
                                <h2><strong>Presidential Suite</strong></h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum culpa libero ipsa repudiandae voluptates pariatur reprehenderit obcaecati cum non doloribus laboriosam doloremque voluptatem quo, officia dicta fugit soluta explicabo expedita?
                                </p>
                            </div>
                            <div class="habconfigres">
                                <fieldset>
                                    <form method="post" action="/pago">
                                        <label>
                                            <div class="habformdiv">
                                                <div class="habfieldsetdate">
                                                    <span>Desde</span>
                                                    <span>Hasta</span>
                                                </div>
                                                <div class="habfieldsetdate">
                                                    <input type="date" name="decha_desde" required/>
                                                    <input type="date" name="fecha_hasta" required/>
                                                </div>
                                                <div class="habfieldsetcant">
                                                    <input type="number" name="cantidad" placeholder="Cantidad"/>
                                                </div>
                                                <div class="habformdiv">
                                                    <div>
                                                        <span><strong>Servicios Extra</strong></span>
                                                    </div>
                                                    <div>
                                                        <input type="checkbox" name="bieneSpa"/>
                                                        <span>Bienestar y Spa</span>
                                                    </div>
                                                    <div>
                                                        <input type="checkbox" name="limpieza"/>
                                                        <span>Limpieza diaria</span>
                                                    </div>
                                                    <div>
                                                        <input type="checkbox" name="cuidadoInf"/>
                                                        <span>Cuidado Infantil</span>
                                                    </div>
                                                    <div>
                                                        <input type="checkbox" name="confidence"/>
                                                        <span>Confidencialidad</span>
                                                    </div>
                                                    <div>
                                                        <span><strong>Apartar Zonas Sociales</strong></span>
                                                    </div>
                                                    <div>
                                                        <span>Salon de Eventos</span>
                                                        <input type="datetime-local" name="salEvent"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </label>
                                        <button type="submit">Reservar</button>
                                    </form>
                                </fieldset>
                            </div>
                        </article>
                    </section>
                    <section class="sugerencias"> 
                        <div class="cajaSug">
                            <h2 style={{color: "#131313"}}>sugerencias</h2>
                        </div>
                    </section>
                </main>
                <footer>
                    <section class="footer">
                        <article class="footerlogo">
                            <img src="https://nicodev.s-ul.eu/128gaUMW" alt="Logotipo del hotel piedepagina"/>
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
                                        <div>
                                        <a href="https://www.google.com/maps/place/Abraj+Kudai/@21.4022905,39.8278211,18.04z" 
                                            target="_blank"
                                            rel="noreferrer"
                                            >
                                                <ion-icon class="icubicacion" name="location"></ion-icon>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="https://www.google.com/maps/place/Abraj+Kudai/@21.4022905,39.8278211,18.04z" 
                                            target="_blank"
                                            rel="noreferrer">
                                                    <span>King Abdul Aziz Road, Manafia District, La Meca, Arabia Saudita</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="footerp2">
                                        <div>
                                            <ion-icon class="icontacto" name="call"></ion-icon>
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
                                            <a href="manualdeusuario/#terminosycondiciones">Términos y Condiciones</a>
                                        </div>
                                        <div>
                                            <a href="manualdeusuario/#politicasdeprivacidad">Políticas de Privacidad</a>
                                        </div> 
                                        <div>
                                            <a href="manualdeusuario/#politicasdecookies">Políticas de Cookies</a>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <a href="avisoslegales">Avisos Legales</a>
                                        </div>
                                        <div>
                                            <a href="faq">FAQ</a>
                                        </div> 
                                        <div>
                                            <a href="faq/mapadelsitio">Mapa del Sitio</a>
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

export default Presidentialsuite;