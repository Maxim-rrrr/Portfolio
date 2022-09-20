import Navigation from "../сomponents/Nav"
import TitleLitter from "../сomponents/TitleLitter"
import { Link } from "react-router-dom"
import MyTagCanvas from "../сomponents/MyTagCanvas"

const About = () => {
    return (
        <>
            <Navigation />
            <section className="section section--full-screen">
                <div className="container container--two-blocks">

                <div className="container-block container-block--column">
                        <div>
                            <div className="tag tag--0">{ '<html>' }</div>
                            <div className="tag tag--1">{ '<body>' }</div>
                            <div className="tag tag--2">{ '<section>' }</div>
                        </div>

                        <div className="hero__text-box">
                            <div className="tag tag--3">{ '<h2>' }</div>
                            <h2 className='section-title'>
                                {
                                    'Обо мне'.split('').map((elem, index) => {
                                        return (
                                            <TitleLitter delay={70 * index}>{elem}</TitleLitter>
                                        )
                                    })
                                }
                            </h2>
                            <div className="tag tag--3">{ '</h2>' }</div>

                            <div className="hero__position-box">
                                <div className="tag tag--3">{ '<p>' }</div>
                                <div className="hero__text-position" style={{color: '#fff'}}>
                                    Я Web-разработчик. Мне нравится создавать класные и приятные в использовании приложения. 
                                    Обожаю видеть результаты своей работы поэтому всегда оттачиваю каждую мелочь в своих проектах.
                                    Так же не прочь поучаствовать в разработке игр и мобильных приложений. 
                                    <br /><br />
                                    {/* Мне 21 лет, но я успел уже получить аттестацию преподавателя 
                                    Лицея Академии Яндекса по языку программирования Python и сейчас руковожу площадкой, 
                                    на базе своего университета. 
                                    <br /><br /> */}
                                    Заинтересован во всем спектре разработки и работами над амбициозными проектами с позитивными людьми.
                                    <br />
                                    <br />
                                    <Link to='/contact' className='link'>
                                        Давай сделаем что-нибудь особенное.
                                    </Link>
                                </div>

                                <div className="tag tag--3">{ '<p/>' }</div>
                            </div>

                        </div>
                        
                        <div className='mobile-h'>
                            <div className="tag tag--2">{ '</section>' }</div>
                            <div className="tag tag--1">{ '</body>' }</div>
                            <div className="tag tag--0">{ '</html>' }</div>
                        </div>
                    </div>

                    <div className="container-block">
                        <MyTagCanvas/>
                        <div className='mobile-v'>
                            <div className="tag tag--2">{ '</section>' }</div>
                            <div className="tag tag--1">{ '</body>' }</div>
                            <div className="tag tag--0">{ '</html>' }</div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default About