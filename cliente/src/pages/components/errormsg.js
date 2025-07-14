import '../style.css'
import { useState, useEffect } from 'react'

function ErrorMsg({ error }) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (error) {
            setIsVisible(true)
        }
    }, [error])

    function closeModal() {
        setIsVisible(false)
    }

    if (!error || !isVisible) {
        return null
    }

    return (
        <div className='error'>
            <h2>Error</h2>
            <p>{decodeURIComponent(error)}</p>
            <button onClick={closeModal}>Volver</button>
        </div>
    )
}

export default ErrorMsg