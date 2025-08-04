import '../../style.css'

function SimpleLoading() {

    return(
        <section className='loading-box'>
            <article className='simple-loading-box'>
                <button> 
                    <div className="pulse"></div>
                </button>
                {/* <div className="pulse"></div> */}
            </article>
        </section>
    )
}

export default SimpleLoading;