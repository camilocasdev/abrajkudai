import '../style.css'

function Loading({ nombre }){
    return(
        <section className='loading-box'>
            <div>
                <p>Cargando datos de {nombre}...</p>
            </div>
            <div className="pulse"></div>
        </section>
    )
}

export default Loading;