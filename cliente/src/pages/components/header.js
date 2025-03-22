import '../style.css'

function Header(){
    return(
        <section className="header">
            <article className="headerbox">
                <div>
                    <a className="headerlogo" href="/">
                        <img src="https://nicodev.s-ul.eu/hJFC5YUy" alt="Logotipo del Hotel" /></a>
                </div>
                <div className="headeranchores">
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
                <div className="perfil">
                    <a href="signin">
                        <ion-icon name="person-circle" alt="Icono de perfil"></ion-icon>
                    </a>
                </div>
            </article>
        </section>
    )
}

export default Header 