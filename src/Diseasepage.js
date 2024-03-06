import './css/styles.css';
import { useNavigate } from 'react-router-dom';
import graynail from './assets/img/graynail.jpg';
import graynail2 from './assets/img/graynail2.gif';
import clubbingnail from './assets/img/clubbing.jpg';
import clubbingnail2 from './assets/img/clubbing2.jpg';
import clubbingnail3 from './assets/img/clubbing3.webp';
import beaus from './assets/img/beaus.jpg';
import beaus2 from './assets/img/beaus2.jpg';
import blackline from './assets/img/blackline.jpg';
import blackline2 from './assets/img/blackline2.png';
import blackline3 from './assets/img/blackline3.webp';
import nailbroken from './assets/img/nailbroken.jpg';
import nailbroken2 from './assets/img/nailbroken2.jpg';
import naillogo from './assets/img/naillogo.png';
import whitedot from './assets/img/whitedot.jpeg';
import whitedot2 from './assets/img/whitedot2.jpeg';
import whitedot3 from './assets/img/whitedot3.jpg';
import whitedot4 from './assets/img/whitedot4.jpeg';
import whitedot5 from './assets/img/whitedot5.jpg';
import whitedot6 from './assets/img/whitedot6.png';
import whitedot7 from './assets/img/whitedot7.jpg';

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
            
            <section className="page-section">
                <div className="container">
                    <div className="product-item">
                        <div className="product-item-description">
                            <div className="bg-faded p-5 rounded me-auto ">
                                <ul className="d-flex list-unstyled" >
                                    <li style={{paddingRight: '10%'}}><b><p className="contentfont mb-3"><a href="#graynail">灰指甲</a></p></b></li>
                                    <li style={{paddingRight: '10%'}}><b><p className="contentfont mb-3"><a href="#clubbing">杵狀指</a></p></b></li>
                                    <li style={{paddingRight: '10%'}}><b><p className="contentfont mb-3"><a href="#beaus">博氏線</a></p></b></li>
                                    <li style={{paddingRight: '10%'}}><b><p className="contentfont mb-3"><a href="#blackline">縱向黑甲症</a></p></b></li>
                                    <li style={{paddingRight: '10%'}}><b><p className="contentfont mb-3"><a href="#whitedot">白甲</a></p></b></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 灰指甲 */}
            <section className="page-section" id='graynail'>
                <div className="container">
                    <div className="product-item">
                        <div className="product-item-title d-flex">
                            <div className="bg-faded2 p-5 d-flex me-auto rounded">
                                <h2 className="section-heading mb-0">
                                    <span className="section-heading-lower">灰指甲</span>
                                </h2>
                            </div>
                        </div>
                        <img className="img-detect mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={graynail} alt="..." />
                        <div className="product-item-description d-flex mx-auto">
                            <div className="bg-faded p-5 rounded mx-auto">
                                <p className="contentfont mb-0"><b>正式名稱：</b>甲癬</p>
                                <p className="contentfont mb-0"><b>別名：</b>臭甲、灰指甲。</p>
                                <p className="contentfont mb-0"><b>成因：</b>各種真菌，像是皮癬菌等。免疫力較差的人也可能會因為念珠菌而感染，像是糖尿病人。</p>
                                <p className="contentfont mb-0"><b>感染部位：</b>指甲​</p>
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
                        <div className="product-item-description d-flex mx-auto">
                            <div className="bg-faded p-5 rounded mx-auto"><p className="contentfont mb-0">灰指甲是一種由黴菌感染引起的指甲問題。指甲可能呈現混濁、黯淡的顏色，而非僅限於灰色。正常指甲應呈現粉紅肉色，具光澤和彈性。灰指甲可能表現為指甲變硬、變厚、易碎、形變，有時呈現黃褐、咖啡、灰或綠色。感染使指甲受損，變得越來越厚、硬，可能導致疼痛和走路時頂到鞋子。其他症狀包括指甲碎裂、掉屑，指甲增厚、粗糙，以及指甲變形和甲床分離。​</p></div>
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
                                    <span className="section-heading-lower">灰指甲治療方式​</span>
                                </h2>
                            </div>
                        </div>
                        <div className="product-item-description mx-auto d-flex rounded mb-3 mb-lg-0">
                            <div className="bg-faded p-5 rounded mx-auto">
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
                        <div className="product-item-description mx-auto d-flex rounded mb-3 mb-lg-0">
                            <div className="bg-faded p-5 rounded mx-auto">
                                <ul>
                                    <li><p className="contentfont mb-0">指甲出現變形、混濁，儘快去看皮膚科醫師​</p></li>
                                    <hr/>
                                    <li><p className="contentfont mb-0">避免手腳泡水、赤腳走濕濕的路​</p></li>
                                    <hr/>
                                    <li><p className="contentfont mb-0">手腳不共用同一支指甲剪，並定期消毒​</p></li>
                                    <hr/>
                                    <li><p className="contentfont mb-0">穿吸汗的襪子，儘量讓腳部通風​</p></li>
                                    <hr/>
                                    <li><p className="contentfont mb-0">接觸灰指甲患者、碰觸有黴菌的物品後，一定要記得徹底洗手、腳​</p></li>
                                    <hr/>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>

            {/* 杵狀指 */}
            <section className="page-section" id='clubbing'>
                <div className="container">
                    <div className="product-item">
                        <div className="product-item-title d-flex">
                            <div className="bg-faded2 p-5 d-flex me-auto rounded">
                                <h2 className="section-heading mb-0">
                                    
                                    <span className="section-heading-lower">杵狀指</span>
                                </h2>
                            </div>
                        </div>
                        <img className="img-detect mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={clubbingnail} alt="..." />
                        <div className="product-item-description d-flex mx-auto">
                            <div className="bg-faded p-5 rounded mx-auto">
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
                        <div className="product-item-description d-flex mx-auto">
                            <div className="bg-faded p-5 rounded mx-auto">
                                    <p className="contentfont mb-0">目前醫學上還無法完全確認杵狀指的發生原因，目前主要是認為當心肺相關疾病導致身體缺氧時，會刺激患者的血液中都會有血管內皮生長因子（vascular endothelial growth factor, VEGF）增加。VEGF 是一種血小板衍生因子，會誘使指甲處發生血管增生、水腫、纖維母細胞或成骨細胞增生並進一步造成杵狀指。​</p>
                                    <p className="contentfont mb-0">此外，會造成血小板慢性增加的發炎性腸道疾病也會因為生長因子增加造成杵狀指發生。​​</p>
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
                        <div className="product-item-description mx-auto d-flex rounded mb-3 mb-lg-0">
                            <div className="bg-faded p-5 rounded mx-auto">
                                    <p className="contentfont mb-0">杵狀指多數是由於外部因素以及內部疾病所引起的，所以在進行治療的時候應對原發病進行治療。當原發病得到治療控制後，杵狀指的症狀也會得到緩解​</p>
                                    <p className="contentfont mb-0"><b>杵狀指看哪一科？​</b>​</p>
                                    <p className="contentfont mb-0">若懷疑發生杵狀指而不知道要掛哪一科，可以先至家醫科就醫，由家醫科先做心肺評估。​</p>
                                    <p className="contentfont mb-0">若發現自己有杵狀指且容易喘、會聽到喘鳴聲、吸氣吸不飽等狀況，則可直接尋求胸腔科協助。​</p>
                                    <p className="contentfont mb-0">如果肺功能評估沒問題，病人本身也沒有抽菸，就可能是心衰竭或是心臟結構異常，需至心臟科就醫。​</p>
                                    <p className="contentfont mb-0">如果有長期腹瀉腹痛等問題，也必須尋求腸胃內科醫師協助排除發炎性腸道疾病。​</p>
                                    <p className="contentfont mb-0"><b>杵狀指是肺癌前兆​</b>​</p>
                                    <p className="contentfont mb-0">發現自己有杵狀指，先不必驚慌，病人可能本身原本就有肺部功能問題而導致杵狀指發生。有杵狀指也可能是老菸槍、嚴重慢性肺阻塞的病人或者罹患其他心臟相關疾病、腸胃道功能有狀況等。並不是肺癌才會發現杵狀指。​</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 博氏線 */}
            <section className="page-section" id='beaus'>
                <div className="container">
                    <div className="product-item">
                        <div className="product-item-title d-flex">
                            <div className="bg-faded2 p-5 d-flex me-auto rounded">
                                <h2 className="section-heading mb-0">
                                    
                                    <span className="section-heading-lower">博氏線</span>
                                </h2>
                            </div>
                        </div>
                        <img className="img-detect mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={beaus} alt="..." />
                        <div className="product-item-description d-flex mx-auto">
                            <div className="bg-faded p-5 rounded mx-auto">
                                <p className="contentfont mb-0">博氏線會有凹痕或凹陷，指甲表面可能變得粗糙或不光滑。</p>
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
                                    <span className="section-heading-lower">博氏線的原因​</span>
                                </h2>
                            </div>
                        </div>
                        <img className="img-detect mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={beaus2} alt="..." />
                        <div className="product-item-description d-flex mx-auto">
                            <div className="bg-faded p-5 rounded mx-auto">
                                <ul>
                                    <li><p className="contentfont mb-0">近期患有重病、承受重大壓力或罹患特定疾病，造成身體營養及能量無法傳送至末端指甲。​</p></li>
                                    <hr/>
                                    <li><p className="contentfont mb-0">指甲基質受到壓迫，導致指甲生長冒出凹痕。​</p></li>
                                    <hr/>
                                    <li><p className="contentfont mb-0">患有嚴重皮膚問題，損害指甲基質。</p></li>
                                    <hr/>
                                    <li><p className="contentfont mb-0">缺乏特定營養素，影響指甲生成。</p></li>
                                    <hr/>
                                </ul>
                                    
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
                                    <span className="section-heading-lower">對照上述4成因，以下有更詳細的解釋：</span>
                                </h2>
                            </div>
                        </div>
                        <img className="img-detect mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={beaus} alt="..." />
                        <div className="product-item-description d-flex mx-auto">
                            <div className="bg-faded p-5 rounded mx-auto">
                            <ul>
                                    <li><p className="contentfont mb-0"><b>身體疾病​</b></p></li>
                                    <ul>
                                        <li><p className="contentfont mb-0">肺炎​</p></li>
                                        <li><p className="contentfont mb-0">鏈球菌感染​</p></li>
                                        <li><p className="contentfont mb-0">腮腺炎</p></li>
                                        <li><p className="contentfont mb-0">麻疹</p></li>
                                        <li><p className="contentfont mb-0">長時間高燒​</p></li>
                                        <li><p className="contentfont mb-0">心臟病​</p></li>
                                        <li><p className="contentfont mb-0">新冠肺炎​</p></li>
                                        <li><p className="contentfont mb-0">糖尿病</p></li>
                                        <li><p className="contentfont mb-0">甲狀腺低下​</p></li>
                                        <li><p className="contentfont mb-0">週邊血管疾病​</p></li>
                                        <li><p className="contentfont mb-0">雷諾氏現象​</p></li>
                                    </ul>
                                    <hr/>
                                    <li><p className="contentfont mb-0"><b>指甲基質受外在因素影響​</b></p></li>
                                    <ul>
                                        <li><p className="contentfont mb-0">指甲基質受重物壓迫​</p></li>
                                        <li><p className="contentfont mb-0">暴露於嚴寒環境​</p></li>
                                        <li><p className="contentfont mb-0">做指甲感染或不當修剪指甲​</p></li>
                                    </ul>
                                    <hr/>
                                    <li><p className="contentfont mb-0"><b>皮膚疾病</b></p></li>
                                    <ul>
                                        <li><p className="contentfont mb-0">濕疹</p></li>
                                        <li><p className="contentfont mb-0">乾癬</p></li>
                                        <li><p className="contentfont mb-0">缺乏特定營養素​</p></li>
                                        <li><p className="contentfont mb-0">缺乏鋅</p></li>
                                        <li><p className="contentfont mb-0">缺乏蛋白質​</p></li>
                                    </ul>
                                    <hr/>

                                    <li><p className="contentfont mb-0"><b>值得注意的是，嚴重的精神壓力和心理疾病，也可能影響指甲健康，造成博氏線的出現。</b></p></li>
                                    <hr/>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 縱向黑甲症 */}
            <section className="page-section" id='blackline'>
                <div className="container">
                    <div className="product-item">
                        <div className="product-item-title d-flex">
                            <div className="bg-faded2 p-5 d-flex me-auto rounded">
                                <h2 className="section-heading mb-0">
                                    
                                    <span className="section-heading-lower">縱向黑甲症</span>
                                </h2>
                            </div>
                        </div>
                        <img className="img-detect mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={blackline} alt="..." />
                        <div className="product-item-description d-flex mx-auto">
                            <div className="bg-faded p-5 rounded mx-auto">
                                    <p className="contentfont mb-0">指甲上的黑線超過95%為淡灰色、深黑色或淡棕色。指甲有黑線其實並不稀奇，不妨想像成甲床上長了痣，只是在指甲上以黑線的方式呈現。雖然任何年齡層都有可能在手指或腳趾出現，不過除了黑色素細胞活化外，<b>以下情況也可能會讓你的指甲長出黑線：</b></p>
                                <ul>
                                    <li><p className="contentfont mb-0"><b>黴菌感染：</b>有些黴菌感染會產生黑色素堆積在指甲上，造成指甲出現線狀或塊狀黑色素沉積。​</p></li>
                                    <hr/>
                                    <li><p className="contentfont mb-0"><b>疾病病徵：</b>甲狀腺亢進、營養不良、愛滋病、乾癬等都會讓指甲出現黑線。​</p></li>
                                    <hr/>
                                    <li><p className="contentfont mb-0"><b>血塊淤積：</b>甲床下出血可能導致血液積聚於甲床變得暗沉，導致指甲出現黑線。​</p></li>
                                    <hr/>
                                    <li><p className="contentfont mb-0"><b>藥物影響：</b>化a療藥物、治療青春痘的四環黴素。​</p></li>
                                    <hr/>
                                    <li><p className="contentfont mb-0"><b>外傷：</b>摳抓、啃咬指甲造成色素沉澱。​</p></li>
                                    <hr/>
                                    <li><p className="contentfont mb-0"><b>種族基因：</b>相較於亞洲人，黑人的指甲較容易出現黑線，據統計，約有77%的黑人到20歲前會出現縱向黑甲症。​</p></li>
                                    <hr/>
                                </ul>
                                    
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
                                    <span className="section-heading-lower">縱向黑甲症​</span>
                                </h2>
                            </div>
                        </div>
                        <img className="img-detect mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={blackline2} alt="..." />
                        <div className="product-item-description d-flex mx-auto">
                            <div className="bg-faded p-5 rounded mx-auto">
                                <p className="contentfont mb-0">雖然指甲長黑線大多屬於良性變化，不過當你發現指甲的黑線<b>符合下列情況時，則需留意是否為罹患黑色素瘤的高風險患者</b>（Melanoma，或稱黑色素細胞癌），建議盡快就醫由醫師進行專業診斷：​</p>
                                <p className="contentfont mb-0"><b>1.</b>黑線開始往旁邊擴散​</p>
                                <p className="contentfont mb-0"><b>2.</b>顏色深淺不一​</p>
                                <p className="contentfont mb-0"><b>3.</b>寬窄粗細不一樣​</p>
                                <p className="contentfont mb-0"><b>4.</b>黑線不規則變黑​</p>
                                <p className="contentfont mb-0"><b>5.</b>指甲全黑​</p>
                                <p className="contentfont mb-0"><b>6.</b>指甲附近出現跳躍性斑塊​</p>
                                <p className="contentfont mb-0"><b>7.</b>指甲附近皮膚變黑​</p>

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
                                    <span className="section-heading-lower">指甲黑線是否會自行消失​</span>
                                </h2>
                            </div>
                        </div>
                        <img className="img-detect mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={blackline3} alt="..." />
                        <div className="product-item-description d-flex mx-auto">
                            <div className="bg-faded p-5 rounded mx-auto">
                                <ul>
                                    <li><p className="contentfont mb-0">因<b>多數指甲黑線屬良性</b>，若只是單純黑色素細胞活化，或因口服藥物（四環黴素、化療藥物）、外傷等原因，只要停藥或是待外傷痊癒，過段時間就會自行消失。​</p></li>
                                    <hr/>
                                    <li><p className="contentfont mb-0">不過若是<b>因為疾病而產生的黑線</b>，例如甲狀腺亢進、營養不良、乾癬、粘液囊腫、全身性紅斑性狼瘡等，則需要等疾病治療痊癒，指甲的黑線才會消失。​</p></li>
                                    <hr/>
                                </ul>
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 指甲剝離 */}
            <section className="page-section" id='nailbroken'>
                <div className="container">
                    <div className="product-item">
                        <div className="product-item-title d-flex">
                            <div className="bg-faded2 p-5 d-flex me-auto rounded">
                                <h2 className="section-heading mb-0">
                                    <span className="section-heading-lower">指甲剝離​</span>
                                </h2>
                            </div>
                        </div>
                        <img className="img-detect mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={nailbroken} alt="..." />
                        <div className="product-item-description d-flex mx-auto">
                            <div className="bg-faded p-5 rounded mx-auto">
                                <p className="contentfont mb-0">甲床剝離就是指甲板和下面的甲床黏不牢分開了，分開之後中間會有空氣，光線散射的關係所以常常呈現白或灰白的顏色，嚴重一點的話還會有指甲半掀半合搖搖欲墜的感覺。​​</p>
                                <p className="contentfont mb-0">有時候分開的空隙裡面仔細看揮看到一層像粉屑的東西，那是甲床受傷之後產生皮膚化的現象（甲床脫皮）。​</p>

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
                                    <span className="section-heading-lower">指甲剝離的原因</span>
                                </h2>
                            </div>
                        </div>
                        <div className="product-item-description mx-auto d-flex rounded mb-3 mb-lg-0">
                            <div className="bg-faded p-5 rounded mx-auto">
                                    <p className="contentfont mb-0">甲床剝離按照分離的位置又分為<b>遠端(onycholysis)、近端(onychomadesis)及中央</b>三種。​會造成剝離的原因有<b>先天和後天</b>兩大類，但又以後天居多。​</p>
                                    <p className="contentfont mb-0">後天成因裡大致可分為以下幾種：​​</p>
                                    <ul>
                                        <p className="contentfont mb-0"><b>外在因素：​</b></p>
                                        <li><p className="contentfont mb-0"><b>外傷:</b>這是造成甲床剝離最常見的原因，除了少數是急性外傷 (如指甲折傷)，多數是慢性外傷引起，譬如大量使用手部工作的人（如陶藝家、工廠作業員、鋼琴家、編織業、木匠、機械工等）或長期穿太緊的鞋子（如高跟鞋）、大量使用足部急停動作的運動（如羽球、馬拉松），還有些人則是喜歡撥弄指甲。​</p></li>
                                        <hr/>
                                        <li><p className="contentfont mb-0"><b>長時間潮濕:</b>如家庭主婦、美髮師、魚販、清潔工、洗衣工、廚師等，長時間需接觸水或液體。​​</p></li>
                                        <hr/>
                                        <li><p className="contentfont mb-0"><b>感染：</b>包括甲癬、念珠菌、腐生黴菌、細菌（如綠膿桿菌）、病毒（如腸病毒、單純性皰疹）、疥瘡等。​​</p></li>
                                        <hr/>
                                        <li><p className="contentfont mb-0"><b>接觸外來物品：</b>如刺激性物品，像是肥皂水、清潔劑、化學溶劑、指甲油、去光水、水晶指甲黏著劑、含福馬林的指甲硬化劑。​​​</p></li>
                                        <hr/>
                                        <li><p className="contentfont mb-0"><b>藥物：</b>有些藥物會堆積在指甲，甚至有光毒性。最常見的是抗生素，尤以四環黴素類最多（特別是常用來治療痘痘或毛囊炎的doxycycline），而氯黴素也有案例。另一類知名的是化療藥物​。​​​</p></li>
                                        <hr/>
                                    </ul>
                                    <ul>
                                        <p className="contentfont mb-0"><b>內在因素：​</b></p>
                                        <li><p className="contentfont mb-0"><b>皮膚疾病：</b>最有明的是富貴手、異位性皮膚炎和乾癬，但其他像是扁平苔癬、天皰瘡、達瑞耳氏病、多汗症、甚至腫瘤（如化膿性肉芽腫、惡性黑色素細胞癌、絲球瘤、骨軟骨瘤等）也會造成。​​</p></li>
                                        <hr/>
                                        <li><p className="contentfont mb-0"><b>全身性疾病：</b>甲狀腺亢進最有名，其他如懷孕、貧血、糖尿病、紅斑性狼瘡、硬皮症、梅毒、遲發性皮膚紫質沉著症、類澱粉沉著症、多發性骨髓瘤、支氣管擴張症、末梢循環不良、皮膚淋巴瘤等都可能引起。​​​</p></li>
                                        <hr/>
                                    </ul>
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
                                    <span className="section-heading-lower">治療指甲剝離</span>
                                </h2>
                            </div>
                        </div>
                        <img className="img-detect mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={nailbroken2} alt="..." />
                        <div className="product-item-description d-flex mx-auto">
                            <div className="bg-faded p-5 rounded mx-auto">
                                <p className="contentfont mb-0">治療甲床剝離的關鍵是找出引起的原因，避免接觸刺激物質，如水或化學品。根據不同原因，可以使用塗抹類固醇、抗黴菌藥物，或其他相應的治療方法。</p>
                                <p className="contentfont mb-0">同時，可以嘗試使用保護性物質，如凡士林。嚴重剝離時，有時需要拔除指甲促使重新生長。在治療過程中，醫生的觀點和處方可能有所不同，有些情況下可能會考慮使用抗黴菌藥物，但效果因人而異。</p>
                                <p className="contentfont mb-0">也有報告指出，使用抗生素對不明原因的甲床剝離有改善作用，可能與念珠菌相關。​</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 白甲 */}
            <section className="page-section" id='whitedot'>
                <div className="container">
                    <div className="product-item">
                        <div className="product-item-title d-flex">
                            <div className="bg-faded2 p-5 d-flex me-auto rounded">
                                <h2 className="section-heading mb-0">
                                    <span className="section-heading-lower">白甲</span>
                                </h2>
                            </div>
                        </div>
                        <img className="img-detect mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={whitedot} alt="..." />
                        <div className="product-item-description d-flex mx-auto">
                            <div className="bg-faded p-5 rounded mx-auto">
                                <p className="contentfont mb-0">很多人都有過指甲長白點的經驗，本來粉紅色的指甲突然出現了一塊或點狀、輪廓不均勻的白色，有些會隨著指甲生長不知不覺間不見，有些則會持續一段時間。指甲有白點在醫學上的正式名稱稱為「點狀白甲症」。</p>
                                <p className="contentfont mb-0"><b>依照白斑的形狀可以分成：​</b></p>
                                <ul>
                                    <li><p className="contentfont mb-0">點狀、不規則的「點狀白甲」</p></li>
                                    <li><p className="contentfont mb-0">1～2mm寬、成直線狀分布的「線狀白甲」​</p></li>
                                    <li><p className="contentfont mb-0">整片指甲泛白的「泛發性白甲」​</p></li>
                                </ul>
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
                                    <span className="section-heading-lower">指甲有白點可能原因​</span>
                                </h2>
                            </div>
                        </div>
                        <img className="img-detect mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={whitedot2} alt="..." />
                        <div className="product-item-description d-flex mx-auto">
                            <div className="bg-faded p-5 rounded mx-auto">
                                <p className="contentfont mb-0"><b>1.輕微外傷或空氣進入​</b></p>
                                <p className="contentfont mb-0">最常見的指甲白斑形成原因，是由輕微外傷或空氣進入指甲的縫隙形成的。所謂的甲床是指指尖被指甲覆蓋的部分，而指甲上粉紅色的部分則稱為甲板，若是指甲的甲板在生長的過程中因為碰撞、空氣進入而發育不全，就會產生白點。這類型的白點會隨著指甲長長而漸漸被外推消失，除非有持續疼痛或傷口，否則不需要特別擔心。​​</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section">
                <div className="container">
                    <div className="product-item">
                        <img className="img-detect mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={whitedot3} alt="..." />
                        <div className="product-item-description d-flex mx-auto">
                            <div className="bg-faded p-5 rounded mx-auto">
                                <p className="contentfont mb-0"><b>2.缺乏特定營養素</b></p>
                                <p className="contentfont mb-0">突然出現指甲白斑可能是某些礦物質、維生素缺乏所引起的，最常見的是鋅和鈣，但其實發生這種情況的機率相對低。比起缺乏特定的礦物質、維生素，一般的飲食不均衡常會造成必需的脂肪酸及蛋白質缺乏，進而影響指甲生長，此時的指甲會變得脆弱、甲板變薄，只要輕輕受到外傷碰撞，就容易形成明顯的指甲白斑。​</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section">
                <div className="container">
                    <div className="product-item">
                        <img className="img-detect mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={whitedot4} alt="..." />
                        <div className="product-item-description d-flex mx-auto">
                            <div className="bg-faded p-5 rounded mx-auto">
                                <p className="contentfont mb-0"><b>3.疾病的徵兆​</b></p>
                                <p className="contentfont mb-0">指甲白斑通常是因輕微碰撞或啃咬指甲等行為導致，不需過度擔心，留意後續復原狀況即可。但若多指同時出現白斑、白線或整片泛白，可能是心臟病、腎衰竭、皮膚疾病、真菌感染或肺炎的徵兆。建議若發現異常的指甲白斑，尋求皮膚科醫生診斷，確認原因以進一步治療。​</p>

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
                                    <span className="section-heading-lower">避免產生指甲白斑方法</span>
                                </h2>
                            </div>
                        </div>
                        <img className="img-detect mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={whitedot5} alt="..." />
                        <div className="product-item-description d-flex mx-auto">
                            <div className="bg-faded p-5 rounded mx-auto">
                                <p className="contentfont mb-0"><b>1.戒掉「咬指甲」的習慣，並定期修剪指甲​</b></p>
                                <p className="contentfont mb-0">咬指甲不僅不雅觀，還可能將手上的細菌吃進肚子裡，對健康不利。同時，啃咬指甲會讓指甲邊緣變得粗糙不規則，容易造成指甲翻起或受傷。此外，咬指甲的過程也可能導致指甲白斑的形成。因此，還是戒掉咬指甲的習慣吧！適當修剪指甲可以避免外翻，長度適中的指甲也不容易在日常活動中受到碰撞，是一個很好的習慣。​</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section">
                <div className="container">
                    <div className="product-item">
                        <div className="product-item-title d-flex">
                        </div>
                        <img className="img-detect mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={whitedot6} alt="..." />
                        <div className="product-item-description d-flex mx-auto">
                            <div className="bg-faded p-5 rounded mx-auto">
                                <p className="contentfont mb-0"><b>2.攝取充分的優質蛋白質​</b></p>
                                <p className="contentfont mb-0">因為維生素的缺乏導致指甲有白點的情況並不多見，但人體製造指甲的角蛋白（主要的指甲蛋白）來源主要來自於蛋白質的攝取，像是魚肉、堅果、豆類、蛋等富含優質蛋白質的食物，有助於促進角蛋白增生，讓指甲更健康。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section">
                <div className="container">
                    <div className="product-item">
                        <div className="product-item-title d-flex">
                        </div>
                        <img className="img-detect mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={whitedot7} alt="..." />
                        <div className="product-item-description d-flex mx-auto">
                            <div className="bg-faded p-5 rounded mx-auto">
                                <p className="contentfont mb-0"><b>3.避免接觸刺激物品</b></p>
                                <p className="contentfont mb-0">因為維生素的缺乏導致指甲有白點的情況並不多見，但人體製造指甲的角蛋白（主要的指甲蛋白）來源主要來自於蛋白質的攝取，像是魚肉、堅果、豆類、蛋等富含優質蛋白質的食物，有助於促進角蛋白增生，讓指甲更健康。</p>
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

