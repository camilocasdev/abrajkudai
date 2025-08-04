import '../../style.css'
import { useEffect, useState } from 'react'
import DeleteAccountWarn from '../deleteAccountWarn'

function ProfileDataUser({usuario, setUsuario}) {

    const [nombre, setNombre] = useState(undefined)
    const [apellido, setApellido] = useState(undefined)
    const [pais, setPais] = useState(undefined)
    const [identificacion, setIdentificacion] = useState(undefined)
    const [telefono, setTelefono] = useState(undefined)
    const [correo, setCorreo] = useState(undefined)
    const [contrasena, setContrasena] = useState(undefined)
    const [confirmarContrasena, setConfirmarContrasena] = useState(undefined)
    const [error, setError] = useState('')
    const [passwordMatch, setPasswordMatch] = useState(true)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [showUpdatedMsg, setShowUpdateMsg] = useState(false)

    useEffect(() => {
        if (confirmarContrasena !== '') {
            setPasswordMatch(contrasena === confirmarContrasena)
        }
    }, [contrasena, confirmarContrasena])
    const updateUserData = async(event) => {
        event.preventDefault()  
        try {            
            const response = await fetch('/api/user/account/update', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombre: nombre,
                    apellido: apellido,
                    correo: correo,
                    pais: pais,
                    telefono: telefono,
                    identificacion: identificacion,
                    contrasena: contrasena,
                })
            })
            const data = await response.json()
            setUsuario((prev) => ({ ...prev, ...data.userData }))
            setShowUpdateMsg(true)
        } catch (error) {
            console.log(error)
            setError(error)
        }
    }
    return(
        <article id='datos' className='profile-content'>
            <h2>Datos de Usuario</h2>
            <div className='profile-data-form'>
                <form method="POST" onSubmit={updateUserData}>
                    <div className='profile-form-row'>
                        <div className='profile-data-form-titles'>
                            <h3>Cuenta</h3>
                        </div>
                        <div className='profile-form-column'>
                            <div className='profile-form-row'>
                                <label htmlFor="nombre">
                                    <p>Nombre</p>
                                    <input type="text" 
                                    id="nombre" 
                                    name="nombre"
                                    value={nombre ?? ""}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setNombre(value === "" ? undefined : value);
                                    }} 
                                    placeholder={usuario?.nombre} 
                                    />
                                </label>
                                <label htmlFor="apellido">
                                    <p>Apellido</p>
                                    <input type="text" 
                                    id="apellido" 
                                    name="apellido"
                                    value={apellido ?? ""}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setApellido(value === "" ? undefined : value);
                                    }} 
                                    placeholder={usuario?.apellido} 
                                    />
                                </label>
                            </div>
                            <label htmlFor="correo">
                                <p>Correo</p>
                                <input 
                                type="email" 
                                id="correo" 
                                value={correo ?? ""}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setCorreo(value === "" ? undefined : value);
                                }} 
                                name="correo"
                                placeholder={usuario?.correo} 
                                />
                            </label>
                        </div>
                    </div>
                    <div className='profile-form-row'>
                        <div className='profile-data-form-titles'>
                            <h3>Datos de País</h3>
                        </div>
                        <div className='profile-form-column'>                        
                            <div className='profile-form-row'>
                                <label htmlFor="pais">
                                    <p>País</p>
                                    <input type="text" 
                                    id="pais" 
                                    name="pais"
                                    value={pais ?? ""}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setPais(value === "" ? undefined : value);
                                    }} 
                                    placeholder={usuario?.pais}
                                    />
                                </label>
                                <label htmlFor="telefono">
                                    <p>Teléfono</p>
                                    <input type="tel" 
                                    id="tel" 
                                    name="telefono"
                                    value={telefono ?? ""}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setTelefono(value === "" ? undefined : value);
                                    }} 
                                    placeholder={usuario?.telefono}
                                    />
                                </label>
                            </div>
                            <label htmlFor="identificacion">
                                <p>Identificación de país (ID, INE, DNI...)</p>
                                <input type="number" 
                                id="identificacion" 
                                name="identificacion"
                                value={identificacion ?? ""}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setIdentificacion(value === "" ? undefined : value);
                                }} 
                                placeholder={usuario?.identificacion}
                                />
                            </label>
                        </div>
                    </div>
                    <div className='profile-form-row'>
                        <div className='profile-data-form-titles'>
                            <h3>Cambiar Contraseña</h3>
                        </div>
                        <div className='profile-form-column'>                        
                            <div className='profile-form-row'>
                                <label htmlFor="contrasena">
                                    <p>Contraseña</p>
                                    <input 
                                    type="password" 
                                    name="contrasena"
                                    value={contrasena ?? ""}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setContrasena(value === "" ? undefined : value);
                                    }} 
                                    placeholder="Contraseña"
                                    />
                                </label>
                                <label htmlFor="repeat-password">
                                    <p>Repetir Contraseña</p>
                                    <input 
                                    type="password" 
                                    name="confirmar-contrasena" 
                                    placeholder="Repetir Contraseña"
                                    value = {confirmarContrasena ?? ""}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setConfirmarContrasena(value === "" ? undefined : value);
                                    }} 
                                    className={!passwordMatch ? 'error-input' : ''}
                                    />
                                </label>
                            </div>
                            {!passwordMatch && confirmarContrasena !== '' && (
                                <span className="error-text">Las contraseñas no coinciden</span>
                            )}
                        </div>
                    </div>
                    <div className='profile-data-form-button'>
                        { showUpdatedMsg &&
                            <div className='profile-data-form-succes'>
                                <p>¡Perfil actualizado exitosamente!</p>
                            </div>
                        }
                        <button
                            disabled={contrasena !== confirmarContrasena} 
                            type='submit'>Actualizar</button>
                    </div>
                </form>
                <div className='profile-form-row'>
                    <div className='profile-data-form-titles'>
                        <h3>Gestión de Cuenta</h3>
                    </div>
                    <div className='profile-form-column'>
                        <div className='profile-critic-options'>
                            <p>Descargar datos personales</p>
                            <button type='button' disabled>Descargar</button>
                        </div>
                        <div className='profile-critic-logout'>
                            <p>Cerrar sesión en todos los dispositivos</p>
                            <button type='button' disabled>Cerrar Sesiones</button>
                        </div>
                        <div className='profile-critic-delete'>
                            <p><strong>Borrar Cuenta (ACCIÓN PERMANTENTE)</strong></p>
                            <button onClick={() => setShowDeleteModal(true)}>Borrar Cuenta</button>
                        </div>
                    </div>
                    {showDeleteModal && <DeleteAccountWarn onClose={() => setShowDeleteModal(false)} />}
                </div>
            </div>
        </article>
    )
}

export default ProfileDataUser;