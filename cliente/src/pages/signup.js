import './style.css'
import Footer from './components/footer.js'

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup(){

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [pais, setPais] = useState('')
    const [identificacion, setIdentificacion] = useState('')
    const [telefono, setTelefono] = useState('')
    const [correo, setCorreo] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const registrar = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/validation/signup', {
                method: 'POST',
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
                error(data.message || 'Error en la autenticación');
            }
        } catch (error) {
            setError('Hubo un problema con la solicitud.');
            console.error(error);
        }
    }


    return(
        <div>
            <div>
                <title>Sign Up | Abraj Kudai</title>
            </div>
            <body>
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
                <main>
                    <div class="fix"></div>
                    <section class="signcaja">
                        <article>
                            <h1>¡Registrate!</h1>
                            <p>Inicia Sesión para acceder a todos los beneficios</p>
                        </article>
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
                        <article class="signincampos">
                            <form method="post" onSubmit={registrar} action="/validation/signup">
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
                                        <div class="signmedium">
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
                                    <div class="signlong">
                                        <label for="contrasena">
                                            <input 
                                            type="password" 
                                            name="contrasena"
                                            value={contrasena}
                                            onChange={(e) => setContrasena(e.target.value)}
                                            placeholder="Contraseña"
                                            required/>
                                        </label>
                                    </div>
                                    <div class="signlong">
                                        <label for="repcontrasena">
                                            <input 
                                            type="password" 
                                            name="repcontrasena" 
                                            placeholder="Repetir Contraseña"
                                            required/>
                                        </label>
                                    </div>
                                    <div class="chulito">
                                        <label>
                                            <div class="chulitofix">
                                                <div>
                                                    <input type="checkbox"/>
                                                    <span>Creando una cuenta, aceptas los Términos y Condiciones y la Política de Privacidad.</span>
                                                </div>
                                                <div>
                                                    <input type="checkbox"/>
                                                    <span>Deseas recibir correos de ofertas y promociones?</span>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                    <div class="signpost">
                                        <div>
                                            <a href="signin"><p>¿Ya tienes cuenta? Inicia Sesión</p></a>
                                            <a href="reportproblem"><p>Reportar Problemas</p></a>
                                        </div>
                                        <button type="submit">Registrarse</button>
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