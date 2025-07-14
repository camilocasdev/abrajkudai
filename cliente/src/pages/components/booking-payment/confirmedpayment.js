import { useEffect, useState } from 'react';
import '../../style.css'
import { useNavigate } from 'react-router';
import ErrorMsg from '../errormsg';

function ConfirmedPayment({status}){

    const navigate = useNavigate()
    const [error, setError] = useState(null)

    useEffect(() => {
        const confirmBooking = async() => {

            setError(null)

            try {
                const response = await fetch('/api/user/booking/confirm', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
    
                const data = response.json()
    
                if(!data.error){
                    //Implementar muestreo de factura
                    return 
                } else {
                    console.log(data.error)
                    navigate(data.redirect)
                }
            } catch (error) {
                console.log(error)
                setError(error)
            }
        }
        confirmBooking()
    }, [])

    return(
        <div class = 'confirmed-pay'>
            <ErrorMsg error={error}/>
            <h2>¡Pago Confirmado!</h2>
            <ion-icon name="bag-check-outline"></ion-icon>
            <a href={window.location.origin + '/perfil'}>Volver a Perfil</a>
        </div>
    )
}
export default ConfirmedPayment;