import './style.css'

function Signin(){
    return(
        <div>
            <div>
                <title>Sign In | Abraj Kudai</title>
            </div>
            <body>
                <section class="header">
                    <article class="headerbox">
                        <div>
                            <a class="headerlogo" href="index.html">
                                <img src="images/ui/iconheader.png"/></a>
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
                                href="alojamiento.html"
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
                    <section class="signcaja">
                        <section class="signbackground">
                            <img src="https://nicodev.s-ul.eu/2wafDffC"/> 
                        </section>
                        <article>
                            <h1>¡Bienvenido!</h1>
                            <p>Inicia Sesión para acceder a tu cuenta y explorar nuestras ofertas exclusivas</p>
                        </article>
                        <article>
                            <form method="post" action="/AbrajKudaiWeb/perfil.html">
                                <fieldset class="signin">
                                    <div class="signincampos">
                                        <label for="correo">
                                            <input type="email" id="correo" correo="correo"
                                            placeholder="Correo" required/>
                                        </label>
                                        <label>
                                            <input type="password" name="contraseña" placeholder="Contraseña"
                                            required/>
                                        </label>
                                    </div>
                                    <div class="signincheckbox">
                                        <label>
                                            <input type="checkbox"/>
                                            <span>¿Mantener sesión iniciada?</span>
                                        </label>
                                    </div>
                                    <div class="signpost">
                                        <div>
                                            <a href=""><p>Olvide mi contraseña</p></a>
                                            <a href="signup.html"><p>Registrarse</p></a>
                                        </div>
                                        <button type="submit">Ingresar</button>
                                    </div>
                                </fieldset>
                            </form>
                        </article>
                        <article>
                        </article>
                        <article class="conexion">
                            <p><strong>Conexión</strong></p>
                            <div class="conexionlinks">
                                <a href="index.html" target="_blank" class="google-btn">
                                    <img src="images/ui/google.png" class="google" alt="Iniciar con Google"/>
                                </a>
                                <a href="index.html" target="_blank" class="facebook-btn">
                                    <img src="images/ui/facebook.png" class="facebook" alt="Iniciar con Facebook"/>
                                </a>
                            </div>
                        </article>
                    </section>
                </main>
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

export default Signin;