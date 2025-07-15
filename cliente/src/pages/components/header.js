import '../style.css'
import { useEffect } from 'react';

function Header(){

    useEffect(() => {
        const headerbox = document.querySelector('.headerbox');
        const anchores = document.querySelectorAll('.headerbox a')

        const handleScroll = () => {
            const scroll = window.scrollY;

            if (headerbox) {
                if (scroll === 0) {
                    headerbox.style.backgroundColor = 'rgba(70, 77, 112, 0.7)';
                    headerbox.style.margin = '1.3rem 0rem';
                } else if (scroll >= 200) {
                    headerbox.style.backgroundColor = 'transparent';
                    headerbox.style.margin = '.5rem 0rem';
                }   
            }

            if (anchores) {
                if (scroll === 0) {
                    anchores.forEach(anchor => anchor.style.opacity = '1');
                } else if ( scroll >= 200) {
                    anchores.forEach(anchor => anchor.style.opacity = '0.5');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Llamamos a la función una vez para el estado inicial
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return(
        <article className="headerbox">
            <div>
                <a href="/" className="headerlogo">
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
                <button>
                    <ion-icon name="menu-outline" alt="Menu Desplegable"></ion-icon>
                </button>
            </div>
        </article>  
)
}

export default Header 