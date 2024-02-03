import { useNavigate } from 'react-router-dom';
import purpose from './assets/img/purpose.png';
import downarrow from './assets/img/down_arrow.png'

export function PurposePage() {
    const navigate = useNavigate();
    
    function handleHome() {
        navigate('/nailbook');
    }

    function handleAbout() {
        navigate('/nailbook/purpose');
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
                            <li className="nav-item px-lg-4"><a className="nav-link text-uppercase" onClick={handleAbout}>運用技術</a></li>
                            <li className="nav-item px-lg-4"><a className="nav-link text-uppercase" onClick={handleAbout}>觀看影片與測驗</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section className="page-section about-heading">
                <div className="container">
                    <img className="img-purpose rounded-5 about-heading-img mb-3 mb-lg-0" src={purpose} alt="..." />
                    <div className="about-heading-content">
                        <div className="row">
                            <div className="col-xl-9 col-lg-10 mx-auto">
                                <div className="bg-faded2 rounded p-4">
                                    <h1 className="section-heading mb-4">
                                        <span className="section-heading-lower"><b>目的</b></span>
                                    </h1>
                                    {/* <p>Founded in 1987 by the Hernandez brothers, our establishment has been serving up rich coffee sourced from artisan farmers in various regions of South and Central America. We are dedicated to travelling the world, finding the best coffee, and bringing back to you here in our cafe.</p>
                                    <p className="mb-0">
                                        We guarantee that you will fall in
                                        <em>lust</em>
                                        with our decadent blends the moment you walk inside until you finish your last sip. Join us for your daily routine, an outing with friends, or simply just to enjoy some alone time.
                                    </p> */}
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-10 mx-auto">
                                <div className="bg-faded3 rounded p-2">
                                    <p className='contentfont'>指甲健康監測</p>
                                </div>
                                <img className="img-fluid-set rounded about-heading-img mb-5 mb-lg-0" src={downarrow} alt="..." />
                                <div className="bg-faded rounded p-0">
                                    <p className='contentfont'>可以提供使用者自主監測手腳指甲的變化</p>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-10 mx-auto">
                                <div className="bg-faded3 rounded p-2">
                                    <p className='contentfont'>醫療輔助工具​</p>
                                </div>
                                <img className="img-fluid-set rounded about-heading-img mb-5 mb-lg-0" src={downarrow} alt="..." />
                                <div className="bg-faded rounded p-0">
                                    <p className='contentfont'>輔助醫護人員在診斷或監測疾病的時候作為參考</p>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-10 mx-auto">
                                <div className="bg-faded3 rounded p-2">
                                    <p className='contentfont'>普及指甲健康教育</p>
                                </div>
                                <img className="img-fluid-set rounded about-heading-img mb-5 mb-lg-0" src={downarrow} alt="..." />
                                <div className="bg-faded rounded p-0">
                                    <p className='contentfont'>提供用戶關於手腳指甲健康的知識和教育，幫助一般民眾更了解這方面的健康重要性</p>
                                </div>
                            </div>
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

