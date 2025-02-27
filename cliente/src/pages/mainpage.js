import './style.css'

function Mainpage() {
    return(
        <div>
            <div>
                <title>Abraj Kudai</title>
            </div>
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
                                <fieldset method="post" action="reserva">
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
                    <section class="homeCont">
                        <article class="homeContArt">
                            <div>
                                <img src="https://nicodev.s-ul.eu/8XyS7Q0O" alt="Imágen relacionada al confort del hotel"/>
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
                                <img src="https://nicodev.s-ul.eu/VGk3hf96" alt="Imágen relacionada a las vistas del hotel"/>
                            </div>
                        </article>
                        <article class="homeContArt">
                            <div>
                                <img src="https://nicodev.s-ul.eu/VGk3hf96" alt="Imágen relacionada a las habitaciones del hotel"/>
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
                    <section class="hab">
                        <article class="habrow">
                            <a href="habitacion/juniorsuite">
                                <div class="tarjeta">
                                    <h3><em>Junior Suite</em></h3>
                                    <img src="https://nicodev.s-ul.eu/VfvJhItz" alt="Imagen de la Junior Suite" />
                                    <p>
                                        Ofrecemos un espacio generoso y cómodo, ideal para aquellos
                                        que buscan más amplitud. Equipada con una elegante zona de
                                        estar, estas suites proporcionan una estancia relajante y
                                        agradable.
                                    </p>
                                </div>
                            </a>
                            <a href="habitacion/executivesuite">
                                <div class="tarjeta">
                                    <h3><em>Executive Suite</em></h3>
                                    <img src="https://nicodev.s-ul.eu/bw4KjHpc" alt="Imagen de la Executive Suite" />
                                    <p>
                                        Diseñada para satisfacer las necesidades de los viajeros de 
                                        negocios y de placer. Con una sala de estar separada y una 
                                        zona de trabajo dedicada, ofrece un ambiente sofisticado y 
                                        profesional.
                                    </p>
                                </div> 
                            </a>
                            <a href="habitacion/deluxesuite">
                                <div class="tarjeta">
                                    <h3><em>Deluxe Suite</em></h3>
                                    <img src="https://nicodev.s-ul.eu/NqdOigvV" alt="Imagen de la Deluxe Suite" />
                                    <p>
                                        Redefine el concepto de lujo y confort. Con una sala de estar 
                                        independiente, decoracion refinada y vistas mejoradas, asegura 
                                        una experiencia superior para los huéspedes más exigentes.
                                    </p>
                                </div>
                            </a>
                            <a href="habitacion/presidentialsuite">
                                <div class="tarjeta">
                                    <h3><em>Presidential Suite</em></h3>
                                    <img src="https://nicodev.s-ul.eu/tjaHUBsG" alt="Imagen de la Presidential Suite" />
                                    <p>
                                        Representa el pináculo de del lujo y exclusividad. Con múltiples
                                        habitaciones, una amplia sala de estar, comedor privado y servicios 
                                        adicionales como jacuzzi, garantiza una experiencia excepcional.
                                    </p>    
                                </div>
                            </a>
                            <a href="habitacion/familysuite">
                                <div class="tarjeta">
                                    <h3><em>Family Suite</em></h3>
                                    <img src="https://nicodev.s-ul.eu/pct9Cpj4" alt="Imagen de la Family Suite" />
                                    <p>
                                        Diseñada para la comodidad de las familias. Con múltiples habitaciones 
                                        y amplios espacios de estar, ofrece todo lo necesario para que cada 
                                        miembro de la familia se sienta como en casa.
                                    </p>
                                </div>
                            </a>
                            <a href="habitacion/honeymoonsuite">
                                <div class="tarjeta">
                                    <h3><em>Honeymoon Suite</em></h3>
                                    <img src="https://nicodev.s-ul.eu/eVEkueHl" alt="Imagen de la Honeymoon Suite" />
                                    <p>
                                        Es el refugio perfecto para parejas en su luna de miel. Decorada
                                        con un toque romántico y equipada con caracteristicas exclusivas, creando
                                        un ambiente intimo y encantador.
                                    </p>
                                </div>
                            </a>
                            <a href="habitacion/honeymoonsuite">
                                <div class="tarjeta">
                                    <h3><em>Golden Suite</em></h3>
                                    <img src="https://nicodev.s-ul.eu/eVEkueHl" alt="Imagen de la Honeymoon Suite" />
                                    <p>
                                        Es el refugio perfecto para parejas en su luna de miel. Decorada
                                        con un toque romántico y equipada con caracteristicas exclusivas, creando
                                        un ambiente intimo y encantador.
                                    </p>
                                </div>
                            </a>
                            <a href="habitacion/honeymoonsuite">
                                <div class="tarjeta">
                                    <h3><em>Golden Suite</em></h3>
                                    <img src="https://nicodev.s-ul.eu/eVEkueHl" alt="Imagen de la Honeymoon Suite" />
                                    <p>
                                        Es el refugio perfecto para parejas en su luna de miel. Decorada
                                        con un toque romántico y equipada con caracteristicas exclusivas, creando
                                        un ambiente intimo y encantador.
                                    </p>
                                </div>
                            </a>
                        </article>
                        <article class='habfin'>
                            <h1>No esperes más, ¡Vive una experiencia unica!</h1>
                            <a href='reserva'>
                                <button>Reserva ahora</button>
                            </a>
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
    );
}

export default Mainpage;

