import '../style.css'
import { useNavigate } from 'react-router'
import { useState, useEffect } from 'react'

function DeleteAccountWarn({ onClose }) {
    const [deleteLoading, setDeleteLoading] = useState(false) 
    const navigate = useNavigate()
    const deleteAccount = async () => {
        setDeleteLoading(true)
        fetch('/api/user/account/delete', {method:'POST', headers: {'Content-Type': 'application/json'}})
        .then(res => res.json())
        .then(data => {
            navigate(data.redirect)
            window.scrollTo(0, 0);
        })
        .catch(err => console.error(err))
    }

    return (
        <div className='delete-account-modal'>
            <div>
                <h2>Confirmar</h2>
                <p>¿Deseas cerrar tu cuenta de forma definitiva?</p>
                <p><strong>Esta acción es irreversible</strong></p>
            </div>
            <button onClick={onClose}>Volver</button>
            <button onClick={deleteAccount}>
                {deleteLoading ? <div className="pulse"></div> : 'Eliminar Definitivamente'}
            </button>
        </div>
    )
}

export default DeleteAccountWarn;