import '../style.css'

function Footer(){
    return(
        <footer>
            <section className="footer">
                <article className="footerlogo">
                    <img src="https://nicodev.s-ul.eu/128gaUMW" alt="Logotipo del hotel piedepagina"/>
                    <h3>Abraj Kudai Hotel</h3>
                    <p>أبراج كدي</p>
                </article>
                <article className="footercont">
                    <div>
                        <h3><strong>Acerca del Hotel</strong></h3>
                    </div> 
                    <div className="footercontlv2">
                        <div className="footerubicontact">
                            <div className="footerp1">
                                <div>
                                <a href="https://www.google.com/maps/place/Abraj+Kudai/@21.4016468,39.8269677,845m/data=!3m1!1e3!4m6!3m5!1s0x15c205ab3d1054c5:0x7706c3b19d8c5606!8m2!3d21.4016468!4d39.8288002!16s%2Fm%2F0138vpf8?entry=ttu&g_ep=EgoyMDI1MDMxNi4wIKXMDSoASAFQAw%3D%3D" 
                                    target="_blank"
                                    rel="noreferrer"
                                    >
                                        <ion-icon className="icubicacion" name="location"></ion-icon>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.google.com/maps/place/Abraj+Kudai/@21.4016468,39.8269677,845m/data=!3m1!1e3!4m6!3m5!1s0x15c205ab3d1054c5:0x7706c3b19d8c5606!8m2!3d21.4016468!4d39.8288002!16s%2Fm%2F0138vpf8?entry=ttu&g_ep=EgoyMDI1MDMxNi4wIKXMDSoASAFQAw%3D%3D" 
                                    target="_blank"
                                    rel="noreferrer">
                                            <span>King Abdul Aziz Road, Manafia District, La Meca, Arabia Saudita</span>
                                    </a>
                                </div>
                            </div>
                            <div className="footerp2">
                                <div>
                                    <ion-icon className="icontacto" name="call"></ion-icon>
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
                        <div className="footerp3">
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
                    <div className="footercredit">
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
    )
}

export default Footer;