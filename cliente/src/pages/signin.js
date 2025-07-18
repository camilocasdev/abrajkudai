import './style.css';
import Footer from './components/footer.js';
import Header from './components/header.js'
import ErrorMsg from './components/errormsg.js';


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login(){
    
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [keepSession, setKeepSession] = useState(false)
    const [error, setError] = useState('');

    const navigate = useNavigate();
    
    const ingresar = async (event) => {
        event.preventDefault()
        
        setError(null)
        
        try {
            const response = await fetch('/api/user/signin', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    correo: correo,
                    contrasena: contrasena,
                    keepSession: keepSession
                }),
            });

            if (!response){
                console.log('Fatal Crash: ' + error)
            }

            const data = await response.json();

            if (response.ok) {
                navigate(data.redirect);
            } else {
                setError(data.msg || 'Error en la autenticación');
                navigate(data.redirect)
            }
        } catch (error) {
            setError('Hubo un problema con la solicitud.');
            navigate('/signin?error')
        }
    }
    return(
        <div>
            <div>
                <title>Sign In | Abraj Kudai</title>
            </div>
            <body>
                <section className="header">
                    <Header />
                </section> 
                <main> 
                    <section class="signcaja">
                        <section class="signbackground">
                            <img src="https://nicodev.s-ul.eu/2wafDffC" alt=""/> 
                        </section>
                        <ErrorMsg error={error} />
                        <article>
                            <h1>¡Bienvenido!</h1>
                            <p>Inicia Sesión para acceder a tu cuenta y explorar nuestras ofertas exclusivas</p>
                        </article>
                        <article>
                            <form method="post" onSubmit={ingresar}>
                                <fieldset class="signin">
                                    <label>
                                        <input type="email" 
                                        id="correo" 
                                        value={correo} 
                                        placeholder="Correo" 
                                        onChange={(e) => setCorreo(e.target.value)} 
                                        required/>
                                    </label>
                                    <label>
                                        <input type="password" 
                                        value={contrasena}
                                        onChange={(e) => setContrasena(e.target.value)}
                                        placeholder="Contrasena"
                                        required/>
                                    </label>
                                    <div class="signin-checkbox">
                                        <label>
                                            <input 
                                                type="checkbox"
                                                value = {keepSession}
                                                onChange = {(e)=> setKeepSession(e.target.checked)}
                                            />
                                            <span>¿Mantener la sesión iniciada?</span>
                                        </label>
                                    </div>
                                    <div class="signpost">
                                        <div className='sign-post-redirects'>
                                            <a href="forgotmypassword">Olvide mi contraseña</a>
                                            <a href="signup">Registrarse</a>
                                        </div>
                                        <button type="submit">Ingresar</button>
                                    </div>
                                </fieldset>
                            </form>
                        </article>
                        <article>
                        </article>
                        <article class="conexion">
                            <p><strong>Conexión</strong></p>
                            <div class="conexionlinks">
                                <a href="ignore" target="_blank" class="google-btn">
                                    <ion-icon class="google" alt="Ingresar con Google" name="logo-google"></ion-icon>
                                </a>
                                <a href="ignore" target="_blank" class="facebook-btn">
                                    <ion-icon class="facebook" alt="Ingresar con Facebook" name="logo-facebook"></ion-icon>
                                </a>
                            </div>
                        </article>
                    </section>
                </main>
                <Footer />
            </body>
        </div>
    )
}

export default Login;