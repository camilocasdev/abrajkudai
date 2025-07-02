import '../../style.css'
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js'


function CheckoutForm(){

    const stripe = useStripe();
    const elements = useElements();

    

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const response = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: window.location.origin + '/pago'
            }
        });
        
        if (response.error) {
            console.error('❌ Error en el pago:', response.error.message);
            // puedes mostrar un mensaje al usuario
        } else {
            console.log('✅ Pago confirmado o redirigiendo...');
        }
    };
    
    return(
        <form class = 'payment-stripe-form' onSubmit = {handleSubmit}>
            <PaymentElement />
            <button type='submit' disabled={!stripe}>Submit</button>
        </form>
    )
}

export default CheckoutForm