import './css/styles.css';
import { useNavigate } from 'react-router-dom';

export function AboutPage() {
    const navigate = useNavigate();
    
    function handleHome() {
        navigate('/nailbook');
    }

    function handleAbout() {
        navigate('/nailbook/about');
    }

    return (
        <div className="App">
            <header>
                <h1 className="site-heading text-center text-faded d-none d-lg-block">
                    <span className="site-heading-upper text-primary mb-3">真甲男辨</span>
                    <span className="site-heading-lower">Nail Disease</span>
                </h1>
            </header>
            {/* <!-- Navigation--> */}
            <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
                <div className="container">
                    <a className="navbar-brand text-uppercase fw-bold d-lg-none" href="index.html">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item px-lg-4"><a className="nav-link text-uppercase" onClick={handleHome}>Home</a></li>
                            <li className="nav-item px-lg-4"><a className="nav-link text-uppercase" onClick={handleAbout}>About</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section className="page-section clearfix">
                <div className="container">
                    <div className="intro">
                        <img className="intro-img img-fluid mb-3 mb-lg-0 rounded" src="assets/img/intro.jpg" alt="..." />
                        <div className="intro-text left-0 text-center bg-faded p-5 rounded">
                            <h2 className="section-heading mb-4">
                                <span className="section-heading-upper">Fresh Coffee</span>
                                <span className="section-heading-lower">Worth Drinking</span>
                            </h2>
                            <p className="mb-3">Every cup of our quality artisan coffee starts with locally sourced, hand picked ingredients. Once you try it, our coffee will be a blissful addition to your everyday morning routine - we guarantee it!</p>
                            <div className="intro-button mx-auto"><a className="btn btn-primary btn-xl" href="#!">Visit Us Today!</a></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-section cta">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                            <div className="cta-inner bg-faded text-center rounded">
                                <h2 className="section-heading mb-4">
                                    <span className="section-heading-upper">Our Promise</span>
                                    <span className="section-heading-lower">To You</span>
                                </h2>
                                <p className="mb-0">When you walk into our shop to start your day, we are dedicated to providing you with friendly service, a welcoming atmosphere, and above all else, excellent products made with the highest quality ingredients. If you are not satisfied, please let us know and we will do whatever we can to make things right!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer text-faded text-center py-5">
                <div className="container"><p className="m-0 small">Copyright &copy; Your Website 2023</p></div>
            </footer>
            {/* <!-- Bootstrap core JS--> */}
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
            {/* <!-- Core theme JS--> */}
            <script src="js/scripts.js"></script>    
        </div>
    );
}

