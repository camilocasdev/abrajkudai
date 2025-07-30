import './style.css'
import Header from "./components/header";
import Footer from "./components/footer";

import { useState } from 'react'; 
import { useNavigate } from 'react-router';
import SimpleLoading from './components/loading-modals/simpleLoading';

function ForgotPassword() {
    const [correo, setCorreo] = useState()
    const [codigo, setCodigo] = useState(null)
    const navigate = useNavigate()
    const loadingModal = document.getElementById('forgot-password-loading')
    const forgotpass = async(event) => {
        event.preventDefault();
        loadingModal.style.display = "block";
        try {
            const response = await fetch('/api/user/forgotpassword', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: correo,
                    verificationCode: codigo
                })
            })
            if (!response) {
                throw 1;
            }
            const data = await response.json();
            if (data.next === true){
                loadingModal.style.display = "none";
                const codeBox = document.getElementById('code-input')
                const emailBox = document.getElementById('email-input')
                codeBox.style.display = "block";
                emailBox.disabled = true
            } else if (data.redirect) {
                navigate(data.redirect)
            } else if (data.error === true) {
                loadingModal.style.display = "none";
            }
        } catch (error) {
            loadingModal.style.display = "none";
            console.log(error)
        }
    }
    return(
        <div id='root-m'>
            <div>
                <title>Forgot Password</title>
            </div>
            <div>
                <section className="header">
                    <Header />
                </section>
                <section className="forgot-password-box" >
                    <article id='forgot-password-loading' hidden>
                        <SimpleLoading />
                    </article>
                    <article className='forgot-password-title'>
                        <h1>¿Olvidaste tu contraseña?</h1>
                        <p>¿Tienes problemas para acceder? No te preocupes, te ayudaremos a restablecer tu contraseña. Solo ingresa tu correo y te enviaremos un código de verificación.</p>
                    </article>
                    <form method='POST' className='forgot-password-form' onSubmit={forgotpass}>
                        <input 
                            type = "email"
                            className = "forgot-password-email-input"
                            id = "email-input"
                            placeholder = "Correo"
                            value = {correo}
                            onChange = {(e) => setCorreo(e.target.value)}
                            required
                        >
                        </input>
                        <input
                            type = 'number'
                            className = 'forgot-password-code-input'
                            id = 'code-input'
                            placeholder = "Código de Verificación"
                            value = {codigo ?? ""}
                            onChange = {(e) => setCodigo(e.target.value)}
                            hidden
                        >
                        </input>
                        <button type='submit'>Enviar</button>
                    </form>
                    <article>
                        <a href='/signin'>Regresar</a>
                    </article>
                </section>
                <Footer />
            </div>
        </div>
    )
}

export default ForgotPassword;