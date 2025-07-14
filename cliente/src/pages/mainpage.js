import './style.css';
import Footer from './components/footer.js';
import Header from './components/header.js'
import { useEffect } from 'react';

function Mainpage() {

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
        <div>
            <div>
                <title>Abraj Kudai</title>
            </div>
            <body>
                <section class="header">
                    <article class="banner-box">
                        <img 
                            src="https://nicodev.s-ul.eu/NF7l0Fs8" 
                            title="Apartado del hotel"
                            alt="Imagen de un apartado del hotel"
                            class="homeImg"
                        />
                        <div class="banner-cont">
                            <div className='banner-cont-title'>
                                <h1><strong>Abraj Kudai</strong></h1>
                            </div>
                            <div class="banner-cont-description">
                                <p>
                                    Redefine tu estancia en <em>La Meca</em> con el lujo sin igual del Hotel Abraj Kudai.
                                    Tu oasis de <strong>confort</strong> y <strong>elegancia</strong> te espera.
                                </p>
                            </div>
                            <div class='mainpage-fieldset-box'>
                                <form action="/reserva">
                                    <div class="mainpage-fieldset">
                                        <input
                                            placeholder="Desde"
                                            class="textbox-n"
                                            type="text"
                                            onfocus="(this.type='date')"
                                            onblur="(this.type='text')"
                                            id="date-from" 
                                        />
                                        <input
                                            placeholder="Hasta"
                                            class="textbox-n"
                                            type="text"
                                            onfocus="(this.type='date')"
                                            onblur="(this.type='text')"
                                            id="date-to" 
                                        />
                                        <button type="submit">Reservar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </article>
                    <Header />
                </section>
                <main>
                    <section class="mainpage-content">
                        <article>
                            <div class="mainpage-content-expo">
                                <img
                                    class='main-content-expo-image' 
                                    src="https://nicodev.s-ul.eu/8XyS7Q0O" 
                                    alt="Imágen relacionada al confort del hotel"
                                />
                                <div class='mainpage-content-expo-text'>
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
                                <img 
                                    class='main-content-expo-image-res1200'
                                    src="https://nicodev.s-ul.eu/8XyS7Q0O" 
                                    alt="Imágen relacionada al confort del hotel"
                                />
                            </div>
                        </article>
                        <article>
                            <div class="mainpage-content-expo">
                                <div class='mainpage-content-expo-text'>
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
                                <img
                                    class='main-content-expo-image'
                                    src="https://nicodev.s-ul.eu/VGk3hf96" 
                                    alt="Imágen relacionada a las vistas del hotel"
                                />
                                <img
                                    class='main-content-expo-image-res1200'
                                    src="https://nicodev.s-ul.eu/VGk3hf96" 
                                    alt="Imágen relacionada a las vistas del hotel"
                                />
                            </div>
                        </article>
                        <article>
                            <div class="mainpage-content-expo">
                                <img 
                                    class='main-content-expo-image'
                                    src="https://nicodev.s-ul.eu/VGk3hf96" 
                                    alt="Imágen relacionada a las habitaciones del hotel"
                                />
                                <div class='mainpage-content-expo-text'>
                                    <h2>Habitaciones</h2>
                                    <p>
                                        Nuestras habitaciones, cuidadosamente diseñadas y decoradas con un estilo 
                                        elegante, brindan el refugio perfecto para relajarse después de un día de 
                                        exploración o trabajo. Equipadas con tecnología moderna, desde sistemas de 
                                        entretenimiento avanzados hasta conexión Wi-Fi de alta velocidad, nuestras 
                                        habitaciones ofrecen todo lo necesario para su comodidad.
                                    </p>
                                </div>
                                <img
                                    class='main-content-expo-image-res1200'
                                    src="https://nicodev.s-ul.eu/VGk3hf96" 
                                    alt="Imágen relacionada a las habitaciones del hotel"
                                />
                            </div>
                        </article>
                    </section>
                    <section class="hab">
                        <article class="habrow">
                            <a href="habitacion?t=0">
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
                            <a href="habitacion?t=2">
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
                            <a href="habitacion?t=3">
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
                            <a href="habitacion?t=5">
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
                            <a href="habitacion?t=4">
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
                            <a href="habitacion?t=1">
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
                            <a href="habitacion?t=6">
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
                            <a href="habitacion?t=7">
                                <div class="tarjeta">
                                    <h3><em>Black Suite</em></h3>
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
                            <h1>No esperes más ¡Vive una experiencia unica!</h1>
                            <a href='reserva'>
                                <button>Reserva ahora</button>
                            </a>
                        </article>
                    </section>
                </main>
                <Footer />
            </body>
        </div>
    );
}

export default Mainpage;

