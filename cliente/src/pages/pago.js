import './style.css'
import Header from './components/header.js';
import Footer from './components/footer.js';
import Loading from './components/loadingScreen.js'
import CheckoutForm from './components/booking-payment/checkoutform.js'
import ConfirmedPayment from './components/booking-payment/confirmedpayment.js';

import React, { useEffect, useState} from 'react'
import { useNavigate, useSearchParams} from 'react-router'
import { Elements } from '@stripe/react-stripe-js' 
import { loadStripe } from '@stripe/stripe-js'

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
    const [stripeIntent, setStripeIntent] = useState()
    const [status, setStatus] = useState()

    const currency = 'USD'
    
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

    const appearance = {
        theme: 'flat',
        variables: {
            colorPrimary: '#616E43',
            borderRadius: '1rem',
            spacingUnit: '.3rem'
        }
    }

    useEffect(() => {
        const defaultData = async() => {
            try {
                const response = await fetch('/api/user/booking/summary', {
                    method: 'GET'
                })

                const data = await response.json()
                
                if (data.error === true){
                    navigate(data.redirect)
                }

                console.log(data.stripe)

                setRoom(data.room)
                setBooking(data.booking)
                setUser(data.user)
                setStripeIntent(data.stripe)
            } catch (error) {
                setError(error)
                console.log({msg: 'Hay un error en la recuperación de datos' + error})
            }
        } 
        defaultData()
    }, [])

    useEffect(() => {
        const s = searchParams.get('redirect_status')
        if (s) setStatus(s);
    }, [])

    useEffect(() => {
        
    }, [stripeIntent, user, booking, room])

    if (!stripeIntent) return (
        <div class = 'loading-box'>
            <Loading />
        </div>
    );
        
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
                            <div className='payment-form-title'>
                                <h2>Payment Method</h2>
                            </div>
                            {status === 'confirmed' || status === 'succeeded' ? (
                                <ConfirmedPayment status = {status} />
                            ) : (
                                <div>
                                    <Elements stripe={stripePromise} options={{clientSecret: stripeIntent.cli_secret, appearance: appearance}}>
                                        <CheckoutForm />
                                    </Elements>
                                </div>
                            )}
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
                                        <li><strong>Habitación: </strong>{room?.nombre} <strong>({booking?.dias} Días)</strong></li>
                                        {booking?.servicios.map((service, i) => {
                                            <li>{i} {service.nombre}: {service.precio}</li>
                                            return
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className='booking-total'>
                                <p>Monto Completo</p>
                                <p>{booking?.total}{currency}</p>
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