import './style.css'
import Header from './components/header.js';
import Footer from './components/footer.js';

import React, { useEffect, useState} from 'react'
import { useNavigate, useSearchParams} from 'react-router'

function Pago(){

    //Utilities
    const [searchParams] = useSearchParams()
    const [error, setError] = useState()
    const navigate = useNavigate()

    //Form
    const [cardNumber, setCardNumber] = useState()

    //Objetos traidos del servidor
    const [booking, setBooking] = useState()
    const [user, setUser] = useState()
    const [room, setRoom] = useState()

    const res = [{total: 200, data: {nombre: 'Junior Suite', dias: 6, servicios: {uno: 1, dos: 2}}}]
    const currency = 'USD'
    
    useEffect(() => {
        
        const defaultData = async() => {

            try {
                const response = await fetch('restr/paydata', {
                    method: 'GET'
                })

                const data = await response.json()
                
                if (data.error == true){
                    navigate(data.redirect)
                }

                setRoom(data.room)
                setBooking(data.booking)
                setUser(data.user)
            } catch (error) {
                setError(error)
                console.log({msg: 'Hay un error en la recuperación de datos' + error})
            }
        } 
        defaultData()
    }, [])

    useEffect(() => { //Refresca los estados (SOLO TESTING)
        //console.log(booking, user, room)
    }, [user, booking, room])

    useEffect (() => {
        const isLoading = async() => {
            //Función para que se haga una pantalla del carga, mientras aparecen todos los elementos necesarios.
        } 
        isLoading()
    }) 
    
    const bankpay = function(){
        // Cambio de inputs para los diferentes metodos de pago a implementar en un futuro
    }
    bankpay()


    useEffect(() => {
        // Otros métodos de págo
        const url = searchParams.get('m')
        const methodChange = async() => {
        }
    },[searchParams])
    
    return(
        <div>
            <div>
                <title>Pago | Abraj Kudai</title>
            </div>
            <div>
                <Header />
                <main>
                    <section class='loading'>
                        
                    </section>
                    <section className='payment-box'>
                        <article className='payment-form'>
                            <form method='POST' action=''>
                                <div className='payment-form-title'>
                                    <h2>Payment Method</h2>
                                </div>
                                <div className='payment-methods'>
                                    <a href='?m=0' className='method-bank-card' onClick={bankpay}>
                                        Banco
                                    </a>
                                    <a href='?m=1' className='method-paypal' >
                                        Paypal  
                                    </a>
                                    <a href='?m=2' className='method-transfering' >
                                        Transferencia
                                    </a>
                                </div>
                                <div className='payment-form-column'>
                                    <input
                                        name='card-holder'
                                        placeholder='John Example'
                                    />
                                    <input
                                        name='card-number'
                                        placeholder='xxxx'
                                        value = {cardNumber}
                                        onChange = {(e) => setCardNumber(e.target.value)}
                                    />
                                </div>
                                <div className='payment-form-row'>
                                    <input
                                        // INVESTIGAR COMO HACER EL INPUT DE FECHA ESPECIFICA PARA TARJETA DE CREDITO
                                        name='card-expiration'
                                        type='text'
                                        pattern="(0[1-9]|1[0-2])\/([0-9]{2})" 
                                        placeholder="MM/AA" 
                                        maxLength="5" 
                                        title="Ingresa la fecha en formato MM/AA (ejemplo: 05/26)"
                                        required
                                    />
                                    <input
                                        // Falta funcion: Para que se vea los digitos escritos por un segundo y luego se escondan en *
                                        name='card-code'
                                        placeholder='cvv'
                                        type='password'
                                        maxLength = {3}
                                    />
                                </div>
                                <div className='payment-form-column'>
                                    <input
                                        name = 'email'
                                        id = 'email'
                                        placeholder = {user?.mail}
                                        readOnly
                                    />
                                    <input
                                        name = 'tel'
                                        id = 'tel'
                                        placeholder = {user?.tel}
                                        readOnly
                                    />
                                </div>
                                <button type='submit' onSubmit>
                                    Pay
                                </button>
                            </form>
                        </article>
                        <article className='booking-summary'>
                            <div className='booking-summary-title'>
                                <h1>Order Summary</h1>
                            </div>
                            <div className='booking-img'>
                                <img src={room?.img} alt='Imagen de la habitación elegida'/>
                            </div>
                            <div className='booking-data'>
                                <div class='booking-data-title'>
                                    <h2>{room?.nombre}</h2>
                                </div>
                                <div class='booking-data-list'>
                                    <ul>
                                        <li>{room?.nombre}. {booking?.days} Days </li>
                                        {booking?.services}
                                    </ul>
                                </div>
                            </div>
                            <div className='booking-total'>
                                <p>Monto Completo</p>
                                <p>{JSON.stringify(res[0].total)}{currency}</p>
                            </div>
                        </article>
                    </section>
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default Pago;