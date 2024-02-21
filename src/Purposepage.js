import { useNavigate } from 'react-router-dom';
import purpose from './assets/img/purpose.png';
import downarrow from './assets/img/down_arrow.png'
import naillogo from './assets/img/naillogo.png';

export function PurposePage() {
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
            {/* <!-- Navigation--> */}
            <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
                <div className="container">
                    <img className="nail-logo img-fluid mb-3 mb-lg-0 rounded" src={naillogo} alt="..." />
                    <a className="navbar-brand text-uppercase fw-bold d-lg-none" onClick={handleHome}>Nail Identification</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item px-lg-4"><a className="nav-link text-uppercase" onClick={handleHome}>首頁</a></li>
                            <hr/>
                            <li className="nav-item px-lg-4"><a className="nav-link text-uppercase" onClick={handleAbout}>組員介紹</a></li>
                            <hr/>
                            <li className="nav-item px-lg-4"><a className="nav-link text-uppercase" onClick={handleAbout}>目的</a></li>
                            <hr/>
                            <li className="nav-item px-lg-4"><a className="nav-link text-uppercase" onClick={handleDetect}>辨識的疾病</a></li>
                            <hr/>
                            <li className="nav-item px-lg-4"><a className="nav-link text-uppercase" onClick={handleskillpage}>運用技術</a></li>
                            <hr/>
                            <li className="nav-item px-lg-4"><a className="nav-link text-uppercase" onClick={handlevideopage}>觀看影片與測驗</a></li>
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
                                        <span className="section-heading-lower"><h1>目的</h1></span>
                                    </h1>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-10 mx-auto">
                                <div className="bg-faded3 rounded p-2">
                                    <h4>指甲健康監測</h4>
                                </div>
                                <img className="img-fluid-set rounded about-heading-img mb-5 mb-lg-0" src={downarrow} alt="..." />
                                <div className="bg-faded rounded p-0">
                                    <p className='contentfont'>可以提供使用者自主監測手腳指甲的變化</p>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-10 mx-auto">
                                <div className="bg-faded3 rounded p-2">
                                    <h4>醫療輔助工具​</h4>
                                </div>
                                <img className="img-fluid-set rounded about-heading-img mb-5 mb-lg-0" src={downarrow} alt="..." />
                                <div className="bg-faded rounded p-0">
                                    <p className='contentfont'>輔助醫護人員在診斷或監測疾病的時候作為參考</p>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-10 mx-auto">
                                <div className="bg-faded3 rounded p-2">
                                    <h4>普及指甲健康教育</h4>
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

