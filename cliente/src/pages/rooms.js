import './style.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

function Rooms(){



    

    const [room, setRoom] = useState({})
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const [fechaInicio, setFechaInicio] = useState()
    const [fechaHasta, setFechaHasta] = useState()
    const [cantidad, setCantidad] = useState()
    const [error, setError] = useState()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {

        const datosHabitacion = async() => {

            const url = searchParams.get('t')

            try{
                const response = await fetch(`/public/search?t=${encodeURIComponent(url)}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }) 

                const data = await response.json()

                if (!data) {
                    console.error('No hay datos de respuesta del servidor.')  //Borrar
                } 
                
                // Traer la lista de disponibles por torre, si no hay en una torre, ocultar la opción.

                 //console.log("Datos recibidos en React:", data);  //Borrar

                if (!data.roomServer) {
                    console.error("No hay datos de habitación en la respuesta." + error);  //Borrar
                    return;
                }
                setRoom(data.roomServer)
            } catch (error){
                setError(error)
            }
        }
        datosHabitacion()

    }, [searchParams])
/*
    useEffect(() => {
         //console.log("Estado actualizado de room:", room);
         //console.log(room?.descripcion?.[0])
        }, [room]);
*/
    const enviarForm = async(event) => {
        event.preventDefault()

        try {
            const response = await fetch('/restr/reserva/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fechaInicio: fechaInicio,
                    fechaHasta: fechaHasta,
                    cantidad: cantidad,
                    habitacion: room.nombre,
                    estado: "pendiente",
                    servicios: [
                        //Implementar servicios ya que por ahora no se tiene en cuenta servicios ni precios de estos
                    ]
                }),
            });
            const data = await response.json()

            sessionStorage.setItem('resTemp', JSON.stringify(data))

            if (data.error === true){
                console.error('Hubo un error')
                navigate(data.redirect)
            } else {
                console.log("Redirigiendo")
                return navigate('/pago')
            }

        } catch (error) {
            console.error(error)
            setError(error)
        }
    } 


    return(
        <div>
            <div>
                <title>{room?.nombre} | Abraj Kudai</title>
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
                    <section class="habitacion"> 
                        <article class='roomTitle'>
                            <div class=''>
                                <h1>{room?.nombre}</h1>
                            </div>
                            <div class='starRate'>
                                <img src=''/>
                            </div>
                        </article>
                        <article class='roomContent'>
                            <div class='roomData'>
                                <div class='roomImg'>
                                    <img src={room?.imagen} alt="Imagen de la habitación"/>
                                </div>
                                <div class='roomScript'>
                                    <div dangerouslySetInnerHTML={{ __html: room?.scriptLong }} />
                                </div>
                            </div>
                            <div class="roomContRight">
                                <form method="post" onSubmit={enviarForm} action='/restr/reserva/new'>
                                    <div class='roomForm'>
                                        <div class="formDate">
                                            <span><strong>Desde</strong></span>
                                            <span><strong>Hasta</strong></span>
                                        </div>
                                        <div class="formDate">
                                            <input 
                                                type ="date" 
                                                name ="fechaInicio"
                                                id = "fechaInicio"
                                                value = {fechaInicio}
                                                onChange ={(e) => setFechaInicio(e.target.value)}
                                                required
                                            />
                                            <input 
                                                type = "date" 
                                                name = "fechaHasta"
                                                id = "fechaHasta"
                                                value = {fechaHasta}
                                                onChange = {(e) => setFechaHasta(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div class="formQuantity">
                                            <span><strong>Cantidad</strong></span>
                                            <select 
                                                name="cantidad"
                                                id = "cantidad"
                                                value = {cantidad}
                                                onChange = {(e) => setCantidad(e.target.value)}
                                                placeholder="Cantidad"
                                                required
                                            >
                                                (/* Convertir este input de lista en un input de elección de botón */)
                                            
                                                <option value="">Seleccione cantidad</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                            </select>
                                        </div>
                                        <div>
                                        </div>
                                        <button type="submit">Reservar</button>
                                    </div>
                                </form>
                                <div class="otherRooms">
                                    <div class="otherRooms-title">
                                        <h1>Sugerencias</h1>
                                    </div>
                                </div>
                            </div>
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

export default Rooms;