import './style.css'
import React, { useEffect, useState} from 'react'
import { useNavigate, useSearchParams} from 'react-router'

function Pago(){

    const [error, setError] = useState()
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()

    const email = 'correo'

    const resTemp = [{img: ''}]
    const res = [{total: 200, data: {nombre: 'Junior Suite', dias: 6, servicios: {uno: 1, dos: 2}}}]
    const currency = 'USD'
    
    const isLoading = async() =>{
        //Función para que se haga una pantalla del carga, mientras aparecen todos los elementos necesarios.
    }

    const isRestemp = function(){
        // Chequea si esta pasando al pago de manera lógica y no forzada, en caso de no ser así devolver a otra página o a una página especifica de error 404.
        navigate('/error')
    }

    const bankpay = function(){
        // Cambio de inputs para los diferentes metodos de pago a implementar en un futuro
    }

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
                setError(error)
                console.error(error)
            }
        }
    
    return(
        <div>
            <div>
                <title>Pago | Abraj Kudai</title>
            </div>
            <body>
                <header>
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
                </header>
                <main>
                    <section class='payment-box'>
                        <article class='payment-form'>
                            <form method='POST' action=''>
                                <div class='payment-form-title'>
                                    <h2>Payment Method</h2>
                                </div>
                                <div class='payment-methods'>
                                    <a href='?m=0' class='method-bank-card' onClick={bankpay}>
                                        Banco
                                    </a>
                                    <a href='?m=1' class='method-paypal' >
                                        Paypal  
                                    </a>
                                    <a href='?m=2' class='method-transfering' >
                                        Transferencia
                                    </a>
                                </div>
                                <div class='payment-form-column'>
                                    <input
                                    name='card-holder'
                                    placeholder='John Example'
                                    >
                                    </input>
                                    <input
                                    name='card-number'
                                    placeholder='xxxx'
                                    >
                                    </input>
                                </div>
                                <div class='payment-form-row'>

                                    <input
                                        // INVESTIGAR COMO HACER EL INPUT DE FECHA ESPECIFICA PARA TARJETA DE CREDITO
                                        
                                        name='card-expiration'
                                        type='text'
                                        pattern="(0[1-9]|1[0-2])\/([0-9]{2})" 
                                        placeholder="MM/AA" 
                                        maxlength="5" 
                                        title="Ingresa la fecha en formato MM/AA (ejemplo: 05/26)"
                                        required
                                    >
                                    </input>
                                    <input
                                    // Falta funcion: Para que se vea los digitos escritos por un segundo y luego se escondan en *

                                    name='card-code'
                                    placeholder='cvv'
                                    type='password'
                                    maxLength={3}
                                    >
                                    </input>
                                </div>
                                <div class='payment-form-column'>
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
                                <button onSubmit=''>
                                    Pay
                                </button>
                            </form>
                        </article>
                        <article class='booking-summary'>
                            <div class='booking-summary-title'>
                                <h1>Order Summary</h1>
                            </div>
                            <div class='booking-img'>
                                <img src={resTemp[0]?.img} alt='Imagen de la habitación elegida'/>
                            </div>
                            <div class='booking-data'>
                                {JSON.stringify(res[0]?.data)}
                            </div>
                            <div class='booking-total'>
                                <p>Monto Completo</p>
                                <p>{JSON.stringify(res[0].total)}{currency}</p>
                            </div>
                            <button type='submit' onSubmit={reservar}> 
                                RESERVAR (Solo Test)
                            </button>
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
                                        <a href="https://www.google.com/maps/place/Abraj+Kudai/@21.4016468,39.8269677,845m/data=!3m1!1e3!4m6!3m5!1s0x15c205ab3d1054c5:0x7706c3b19d8c5606!8m2!3d21.4016468!4d39.8288002!16s%2Fm%2F0138vpf8?entry=ttu&g_ep=EgoyMDI1MDMxNi4wIKXMDSoASAFQAw%3D%3D" 
                                            target="_blank"
                                            rel="noreferrer"
                                            >
                                                <ion-icon class="icubicacion" name="location"></ion-icon>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="https://www.google.com/maps/place/Abraj+Kudai/@21.4016468,39.8269677,845m/data=!3m1!1e3!4m6!3m5!1s0x15c205ab3d1054c5:0x7706c3b19d8c5606!8m2!3d21.4016468!4d39.8288002!16s%2Fm%2F0138vpf8?entry=ttu&g_ep=EgoyMDI1MDMxNi4wIKXMDSoASAFQAw%3D%3D" 
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

export default Pago;