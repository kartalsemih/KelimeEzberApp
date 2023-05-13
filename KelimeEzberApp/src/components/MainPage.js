

import { Link } from 'react-router-dom'


import Img2 from '../images/gmail.png'
import Img3 from '../images/github (1).png'
import Img4 from '../images/linkedin.png'
import Img5 from '../images/twitter.png'
import Img6 from '../images/instagram.png'

import React, { useEffect } from 'react';



function MainPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div id="page-top">
                {/* Navigation*/}
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                    <div className="container px-4 px-lg-5">
                        <a className="navbar-brand" href="/"><img className="img-fluid" src="assets/img/pngwing.com (1).png" style={{ width: '75px' }} alt="..." /></a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            
                            <i className="fas fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item"><Link to='/kelime' className="nav-link">1000 Kelime</Link></li>
                                <li className="nav-item"><Link to='/fiil' className="nav-link">100 Fiil</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* Masthead*/}
                <header className="masthead bg-image">

                    <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                        <div className="d-flex justify-content-center">
                            <div className="text-center">
                                <h1 className="mx-auto my-0 text-uppercase">Kelime ezberle</h1>
                                <h2 className="text-white-50 mx-auto mt-2 mb-5">Günlük hayatta en çok kullanılan 1000 ingilizce kelime ve 100 İngilizce fiili ezberle!</h2>
                                <Link to="/kelime"  className="btn btn-secondary">Başla</Link>
                                
                            </div>
                        </div>
                    </div>
                </header>

                <section className="about-section text-center" id="about">
                    <div className="container px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-lg-8">
                                <h2 className="text-white mb-4">Projenin Amacı</h2>
                                <p className="text-white-50">
                                Merhaba, ben Semih Kartal. Bu projeyi, İngilizce kelime ezberlemeyi kolaylaştırmak için geliştirdim. İnanıyorum ki günlük hayatta en çok kullanılan kelimeler bilindiğinde, gramer tarafı daha az zorlayıcı oluyor.Eğer faydalanan birileri olursa mutlu olurum. İyi çalışmalar!
                                </p>
                            </div>
                        </div>
                        <img className="img-fluid" src="assets/img/pngwing.com (1).png" style={{ width: '500px' }} alt="..." />
                    </div>
                </section>

                <footer>
                    <div style={{backgroundColor:'#fff', }} className="site-header py-3 ">
                        <nav className="container-sm site-header sticky-top py-1 ">
                            <div className="row">
                                <div className="col-sm-12 text-center d-flex justify-content-center">
                                    <a href={'https://www.instagram.com/krtl.smh/'} className='footer-margin m-2' target='_blank' rel="noopener noreferrer">
                                        <img style={{ width: '25px' }} src={Img6} alt="" />
                                    </a>
                                    <a href={'https://twitter.com/sanjunip3r0'} className='footer-margin m-2' target="_blank" rel="noopener noreferrer">
                                        <img style={{ width: '25px' }} src={Img5} alt="" />
                                    </a>
                                    <a href={'https://www.linkedin.com/in/semih-kartal-853871264/'} className='footer-margin m-2' target="_blank" rel="noopener noreferrer">
                                        <img style={{ width: '25px' }} src={Img4} alt="" />
                                    </a>
                                    <a href={'https://github.com/kartalsemih'} className='footer-margin m-2' target="_blank" rel="noopener noreferrer">
                                        <img style={{ width: '25px' }} src={Img3} alt="" />
                                    </a>

                                </div>
                            </div>
                        </nav>
                    </div>
                </footer>


            </div>
        </>
    )
}

export default MainPage
