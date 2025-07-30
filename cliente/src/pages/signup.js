import './style.css'
import Footer from './components/footer.js'
import Header from './components/header.js'
import ErrorMsg from './components/errormsg.js';

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup(){

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [pais, setPais] = useState('')
    const [identificacion, setIdentificacion] = useState('')
    const [telefono, setTelefono] = useState('')
    const [correo, setCorreo] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [confirmarContrasena, setConfirmarContrasena] = useState('')
    const [error, setError] = useState('')
    const [passwordMatch, setPasswordMatch] = useState(true)
    
    const navigate = useNavigate()

    const registrar = async (event) => {
        event.preventDefault();

        setError(null)

        try {
            const response = await fetch('/api/user/signup', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nombre: nombre,
                    apellido: apellido,
                    pais: pais,
                    identificacion: identificacion,
                    telefono: telefono,
                    correo: correo,
                    contrasena: contrasena,
                }),
            });

            const data = await response.json()

            if (response.ok){
                return navigate('/signin')
            } else {
                setError(data.msg || 'Error en la autenticación');
            }
        } catch (error) {
            setError('Hubo un problema con la solicitud.');
            console.error(error);
        }
    }

    useEffect(() => {
        if (confirmarContrasena !== '') {
            setPasswordMatch(contrasena === confirmarContrasena)
        }
    }, [contrasena, confirmarContrasena])

    return(
        <div id='root-m'>
            <div>
                <title>Sign Up | Abraj Kudai</title>
            </div>
            <body>
                <section className="header">
                    <Header />
                </section>
                <main>
                    <div class="fix"></div>
                    <section class="signcaja">
                        <article>
                            <h1>¡Registrate!</h1>
                            <p>Inicia Sesión para acceder a todos los beneficios</p>
                        </article>
                        <ErrorMsg error={error} />
                        <article class="conexion">
                            <div class="conexionlinks">
                                <a href="ignore" target="_blank" class="google-btn">
                                    <ion-icon class="google" alt="Ingresar con Google" name="logo-google"></ion-icon>
                                </a>
                                <a href="ignore" target="_blank" class="facebook-btn">
                                    <ion-icon class="facebook" alt="Ingresar con Facebook" name="logo-facebook"></ion-icon>
                                </a>
                            </div>
                            <p><strong>O</strong></p>
                        </article>
                        <article>
                            <form method="post" onSubmit={registrar}>
                                <fieldset class="signup">
                                    <div class="signupclose">
                                        <label for="nombre">
                                            <input type="text" 
                                            id="nombre" 
                                            name="nombre"
                                            value={nombre}
                                            onChange={(e) => setNombre(e.target.value)} 
                                            placeholder="Nombre/s" 
                                            required/>
                                        </label>
                                        <label for="apellido">
                                            <input type="text" 
                                            id="apellido" 
                                            name="apellido"
                                            value={apellido}
                                            onChange={(e) => setApellido(e.target.value)} 
                                            placeholder="Apellido/s"
                                            required/>
                                        </label>
                                    </div>
                                    <div class="signupclose">
                                        <div class="signshort">
                                            <label for="pais">
                                                <input type="text" 
                                                id="pais" 
                                                name="pais"
                                                value={pais}
                                                onChange={(e) => setPais(e.target.value)} 
                                                placeholder="Pais" 
                                                required/>
                                            </label>
                                        </div> 
                                        <label for="identificacion">
                                            <input type="number" 
                                            inputmode="numeric" 
                                            id="identificacion" 
                                            name="identificacion"
                                            value={identificacion}
                                            onChange={(e) => setIdentificacion(e.target.value)}
                                            placeholder="Identificacion" 
                                            required/>
                                        </label>
                                    </div>
                                    <div class="signupclose">
                                        <label for="telefono">
                                            <input type="tel" 
                                            id="tel" 
                                            name="telefono"
                                            value={telefono}
                                            onChange={(e) => setTelefono(e.target.value)}
                                            placeholder="Teléfono" 
                                            required/>
                                        </label>
                                        <label for="correo">
                                            <input 
                                            type="email" 
                                            id="correo" 
                                            value={correo}
                                            onChange={(e) => setCorreo(e.target.value)}
                                            name="correo"
                                            placeholder="Correo" 
                                            required/>
                                        </label>
                                    </div>
                                    <label for="contrasena">
                                        <input 
                                        type="password" 
                                        name="contrasena"
                                        value={contrasena}
                                        onChange={(e) => setContrasena(e.target.value)}
                                        placeholder="Contraseña"
                                        required/>
                                    </label>
                                    {!passwordMatch && confirmarContrasena !== '' && (
                                        <span className="error-text">Las contraseñas no coinciden</span>
                                    )}
                                    <label for="repeat-password">
                                        <input 
                                        type="password" 
                                        name="confirmar-contrasena" 
                                        placeholder="Repetir Contraseña"
                                        value = {confirmarContrasena}
                                        onChange = {(e) => setConfirmarContrasena(e.target.value)}
                                        className={!passwordMatch ? 'error-input' : ''}
                                        required/>
                                    </label>
                                    <div className='check-box'>
                                        <label>
                                            <input type="checkbox" name='T&C'/>
                                            <span>Creando una cuenta, aceptas los Términos y Condiciones y la Política de Privacidad.</span>
                                        </label>
                                        <label>
                                            <input type="checkbox" name='email-notifications'/>
                                            <span>Deseas recibir correos de ofertas y promociones?</span>
                                        </label>
                                    </div>
                                    <div class="signpost">
                                        <div className='sign-post-redirects'>
                                            <a href="signin">¿Ya tienes cuenta? Inicia Sesión</a>
                                            <a href="reportproblem">Reportar Problemas</a>
                                        </div>
                                        <button
                                            disabled={confirmarContrasena === '' || contrasena !== confirmarContrasena} 
                                            type='submit'>Registrarse</button>
                                    </div>
                                </fieldset>
                            </form>
                        </article>
                    </section>
                </main>
                <Footer />
            </body>
        </div>
    )
}

export default Signup;