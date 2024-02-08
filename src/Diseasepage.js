import './css/styles.css';
import { useNavigate } from 'react-router-dom';
import graynail from './assets/img/graynail.jpg';
import graynail2 from './assets/img/graynail2.gif';
import clubbingnail from './assets/img/clubbing.jpg';
import clubbingnail2 from './assets/img/clubbing2.jpg';
import clubbingnail3 from './assets/img/clubbing3.webp';

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

            {/* 灰指甲 */}
            <section className="page-section">
                <div className="container">
                    <div className="product-item">
                        <div className="product-item-title d-flex">
                            <div className="bg-faded2 p-5 d-flex ms-auto rounded">
                                <h2 className="section-heading mb-0">
                                    <span className="section-heading-upper">指甲疾病</span>
                                    <span className="section-heading-lower">灰指甲</span>
                                </h2>
                            </div>
                        </div>
                        <img className="img-detect mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={graynail} alt="..." />
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
                            <div className="bg-faded2 p-5 d-flex me-auto rounded">
                                <h2 className="section-heading mb-0">
                                    <span className="section-heading-lower">灰指甲有哪些症狀​</span>
                                </h2>
                            </div>
                        </div>
                        <img className="img-detect mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={graynail2} alt="..." />
                        <div className="product-item-description d-flex ms-auto">
                            <div className="bg-faded p-5 rounded"><p className="contentfont mb-0">灰指甲是一種由黴菌感染引起的指甲問題。指甲可能呈現混濁、黯淡的顏色，而非僅限於灰色。正常指甲應呈現粉紅肉色，具光澤和彈性。灰指甲可能表現為指甲變硬、變厚、易碎、形變，有時呈現黃褐、咖啡、灰或綠色。感染使指甲受損，變得越來越厚、硬，可能導致疼痛和走路時頂到鞋子。其他症狀包括指甲碎裂、掉屑，指甲增厚、粗糙，以及指甲變形和甲床分離。​</p></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section">
                <div className="container">
                    <div className="product-item">
                        <div className="product-item-title d-flex">
                            <div className="bg-faded2 p-5 d-flex ms-auto rounded">
                                <h2 className="section-heading mb-0">
                                    <span className="section-heading-lower">灰指甲治療方式​</span>
                                </h2>
                            </div>
                        </div>
                        <div className="product-item-description d-flex me-auto">
                            <div className="bg-faded p-5 rounded">
                                <p className="contentfont mb-0">主要方式是藥物治療，分為外用跟口服，但通常會同時配合手術「挫甲」（拔除壞死及感染的指甲）、雷射等輔助治療。​</p>
                                <p className="contentfont mb-0"><b>外用藥</b></p>
                                <p className="contentfont mb-0">常用藥物：水楊酸及抗黴菌藥物。</p>
                                <p className="contentfont mb-0"><b>口服藥</b></p>
                                <p className="contentfont mb-0">常用藥物：抗黴菌藥物。​</p>
                                <p className="contentfont mb-0" style={{color:'red'}}><b>禁忌：</b></p>
                                <p className="contentfont mb-0">孕婦或是肝功能異常者（包括肝炎、脂肪肝或肝硬化）不適合服用，健康的人服藥後需定期回診檢查肝功能，但新一代藥物對肝的影響已經較為輕微。​</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section">
                <div className="container">
                    <div className="product-item">
                        <div className="product-item-title d-flex">
                            <div className="bg-faded2 p-5 d-flex me-auto rounded">
                                <h2 className="section-heading mb-0">
                                    <span className="section-heading-lower">如何預防灰指甲</span>
                                </h2>
                            </div>
                        </div>
                        <div className="product-item-description d-flex ms-auto">
                            <div className="bg-faded p-5 rounded">
                                <ul>
                                    <li><p className="contentfont mb-0">指甲出現變形、混濁，儘快去看皮膚科醫師​</p></li>
                                    <li><p className="contentfont mb-0">避免手腳泡水、赤腳走濕濕的路​</p></li>
                                    <li><p className="contentfont mb-0">手腳不共用同一支指甲剪，並定期消毒​</p></li>
                                    <li><p className="contentfont mb-0">穿吸汗的襪子，儘量讓腳部通風​</p></li>
                                    <li><p className="contentfont mb-0">接觸灰指甲患者、碰觸有黴菌的物品後，一定要記得徹底洗手、腳​</p></li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>

            {/* 杵狀指 */}
            <section className="page-section">
                <div className="container">
                    <div className="product-item">
                        <div className="product-item-title d-flex">
                            <div className="bg-faded2 p-5 d-flex ms-auto rounded">
                                <h2 className="section-heading mb-0">
                                    <span className="section-heading-upper">指甲疾病</span>
                                    <span className="section-heading-lower">杵狀指</span>
                                </h2>
                            </div>
                        </div>
                        <img className="img-detect mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={clubbingnail} alt="..." />
                        <div className="product-item-description d-flex me-auto">
                            <div className="bg-faded p-5 rounded">
                                <p className="contentfont mb-0">杵狀指本身並非疾病，而是一種症狀。杵狀指會讓末端指節鬆軟腫大，甲面也明顯下彎，隨後指甲和甲床之間的正常角度消失，看起來就像是棒槌。它不只會發生於手指末端，腳趾末端也同樣可能有此症狀。​</p>
                                <p className="contentfont mb-0">杵狀指通常雙側發生，雙手指或腳趾都會有此症狀。不過也有單側發生的可能性。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section">
                <div className="container">
                    <div className="product-item">
                        <div className="product-item-title d-flex">
                            <div className="bg-faded2 p-5 d-flex me-auto rounded">
                                <h2 className="section-heading mb-0">
                                    <span className="section-heading-lower">杵狀指的原因​</span>
                                </h2>
                            </div>
                        </div>
                        <img className="img-detect mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={clubbingnail2} alt="..." />
                        <div className="product-item-description d-flex ms-auto">
                            <div className="bg-faded p-5 rounded">
                                    <p className="contentfont mb-0">目前醫學上還無法完全確認杵狀指的發生原因，目前主要是認為當心肺相關疾病導致身體缺氧時，會刺激患者的血液中都會有血管內皮生長因子（vascular endothelial growth factor, VEGF）增加。VEGF 是一種血小板衍生因子，會誘使指甲處發生血管增生、水腫、纖維母細胞或成骨細胞增生並進一步造成杵狀指。​</p>
                                    <p className="contentfont mb-0">此外，會造成血小板慢性增加的發炎性腸道疾病也會因為生長因子增加造成杵狀指發生。​ ​</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section">
                <div className="container">
                    <div className="product-item">
                        <div className="product-item-title d-flex">
                            <div className="bg-faded2 p-5 d-flex ms-auto rounded">
                                <h2 className="section-heading mb-0">
                                    <span className="section-heading-lower">杵狀指的辨別</span>
                                </h2>
                            </div>
                        </div>
                        <img className="img-detect mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={clubbingnail3} alt="..." />
                    </div>
                </div>
            </section>

            <section className="page-section">
                <div className="container">
                    <div className="product-item">
                        <div className="product-item-title d-flex">
                            <div className="bg-faded2 p-5 d-flex me-auto rounded">
                                <h2 className="section-heading mb-0">
                                    <span className="section-heading-lower">杵狀指如何治療</span>
                                </h2>
                            </div>
                        </div>
                        <div className="product-item-description d-flex ms-auto">
                            <div className="bg-faded p-5 rounded">
                                    <p className="contentfont mb-0">杵狀指多數是由於外部因素以及內部疾病所引起的，所以在進行治療的時候應對原發病進行治療。當原發病得到治療控制後，杵狀指的症狀也會得到緩解​</p>
                                    <p className="contentfont mb-0"><b>杵狀指看哪一科？​</b> ​</p>
                                    <p className="contentfont mb-0">若懷疑發生杵狀指而不知道要掛哪一科，可以先至家醫科就醫，由家醫科先做心肺評估。​</p>
                                    <p className="contentfont mb-0">若發現自己有杵狀指且容易喘、會聽到喘鳴聲、吸氣吸不飽等狀況，則可直接尋求胸腔科協助。​</p>
                                    <p className="contentfont mb-0">如果肺功能評估沒問題，病人本身也沒有抽菸，就可能是心衰竭或是心臟結構異常，需至心臟科就醫。​</p>
                                    <p className="contentfont mb-0">如果有長期腹瀉腹痛等問題，也必須尋求腸胃內科醫師協助排除發炎性腸道疾病。​</p>
                                    <p className="contentfont mb-0"><b>杵狀指是肺癌前兆​</b> ​</p>
                                    <p className="contentfont mb-0">發現自己有杵狀指，先不必驚慌，病人可能本身原本就有肺部功能問題而導致杵狀指發生。有杵狀指也可能是老菸槍、嚴重慢性肺阻塞的病人或者罹患其他心臟相關疾病、腸胃道功能有狀況等。並不是肺癌才會發現杵狀指。​</p>

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

