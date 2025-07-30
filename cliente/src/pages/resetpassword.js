import './style.css'
import Header from './components/header'
import Footer from './components/footer'
import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router'

function ResetPassword() {

    const [contrasena, setContrasena] = useState('')
    const [confirmarContrasena, setConfirmarContrasena] = useState('')
    const [passwordMatch, setPasswordMatch] = useState(true)
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()   


    const newPassword = async(event) => {
        let url = searchParams.get('t')
        if (!url) { url = '' };

        event.preventDefault()
        try {
            const response = await fetch(`/api/user/resetpassword?t=${encodeURIComponent(url)}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    newPassword: contrasena
                })
            })
            const data = await response.json();
            console.log(data)
            if (!data.error === true) {
                navigate(data.redirect)
            } else {
                navigate(data.redirect)
                throw 1;
            }
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
    }, [searchParams])
    useEffect(() => {
        if (confirmarContrasena !== '') {
            setPasswordMatch(contrasena === confirmarContrasena)
        }
    }, [contrasena, confirmarContrasena])
    return(
        <div id='root-m'>
            <div>
                <title>Change Password</title>
            </div>
            <div>
                <section className='header'>
                    <Header />
                </section>
                <section className="reset-password-box" >
                    <article className='reset-password-title'>
                        <h1>Cambiar contraseña</h1>
                        <p>Ingresa tu nueva contraseña para completar el proceso de recuperación. Asegúrate de que sea segura y fácil de recordar.</p>
                    </article>
                    <form method='POST' className='reset-password-form' onSubmit={newPassword}>
                        <label htmlFor="contrasena">
                            <input 
                            type="password" 
                            name="contrasena"
                            value={contrasena}
                            onChange={(e) => setContrasena(e.target.value)}
                            placeholder="Contraseña"
                            required/>
                        </label>
                        {!passwordMatch && confirmarContrasena !== '' && (
                            <span className="restore-error-text">Las contraseñas no coinciden</span>
                        )}
                        <label htmlFor="repeat-password">
                            <input 
                            type="password" 
                            name="confirmar-contrasena" 
                            placeholder="Repetir Contraseña"
                            value = {confirmarContrasena}
                            onChange = {(e) => setConfirmarContrasena(e.target.value)}
                            className={!passwordMatch ? 'error-input' : ''}
                            required/>
                        </label>
                        <button 
                            id="reset-password-button"
                            disabled={confirmarContrasena === '' || contrasena !== confirmarContrasena} 
                            type='submit'
                        >
                        Enviar
                        </button>
                    </form>
                </section>
                <Footer />
            </div>
        </div>
    )
}

export default ResetPassword;