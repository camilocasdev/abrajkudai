import '../style.css'
import { useEffect } from 'react';

function Header(){
    
    useEffect(() => {

        const scroll = window.scrollY

        if (scroll === 0) {
            const headerbox = document.querySelector('.headerbox')
            if (headerbox){
                try{
                    headerbox.style.backgroundColor = 'rgba(70, 77, 112, 0.7)';
                    headerbox.style.margin = '1.3rem 0rem';
                } catch (error) {
                    console.error(error)
                }
            }
            
        }
    }, [])
    return(
        <article className="headerbox">
            <div>
                <a className="headerlogo" href="/">
                    <img src="https://nicodev.s-ul.eu/hJFC5YUy" alt="Logotipo del Hotel" />
                </a>
            </div>
            <div className="headeranchores">
                <div>
                    <a href="/amenidades">Amenidades</a>
                </div>
                <div>
                    <a href="/eventos">Eventos</a>
                </div>
                <div>
                    <a href="/reserva" rel="noreferrer">
                        Reservar
                    </a>
                </div>
            </div>
            <div className="perfil">
                <a href="perfil#reservas">
                    <ion-icon name="person-circle" alt="Icono de perfil"></ion-icon>
                </a>
            </div>
            <div className='smartphone-menu'>
                <a>
                    <ion-icon name="menu-outline" alt="Menu Desplegable"></ion-icon>
                </a>
            </div>
        </article>  
)
}

export default Header 