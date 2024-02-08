import './css/styles.css';
import { useNavigate } from 'react-router-dom';
import graynail from './assets/img/graynail.jpg';
import graynail2 from './assets/img/graynail2.gif';

import './App.css';

export function DiseasePage() {
    const navigate = useNavigate();

    function handleHome() {
        navigate('/nailbook');
    }

    function handleAbout() {
        navigate('/nailbook/purpose');
    }

    function handlevideopage() {
        navigate('/nailbook/video');
    }

    function handleDetect() {
        navigate('/nailbook/detect');
    }

    return (
        <div>
            <header>
                <h1 className="site-heading text-center text-faded d-none d-lg-block">
                    <span className="site-heading-upper text-primary mb-3">真甲難辨</span>
                    <span className="site-heading-lower">Nail Disease</span>
                </h1>
            </header>
            {/* <!-- Navigation--> */}
            <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
                <div className="container">
                    <a className="navbar-brand text-uppercase fw-bold d-lg-none" onClick={handleHome}>Nail Identification</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item px-lg-4"><a className="nav-link text-uppercase" onClick={handleHome}>首頁</a></li>
                            <li className="nav-item px-lg-4"><a className="nav-link text-uppercase" onClick={handleAbout}>組員介紹</a></li>
                            <li className="nav-item px-lg-4"><a className="nav-link text-uppercase" onClick={handleAbout}>目的</a></li>
                            <li className="nav-item px-lg-4"><a className="nav-link text-uppercase" onClick={handleDetect}>辨識的疾病</a></li>

                            <li className="nav-item px-lg-4"><a className="nav-link text-uppercase" onClick={handleAbout}>運用技術</a></li>
                            <li className="nav-item px-lg-4"><a className="nav-link text-uppercase" onClick={handlevideopage}>觀看影片與測驗</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section className="page-section">
                <div className="container">
                    <div className="product-item">
                        <div className="product-item-title d-flex">
                            <div className="bg-faded p-5 d-flex ms-auto rounded">
                                <h2 className="section-heading mb-0">
                                    <span className="section-heading-upper">指甲疾病</span>
                                    <span className="section-heading-lower">灰指甲</span>
                                </h2>
                            </div>
                        </div>
                        <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={graynail} alt="..." />
                        <div className="product-item-description d-flex me-auto">
                            <div className="bg-faded p-5 rounded">
                                <p className="contentfont mb-0">正式名稱：甲癬</p>
                                <p className="contentfont mb-0">別名：臭甲、灰指甲。</p>
                                <p className="contentfont mb-0">成因：各種真菌，像是皮癬菌等。免疫力較差的人也可能會因為念珠菌而感染，像是糖尿病人。</p>
                                <p className="contentfont mb-0">感染部位：指甲​</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section">
                <div className="container">
                    <div className="product-item">
                        <div className="product-item-title d-flex">
                            <div className="bg-faded p-5 d-flex me-auto rounded">
                                <h2 className="section-heading mb-0">
                                    <span className="section-heading-upper">Delicious Treats, Good Eats</span>
                                    <span className="section-heading-lower">Bakery & Kitchen</span>
                                </h2>
                            </div>
                        </div>
                        <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src="assets/img/products-02.jpg" alt="..." />
                        <div className="product-item-description d-flex ms-auto">
                            <div className="bg-faded p-5 rounded"><p className="mb-0">Our seasonal menu features delicious snacks, baked goods, and even full meals perfect for breakfast or lunchtime. We source our ingredients from local, oragnic farms whenever possible, alongside premium vendors for specialty goods.</p></div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer text-faded text-center py-5">
                <div className="container"><p className="m-0 small">Copyright &copy; Your Website 2024</p></div>
            </footer>
        </div>
    );
}

