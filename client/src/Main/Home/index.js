import Navigation from "../сomponents/Nav"
import TitleLitter from "../сomponents/TitleLitter"
import './style.sass'
import Logo from '../../images/Logo.png'
import { Link } from "react-router-dom"


const Home = () => {
    return (
        <>
            <Navigation />

            <section className="section section--full-screen">
                <div className="container container--column">
                    <div>
                        <div className="tag tag--0">{ '<html>' }</div>
                        <div className="tag tag--1">{ '<body>' }</div>
                        <div className="tag tag--2">{ '<section>' }</div>
                    </div>

                    <div className="hero__text-box">
                        <div className="tag tag--3">{ '<h1>' }</div>
                        <h1 className="hero__hello">
                            {
                                'Привет,'.split('').map((elem, index) => {
                                    return (
                                        <TitleLitter delay={70 * index}>{elem}</TitleLitter>
                                    )
                                })
                            }
                            <br/>
                            <TitleLitter delay={490}>Я</TitleLitter>
                            
                            <TitleLitter delay={560}><img src={Logo} alt="" className='home__logo-in-title'/></TitleLitter>
                            
                            {
                                'акс,'.split('').map((elem, index) => {
                                    return (
                                        <TitleLitter delay={630 + 70 * index}>{elem}</TitleLitter>
                                    )
                                })
                            }
                            <br/>
                            {
                                'Веб-Разработчик'.split('').map((elem, index) => {
                                    return (
                                        <TitleLitter delay={700 + 70 * index}>{elem}</TitleLitter>
                                    )
                                })
                            }
                        </h1>
                        <div className="tag tag--3">{ '</h1>' }</div>

                        <div className="hero__position-box">
                            <div className="tag tag--3">{ '<p>' }</div>
                            <div className="hero__text-position">
                                Front-End / Back-End Developer
                            </div>
                            <div className="tag tag--3">{ '<p/>' }</div>
                        </div>

                        <Link to='/contact'>
                            <div className='home__btn-contact'>
                                <span className="home__btn-contact__base"></span>
                                <span className="home__btn-contact__text">Связаться!</span>
                            </div>
                        </Link>
                    </div>

                    <div></div>
                </div>
            </section>
            <section className="section section--full-screen"></section>
        </>
    )
}

export default Home