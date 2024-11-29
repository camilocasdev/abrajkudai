import './style.css'

let $usuario = "Camilo"
let $habitacion = "Gold Suite"
let $currentRoom = $habitacion
let $proxReserva = null

let $proxResShow

if ($proxReserva === null) {
    $proxResShow = "No hay reserva proxima"
}

let $historial = "Próximamente"

function Perfil(){
    return(
        <div>
            <div>
                <title>Perfil | Abraj Kudai</title>
            </div>
            <body>
                <section class="header">
                    <article class="bannerbox">
                        <img src="${currentroom}" 
                            title="Habitacion Actual"
                            alt="Imagen de la habitacion actual del usuario"
                            />
                    </article>
                    <article class="headerbox">
                        <div>
                            <a class="headerlogo" href="/">
                                <img src="images/ui/iconheader.png"/></a>
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
                                target="_blank"
                                rel="noreferrer">
                                Reservar
                                </a>
                            </div>
                        </div>
                        <div class="perfil">
                            <a href="signin">
                                <img src="https://nicodev.s-ul.eu/Dt8gET3T"/>
                            </a>
                        </div>
                    </article>
                </section>
                <section class="banner">
                    <article>
                        Habitacion de backgroun blurred
                    </article>
                    <article class="currentroom">
                        <img src="https://nicodev.s-ul.eu/VfvJhItz" alt="Habitación Actual"/>
                        <div class="curRoom">
                            <h1>¡Hola! {$usuario}</h1>
                            <p> Habitacion Actual {$habitacion}</p>
                        </div>
                    </article>            
                </section>
                <section class="perfcontent">
                    <article>
                        <nav>
                            <div class="navbar">
                                <a href="#reservas"><strong>Reservas</strong></a>
                                <a href="#configuracion"><strong>Configuración</strong></a>
                                <a href="signout.js"><strong>Cerrar Sesión</strong></a>                    
                            </div>
                        </nav>
                    </article>
                    <article id="reservas">
                        <div>
                            <h2>Reserva Actual</h2>
                            <div class="perftarjet">
                                <div>
                                    <img src="https://nicodev.s-ul.eu/VfvJhItz"/>
                                </div>
                                <div>
                                    <h3>{$currentRoom}</h3>
                                    <p>Lorem ipsum</p>
                                </div>
                            </div>             
                        </div>
                        <div>
                            <h2>Reserva Próximas</h2>
                            <div class="perftarjet">
                                <div>
                                    <img src="images/${currentRoom}"/>
                                </div>
                                <div>
                                    <h3>{$proxResShow}</h3>
                                    <p>Lorem ipsum</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="histcontein">
                                <h2>Historial de Reservas</h2>
                                <div class="perftarjet">
                                    <div>
                                        <img src="https://nicodev.s-ul.eu/VfvJhItz"/>
                                    </div>
                                    <div>
                                        <h3>{$historial}</h3>
                                        <p>Lorem ipsum</p>
                                    </div>
                                </div>
                                <div class="perftarjet">
                                    <div>
                                        <img src="images/${currentRoom}"/>
                                    </div>
                                    <div>
                                        <h3>{$historial}</h3>
                                        <p>Lorem ipsum</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article id="configuracion">
                        <div>
                            <p>Nada que ver aca</p>
                        </div>
                    </article>
                </section>
            </body>
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
        </div>
    )
}

export default Perfil;