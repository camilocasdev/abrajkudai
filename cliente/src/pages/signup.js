import './style.css'

function Signup(){
    return(
        <div>
            <div>
                <title>Sign Up | Abraj Kudai</title>
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
                                <a href="alojamiento">Alojamiento</a>
                            </div>
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
                    <div class="fix"></div>
                    <section class="signcaja">
                        <article>
                            <h1>¡Registrate!</h1>
                            <p>Inicia Sesión para acceder a todos los beneficios</p>
                        </article>
                        <article class="conexion">
                            <div class="conexionlinks">
                                <a href="ignore" target="_blank" class="google-btn">
                                    <ion-icon class="google" alt="Ingresar con Google" name="logo-google"></ion-icon>
                                </a>
                                <a href="ignore" target="_blank" class="facebook-btn">
                                    <ion-icon class="facebook" alt="Ingresar con Facebook" name="logo-facebook"></ion-icon>
                                </a>
                            </div>
                            <p><strong>O</strong></p>
                        </article>
                        <article class="signincampos">
                            <form method="post" action="/AbrajKudaiWeb/perfil">
                                <fieldset class="signup">
                                    <div class="signupclose">
                                        <label for="nombre">
                                            <input type="text" id="nombre" name="nombre"
                                            placeholder="Nombre/s" required/>
                                        </label>
                                        <label for="apellido">
                                            <input type="text" id="apellido" name="apellido"
                                            placeholder="Apellido/s" required/>
                                        </label>
                                    </div>
                                    <div class="signupclose">
                                        <div class="signshort">
                                            <label for="pais">
                                                <input type="text" id="pais" name="pais"
                                                placeholder="Pais" required/>
                                            </label>
                                        </div> 
                                        <div class="signmedium">
                                            <label for="identificacion">
                                                <input type="number" inputmode="numeric" id="identificacion" name="identificacion"
                                                placeholder="Identificacion" required/>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="signupclose">
                                        <label for="tel">
                                            <input type="tel" id="tel" tel="tel"
                                            placeholder="Teléfono" required/>
                                        </label>
                                        <label for="correo">
                                            <input type="email" id="correo" name="correo"
                                            placeholder="Correo" required/>
                                        </label>
                                    </div>
                                    <div class="signlong">
                                        <label for="contraseña">
                                            <input type="password" name="contraseña" placeholder="Contraseña"
                                            required/>
                                        </label>
                                    </div>
                                    <div class="signlong">
                                        <label for="contraseña">
                                            <input type="password" name="contraseña" placeholder="Repetir Contraseña"
                                            required/>
                                        </label>
                                    </div>
                                    <div class="chulito">
                                        <label>
                                            <div class="chulitofix">
                                                <div>
                                                    <input type="checkbox"/>
                                                    <span>Creando una cuenta, aceptas los Términos y Condiciones y la Política de Privacidad.</span>
                                                </div>
                                                <div>
                                                    <input type="checkbox"/>
                                                    <span>Deseas recibir correos de ofertas y promociones?</span>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                    <div class="signpost">
                                        <div>
                                            <a href="signin"><p>¿Ya tienes cuenta? Inicia Sesión</p></a>
                                            <a href="reportproblem"><p>Reportar Problemas</p></a>
                                        </div>
                                        <button type="submit">Registrarse</button>
                                    </div>
                                </fieldset>
                            </form>
                        </article>
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

export default Signup;