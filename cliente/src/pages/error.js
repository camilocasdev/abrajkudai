import './style.css';
import Header from './components/header.js';
import Footer from './components/footer.js';

function Error() {


    return(
        <div>
            <section className="header">
                <Header />
            </section>
            <div>
                <h1>404 Unespected</h1>
            </div>
            <Footer />
        </div>
    )
}

export default Error;