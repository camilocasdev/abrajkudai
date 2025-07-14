import './style.css'
import Footer from './components/footer.js';
import Header from './components/header.js';

function Amenidades(){
    return(
        <div>
            <div>
                <title>Amenidades | Abraj Kudai</title>
            </div>
            <body>
                <section class="header">
                    <article class="banner-box">
                        <img 
                            src="https://nicodev.s-ul.eu/MqywaNIk" 
                            title="Apartado del hotel"
                            alt="Imagen de las amenidades generales del hotel"
                            class="homeImg"
                        />
                        <div class="banner-cont">
                            <div className='banner-cont-title'>
                                <h1><strong>Amenidades</strong></h1>
                            </div>
                            <div class="banner-cont-description">
                                <p>
                                    Las amenidades del <strong>Hotel Abraj Kudai</strong> estan diseñadas para brindar
                                    una experiencia de lujo incomparable. Cada detalle esta pensado para
                                    su comodidad y bienestar.
                                </p>
                            </div>
                        </div>
                    </article>
                    <Header />
                </section>
                <main>
                    <section className="amenities-scroll-tarjets">
                        <article className="scroll-tarjet">
                            <img src="https://nicodev.s-ul.eu/XUCsO1nU" alt="Imagen de la buffete"/>
                            <div class="scroll-tarjet-content">
                                <h2>Buffet Gourmet </h2>
                                <button href="signin">Acceder</button>
                            </div>
                        </article>
                        <article className="scroll-tarjet">
                            <img src="https://nicodev.s-ul.eu/Tq2u3YvU" alt="Imagen del restaurante"/>
                            <div class="scroll-tarjet-content">
                                <h2>
                                    Restaurantes Top
                                </h2>
                                <button href="signin">Acceder</button>
                            </div>
                        </article>
                        <article className="scroll-tarjet">
                            <img src="https://nicodev.s-ul.eu/tWQ4Cv2w" alt="Imagen de la piscina"/>
                            <div class="scroll-tarjet-content">
                                <h2>
                                    Spa y Relajación
                                </h2>
                                <button href="signin">Acceder</button>
                            </div>
                        </article>
                    </section> 
                    <section class="amenities-description">
                        <article class="amenities-description-text">
                            <p>
                                Disfruta del lujo y confort: spa, 
                                restaurates gourmet, gimnasio y entretenimiento de clase mundial. Cada detalle 
                                esta pensado pra hacer tu estancia inolvidable.
                            </p>
                        </article>
                        <article>
                            <p>Imagenes</p>
                        </article>
                    </section>
                </main>
                <Footer />
            </body>
        </div>
    )
}

export default Amenidades;