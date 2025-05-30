import './style.css';
import Footer from './components/footer.js';

import { useNavigate, useSearchParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

function Rooms(){

    const navigate = useNavigate()
    const [room, setRoom] = useState({})
    const [searchParams] = useSearchParams()
    const [fechaInicio, setFechaInicio] = useState()
    const [fechaHasta, setFechaHasta] = useState()
    const [cantidad, setCantidad] = useState()
    const [error, setError] = useState()

    //Agregamos un limitador para los dates tomados de las fechas desde, siendo el mismo día el minimo.
    const formMinDate = new Date()
    const minDate = formMinDate.toISOString().split("T")[0] //funciona

    const formSugDate = new Date()
    formSugDate.setMonth(formSugDate.getMonth() + 1) //+1 Mes a la sugerencia
    const sugDate = formSugDate.toISOString().split("T")[0] //Transforma la fecha.
        //toISOString() cambiara el formato a YYYY-MM-DDTHH:mm:ss.sssZ, especificamente cambia a un UTC.
        //.split dividira las fechas[0] y la hora[1] en un array con el mismo orden.

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {

        const datosHabitacion = async() => {
            let url = searchParams.get('t')
            if (!url) { url = 0 };

            try{
                const response = await fetch(`/api/public/roomtype/get?t=${encodeURIComponent(url)}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }) 

                const data = await response.json()

                if (!data) {
                    console.error('No hay datos de respuesta del servidor.')  //Borrar
                } 

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

    useEffect(() => {
        //console.log("Estado actualizado de room: ", room._id ,room);
         //console.log(room?.descripcion?.[0])
        }, [room]);

    const enviarForm = async(event) => {
        event.preventDefault()

        try {
            const response = await fetch('/api/user/booking/create', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fechaInicio: fechaInicio,
                    fechaHasta: fechaHasta,
                    cantidad: cantidad,
                    habitacion: room._id,
                    estado: "Pendiente",
                    servicios: [
                        //Implementar servicios ya que por ahora no se tiene en cuenta servicios ni precios de estos
                    ]
                }),
            });
            const data = await response.json()

            sessionStorage.setItem('temporal-booking', JSON.stringify(data))

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
                                <form method="post" onSubmit={enviarForm}>
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
                                                min = {minDate}
                                                value = {fechaInicio}
                                                onChange ={(e) => setFechaInicio(e.target.value)}
                                                required
                                            />
                                            <input 
                                                type = "date" 
                                                name = "fechaHasta"
                                                id = "fechaHasta"
                                                min = {minDate}
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
                <Footer />
            </body>
        </div>
    )
}

export default Rooms;