import './style.css';
import Footer from './components/footer.js';
import Header from './components/header.js'

import { useNavigate, useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import RoomTypeTarjet from './components/room-types/roomtype-tarjet.js';

function Rooms(){

    const navigate = useNavigate()
    const [room, setRoom] = useState({})
    const [services, setServices] = useState([{}])
    const [searchParams] = useSearchParams()
    const [fechaInicio, setFechaInicio] = useState()
    const [fechaHasta, setFechaHasta] = useState()
    const [cantidad, setCantidad] = useState()
    const [error, setError] = useState()
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [seleccionados, setSeleccionados] = useState([]);

    //Agregamos un limitador para los dates tomados de las fechas desde, siendo el mismo día el minimo.
    const formMinDate = new Date()
    const minDate = formMinDate.toISOString().split("T")[0] //funciona

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
                console.log(data)
                if (!data) {
                    console.error('No hay datos de respuesta del servidor.')  //Borrar
                } 
                if (!data.roomServer) {
                    console.error("No hay datos de habitación en la respuesta." + error);  //Borrar
                    return;
                }
                setServices(data.services)
                setRoom(data.roomServer)
            } catch (error){
                setError(error)
            }
        }
        datosHabitacion()
    }, [searchParams])
    useEffect(() => {
        //console.log("Estado actualizado de room: ", room._id ,room);
/*         console.log(room)
        console.log(services) */
        }, [room, services]);
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
                    servicios: seleccionados
                }),
            });
            const data = await response.json()
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
    const modalServices = () => {
        console.log('Abriendo menu de servicios')
        setIsServicesOpen(!isServicesOpen);
    }
    const toggleServicio = (id) => {
        setSeleccionados((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
    };
    return(
        <div id='root-m'>
            <div>
                <title>{room?.nombre} | Abraj Kudai</title>
            </div>
            <div> 
                <section className="header">
                    <Header />
                </section>
                <main>
                    <section className="habitacion"> 
                        <article className='roomTitle'>
                            <div className=''>
                                <h1>{room?.nombre}</h1>
                            </div>
                            <div className='starRate'>
                                <img src=''/>
                            </div>
                        </article>
                        <article className='roomContent'>
                            <div className='roomData'>
                                <div className='roomImg'>
                                    <img src={room?.imagen} alt="Imagen de la habitación"/>
                                </div>
                                <div className='roomScript'>
                                    <div dangerouslySetInnerHTML={{ __html: room?.scriptLong }} />
                                </div>
                            </div>
                            <div className="roomContRight">
                                <form method="post" onSubmit={enviarForm}>
                                    <div className="form-title">
                                        <h2>Reservar</h2>
                                    </div>
                                    <div className='roomForm'>
                                        <div className="formDate">
                                            <div className="form-date-boxes">
                                                <span><strong>Desde</strong></span>
                                                <input 
                                                    type ="date" 
                                                    name ="fechaInicio"
                                                    id = "fechaInicio"
                                                    min = {minDate}
                                                    value = {fechaInicio}
                                                    onChange ={(e) => setFechaInicio(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="form-date-boxes">
                                                <span><strong>Hasta</strong></span>
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
                                        </div>
                                        <div className="formQuantity">
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
                                        <div className = "room-form-services">
                                            <span><strong>Servicios</strong></span>
                                            {/*<button type="button" onClick={modalServices}>
                                                <div>Extender</div>
                                                <ion-icon name="chevron-down-outline"></ion-icon>
                                            </button> */}
                                            <aside id='form-services-box' className={`form-services-box ${isServicesOpen ? 'show' : ''}`}>
                                                {
                                                    services.map((e, i) => {
                                                        return(
                                                            <label key={i}>
                                                                <div>
                                                                    <input 
                                                                        type='checkbox'
                                                                        checked={seleccionados.includes(e?._id)}
                                                                        onChange={() => toggleServicio(e?._id)}
                                                                    />
                                                                    <span>{e?.name}</span>
                                                                </div>
                                                                <span>$ {e?.price}</span>
                                                            </label>
                                                        )
                                                    })
                                                }
                                            </aside>
                                        </div>
                                        <button type="submit">Reservar</button>
                                    </div>  
                                </form>
                                <div className="other-rooms">
                                    <div className="otherRooms-title">
                                        <h1>Sugerencias</h1>
                                    </div>
                                    <RoomTypeTarjet rows={3} />
                                </div>
                            </div>
                        </article>
                    </section>
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default Rooms;