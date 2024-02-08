import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import scorepic from './assets/img/score.png'

export function VideoPage() {
    const navigate = useNavigate();
    const [result, setResult] = useState(null);
    const [q, setQ] = useState(0);    
    const [score,setScore] = useState(0);
    const [home,setHome] = useState(false);

    useEffect(() => {
        switch (q) {
            case 0:
                setResult({
                    'ques': '機器學習中的監督式學習是指：',
                    'a': '模型自行發現模式和特徵',
                    'b': '使用帶有標籤的數據進行訓練',
                    'c': '模型與環境互動學習',
                    'd': '以上皆非',
                });
                break;
            case 1:
                setResult({
                    'ques': '神經網路中的「層次結構」指的是：',
                    'a': '每一層都學習不同層次的抽象特徵',
                    'b': '每一層的神經元相互連接',
                    'c': '模型自行發現模式和特徵',
                    'd': '以上皆非',
                });
                break;
            case 2:
                setResult({
                    'ques': '在機器學習中，強化學習強調的是：',
                    'a': '模型與環境的互動學習',
                    'b': '使用帶有標籤的數據進行訓練',
                    'c': '模型自行發現模式和特徵',
                    'd': '以上皆非',
                });
                break;
            case 3:
                setResult({
                    'ques': '深度學習是指神經網路的：',
                    'a': '淺層結構',
                    'b': '層次結構',
                    'c': '非層次結構',
                    'd': '以上皆非',
                });
                break;
            case 4:
                setResult({
                    'ques': '機器學習中的非監督式學習是指：',
                    'a': '模型自行發現模式和特徵',
                    'b': '使用帶有標籤的數據進行訓練',
                    'c': '模型與環境互動學習',
                    'd': '以上皆非',
                });
                break;
            default:
                break;
        }
    }, [q]);

    function handleHome() {
        navigate('/nailbook');
    }

    function handleAbout() {
        navigate('/nailbook/purpose');
    }

    function handlevideopage() {
        navigate('/nailbook/video');
        setQ(0);
        setScore(0);
    }

    function handleDetect() {
        navigate('/nailbook/detect');
    }

    function handleAns(option) {
        return () => {
            switch (q) {
                case 0:
                    if (option === 'b') {
                        Swal.fire('Correct', '回答正確', 'success');
                        setQ(q + 1);
                        setScore(score + 1);
                    } else {
                        Swal.fire('Mistake', '(B)使用帶有標籤的數據進行訓練', 'error');
                        setQ(q + 1);
                    } 
                    break;
                case 1:
                    if (option === 'a') {
                        Swal.fire('Correct', '回答正確', 'success');
                        setQ(q + 1);
                        setScore(score + 1);
                    } else {
                        Swal.fire('Mistake', '(A)每一層都學習不同層次的抽象特徵', 'error');
                        setQ(q + 1);
                    } 
                    break;
                case 2:
                    if (option === 'a') {
                        Swal.fire('Correct', '回答正確', 'success');
                        setQ(q + 1);
                        setScore(score + 1);
                    } else {
                        Swal.fire('Mistake', '(A) 模型與環境的互動學習', 'error');
                        setQ(q + 1);
                    } 
                    break;
                case 3:
                    if (option === 'b') {
                        Swal.fire('Correct', '回答正確', 'success');
                        setQ(q + 1);
                        setScore(score + 1);
                    } else {
                        Swal.fire('Mistake', '正確答案為(B)層次結構', 'error');
                        setQ(q + 1);
                    } 
                    break;
                case 4:
                    if (option === 'a') {
                        Swal.fire('Correct', '回答正確', 'success').then(() => {
                            Swal.fire({
                                text: '得分:' + (score+1),
                                imageUrl: scorepic,
                            })
                            navigate('/nailbook');
                        });
                    } else {
                        Swal.fire('Mistake', '正確答案為(A)模型自行發現模式和特徵', 'error').then(()=>{
                            Swal.fire({
                                text: '得分:' + (score+1),
                                imageUrl: scorepic,
                            })
                            navigate('/nailbook');
                        });
                    } 
                    break;
                default:
                    break;
            }
        };
    }

    // console.log(q,score);
    
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
            <section className="page-section about-heading">
                <div className="container">
                    <div className="about-heading-content">
                        <div className="row">
                            <div className="col-xl-9 col-lg-10 mx-auto">
                                <div className="bg-faded2 rounded p-2">
                                    <h1>影片演示</h1>
                                </div>
                                <iframe className='video-set' src="https://www.youtube.com/embed/UflwfRh_nZY" allowFullScreen/>
                            </div>
                            <div className="col-xl-9 col-lg-10 mx-auto">
                                <div className="bg-faded2 rounded p-2">
                                    <h1>測驗</h1>
                                </div>
                                <div className="bg-faded3 rounded p-2">
                                    <h3>{result && result.ques}</h3>
                                </div>
                                <div>
                                    <div className="bg-faded-ans rounded p-1">
                                        <p className="contentfont mb-0" onClick={handleAns('a')}>(A) {result && result.a}</p>
                                    </div>
                                    <div className="bg-faded-ans rounded p-1">
                                        <p className="contentfont mb-0" onClick={handleAns('b')}>(B) {result && result.b}</p>
                                    </div>
                                    <div className="bg-faded-ans rounded p-1">
                                        <p className="contentfont mb-0" onClick={handleAns('c')}>(C) {result && result.c}</p>
                                    </div>
                                    <div className="bg-faded-ans rounded p-1">
                                        <p className="contentfont mb-0" onClick={handleAns('d')}>(D) {result && result.d}</p>
                                    </div>
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