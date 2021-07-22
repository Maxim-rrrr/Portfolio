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
                <div className="container">
                    <div className="tag tag--0">{ '<html>' }</div>
                    <div className="tag tag--1">{ '<body>' }</div>
                    <div className="tag tag--2">{ '<section>' }</div>

                    <div className="hero__text-box">
                        <div className="tag tag--3">{ '<h1>' }</div>
                        <h1 className="hero__hello">
                            <TitleLitter>П</TitleLitter>
                            <TitleLitter>р</TitleLitter>
                            <TitleLitter>и</TitleLitter>
                            <TitleLitter>в</TitleLitter>
                            <TitleLitter>е</TitleLitter>
                            <TitleLitter>т</TitleLitter>
                            <TitleLitter>,</TitleLitter>
                            <br/>
                            <TitleLitter>Я</TitleLitter>
                            <img src={Logo} alt="" className='home__logo-in-title'/>
                            <TitleLitter>а</TitleLitter>
                            <TitleLitter>к</TitleLitter>
                            <TitleLitter>с</TitleLitter>
                            <TitleLitter>,</TitleLitter>
                            <br/>
                            <TitleLitter>В</TitleLitter>
                            <TitleLitter>е</TitleLitter>
                            <TitleLitter>б</TitleLitter>
                            <TitleLitter>-</TitleLitter>
                            <TitleLitter>Р</TitleLitter>
                            <TitleLitter>а</TitleLitter>
                            <TitleLitter>з</TitleLitter>
                            <TitleLitter>р</TitleLitter>
                            <TitleLitter>а</TitleLitter>
                            <TitleLitter>б</TitleLitter>
                            <TitleLitter>о</TitleLitter>
                            <TitleLitter>т</TitleLitter>
                            <TitleLitter>ч</TitleLitter>
                            <TitleLitter>и</TitleLitter>
                            <TitleLitter>к</TitleLitter>
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
                            <div class='home__btn-contact'>
                                <span class="home__btn-contact__base"></span>
                                <span class="home__btn-contact__text">Связаться!</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home