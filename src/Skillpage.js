import './css/styles.css';
import { useNavigate } from 'react-router-dom';
import detect from './assets/img/detect.jpg';
import detect2 from './assets/img/detect2.jpg';
import detect3 from './assets/img/detect3.png';
import './App.css';
import naillogo from './assets/img/naillogo.png';
import detect4 from './assets/img/detect4.png';
import detect5 from './assets/img/detect5.jpg';

export function SkillPage() {
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
            
            <section className="page-section clearfix">
                <div className="container">
                    <div className="intro">
                        <img className="intro-img img-fluid mb-3 mb-lg-0 rounded" src={detect} alt="..." />
                        <div className="intro-text left-0 bg-faded p-5 rounded">
                            <h2 className="section-heading mb-4">
                                <span className="section-heading-lower text-center"><b>影像辨識</b></span>
                            </h2>
                            <p className="contentfont ">影像辨識是一種人工智慧技術，通過計算機來辨識和理解影像中的內容。這種技術使得計算機能夠模擬人類視覺系統的功能，並從影像中識別出物體、場景或者其他特徵。​</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section cta">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                            <div className="cta-inner bg-faded rounded">
                                <h2 className="section-heading mb-5">
                                    <span className="section-heading-lower text-center"><b>應用場景</b></span>
                                </h2>
                                <img className="img-detect img-fluid mb-5 rounded d-flex mx-auto" src={detect2} alt="..." />
                                <p className="contentfont ms-3">​影像辨識技術在各個領域都有廣泛的應用，包括但不限於：安全監控、醫療影像分析、自動駕駛、社交媒體、零售業等。舉例來說，安全監控系統可以通過辨識影像中的人物來識別可疑行為；醫療影像分析則可以幫助醫生檢測疾病或者異常情況。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section clearfix">
                <div className="container">
                    <div className="intro">
                        <img className="img-detect img-fluid mb-3 mb-lg-0 rounded  d-flex mx-auto" src={detect3} alt="..." />
                    </div>
                </div>
            </section>

            <section className="page-section cta">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 mx-auto">
                            <div className="cta-inner bg-faded rounded">
                                <h2 className="section-heading mb-5">
                                    <span className="section-heading-lower text-center"><b>影像辨識的訓練模型</b></span>
                                </h2>
                                <div className='row-xl-9'>
                                    <ul class="list-unstyled list-hours mb-5 text-left mx-auto" style={{ display: 'flex', flexDirection: 'column' }}>
                                        <li class="d-flex" style={{ display: 'flex', alignItems: 'flex-start' }}>
                                            <p className='contentfont' style={{ marginRight: '10%', whiteSpace: 'nowrap' }}><b>監督式學習​</b></p>
                                            <span className="ms-auto"><p className='contentfont'>使用標記的資料進行訓練。</p></span>
                                        </li>
                                        <li class="d-flex" style={{ display: 'flex', alignItems: 'flex-start' }}>
                                            <p className='contentfont' style={{ marginRight: '10%', whiteSpace: 'nowrap' }}><b>非監督式學習</b></p>
                                            <span className="ms-auto"><p className='contentfont'>​根據資料的內在結構進行學習。​</p></span>
                                        </li>
                                        <li class="d-flex" style={{ display: 'flex', alignItems: 'flex-start' }}>
                                            <p className='contentfont' style={{ marginRight: '10%', whiteSpace: 'nowrap' }}><b>強化學習</b></p>
                                            <span className="ms-auto"><p className='contentfont'>通過與環境的互動來學習。​</p></span>
                                        </li>
                                    </ul>
                                </div>
                                <hr/>
                                <h2 className="section-heading mb-5">
                                    <span className="section-heading-lower text-center"><b>影像辨識所需的資料類型</b></span>
                                </h2>
                                <div className='row-xl-9'>
                                    <ul class="list-unstyled list-hours mb-5 text-left mx-auto">
                                        <li class="d-flex">
                                            <p className='contentfont' style={{marginRight: '10%', whiteSpace: 'nowrap'}}><b>結構化資料</b></p>
                                            <span className="ms-auto"><p className='contentfont'>包括數字矩陣和向量形式的資料。​</p></span>
                                        </li>
                                        <li class="d-flex">
                                            <p className='contentfont' style={{marginRight: '10%', whiteSpace: 'nowrap'}}><b>非結構化資料​</b></p>
                                            <span className="ms-auto"><p className='contentfont'>例如圖像和音訊等。​</p></span>
                                        </li>
                                        <li class="d-flex">
                                            <p className='contentfont' style={{marginRight: '10%',whiteSpace: 'nowrap'}}><b>即時流式資料​</b></p>
                                            <span className="ms-auto"><p className='contentfont'>用於處理連續的即時資料流。​</p></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 mx-auto">
                            <div className="cta-inner bg-faded rounded">
                                <img className="img-detect img-fluid mb-5 rounded d-flex mx-auto" src={detect4} alt="..." />
                                {/* <div className='row-xl-6'>
                                    <ul class="list-unstyled list-hours mb-5 text-left mx-auto" style={{ display: 'flex', flexDirection: 'column' }}>
                                        <li class="d-flex" style={{ display: 'flex', alignItems: 'flex-start' }}>
                                            <p className='contentfont' style={{ marginRight: '10%', whiteSpace: 'nowrap' }}><b>卷積神經網絡（CNN）</b></p>
                                            <span className="ms-auto"><p className='contentfont'>應用廣泛且效果顯著。</p></span>
                                        </li>
                                        <li class="d-flex" style={{ display: 'flex', alignItems: 'flex-start' }}>
                                            <p className='contentfont' style={{ marginRight: '10%', whiteSpace: 'nowrap' }}><b>循環神經網絡（RNN）​</b></p>
                                            <span className="ms-auto"><p className='contentfont'>用於處理序列數據。</p></span>
                                        </li>
                                        <li class="d-flex" style={{ display: 'flex', alignItems: 'flex-start' }}>
                                            <p className='contentfont' style={{ marginRight: '10%', whiteSpace: 'nowrap' }}><b>支持向量機（SVM）　</b></p>
                                            <span className="ms-auto"><p className='contentfont'>適用於特徵維度較高的資料。</p></span>
                                        </li>
                                    </ul>
                                </div> */}
                                <div className="row">
                                    <div className="col-xl-4">
                                        <div className='row-xl-2'>
                                            <p className='contentfont'><b>卷積神經網絡（CNN）</b></p>
                                            <p className='contentfont'>應用廣泛且效果顯著。</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-4">
                                        <div className='row-xl-2'>
                                            <p className='contentfont'><b>循環神經網絡（RNN）​</b></p>
                                            <p className='contentfont'>用於處理序列數據。</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-4">
                                        <div className='row-xl-2'>
                                            <p className='contentfont'><b>支持向量機（SVM）　</b></p>
                                            <p className='contentfont'>適用於特徵維度較高的資料。</p>
                                        </div>
                                    </div>

                                </div>                            
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section cta">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                            <div className="cta-inner bg-faded rounded">
                                <img className="img-detect img-fluid mb-5 rounded d-flex mx-auto" src={detect5} alt="..." />
                                <p className="contentfont ms-3">透過攝像頭拍攝照片後，上傳到前端react的網站上，按下辨識的按鈕後，後端的node接收到來自前端的圖像數據，再來執行python腳本來處理指甲圖像並進行辨識，再將python辨識後的結果包裝成json格式交由後端node回傳前端react顯示在螢幕上給使用者了解指甲的狀況。​</p>
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

