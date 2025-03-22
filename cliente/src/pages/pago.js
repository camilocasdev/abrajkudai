import './style.css'
import Header from './components/header.js';
import Footer from './components/footer.js';

import React, { useEffect, useState} from 'react'
import { useNavigate, useSearchParams} from 'react-router'

function Pago(){

    const [searchParams] = useSearchParams()
    const [cardNumber, setCardNumber] = useState()
    const navigate = useNavigate()

    const email = 'correo'

    const resTemp = [{img: ''}]
    const res = [{total: 200, data: {nombre: 'Junior Suite', dias: 6, servicios: {uno: 1, dos: 2}}}]
    const currency = 'USD'
    


    useEffect (() => {
        const isLoading = async() => {
            //Función para que se haga una pantalla del carga, mientras aparecen todos los elementos necesarios.
        } 
        isLoading()
        const isResTemp = function(){
            // Chequea si esta pasando al pago de manera lógica y no forzada, en caso de no ser así devolver a otra página o a una página especifica de error 404.
            try {
                const booking = sessionStorage.getItem('temporal-booking')
    
                if (!booking){
                    console.log('Paso check if booking is empty')
                    //navigate('/reserva')
                } else {
                    console.log('Todo ok!')
                }
            } catch (error) {
                console.error('Fatal Error: ' + error)
            }
        }
        isResTemp()
    }, [navigate])
    


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

    const reservar = async(event) => {
        event.preventDefault()

            try {
                const resTemp = sessionStorage.get('resTemp')

                const response = await fetch('/restr/reserva/new', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: {

                    }
                })

                const data = response.JSON()
                
                if (!response.ok){
                    console.error('Funcionando la conexión' + data.error)
                }

            } catch (error) {
                console.error(error)
            }
        }
    
    return(
        <div>
            <div>
                <title>Pago | Abraj Kudai</title>
            </div>
            <div>
                <Header />
                <main>
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
                                    >
                                    </input>
                                    <input
                                    name='card-number'
                                    placeholder='xxxx'
                                    value = {cardNumber}
                                    onChange = {(e) => setCardNumber(e.tarjet.value)}
                                    >
                                    </input>
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
                                    >
                                    </input>
                                    <input
                                    // Falta funcion: Para que se vea los digitos escritos por un segundo y luego se escondan en *

                                    name='card-code'
                                    placeholder='cvv'
                                    type='password'
                                    maxLength = {3}
                                    >
                                    </input>
                                </div>
                                <div className='payment-form-column'>
                                    <input
                                    name='email'
                                    placeholder={email}
                                    readOnly
                                    >
                                    </input>
                                    <input
                                    name='tel'
                                    
                                    placeholder='123'
                                    >
                                    </input>
                                </div>
                                <button type='submit' onSubmit={reservar}>
                                    Pay
                                </button>
                            </form>
                        </article>
                        <article className='booking-summary'>
                            <div className='booking-summary-title'>
                                <h1>Order Summary</h1>
                            </div>
                            <div className='booking-img'>
                                <img src={resTemp[0]?.img} alt='Imagen de la habitación elegida'/>
                            </div>
                            <div className='booking-data'>
                                {JSON.stringify(res[0]?.data)}
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