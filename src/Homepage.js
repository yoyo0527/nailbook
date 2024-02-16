import './css/styles.css';
import { useNavigate } from 'react-router-dom';
import intro from './assets/img/intro.png';
import './App.css';

export function HomePage() {
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

    function handleskillpage() {
        navigate('/nailbook/skill');
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
                            <li className="nav-item px-lg-4"><a className="nav-link text-uppercase" onClick={handleskillpage}>運用技術</a></li>
                            <li className="nav-item px-lg-4"><a className="nav-link text-uppercase" onClick={handlevideopage}>觀看影片與測驗</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section className="page-section clearfix">
                <div className="container">
                    <div className="intro">
                        <img className="intro-img img-fluid mb-3 mb-lg-0 rounded" src={intro} alt="..." />
                        <div className="intro-text left-0 bg-faded p-5 rounded">
                            <h2 className="section-heading mb-4">
                                <span className="section-heading-lower text-center"><b>背景</b></span>
                            </h2>
                            <p className="contentfont">手腳指甲是人體健康的一個指標，指甲的外觀可以反映出身體健康狀況的一些跡象。然而，許多人可能未能及時察覺或了解指甲變化的​重要性，因此這項應用的開發是為了幫助用戶更容易地識別並了解可能與指甲健康相關的​問題。​</p>
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

