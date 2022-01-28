import Navigation from "../сomponents/Nav"
import TitleLitter from "../сomponents/TitleLitter"
import './index.sass'

const Skills = () => {
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
                            <h2 className='skills__title'>
                                {
                                    'Навыки и опыт'.split('').map((elem, index) => {
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
                                    Поскольку я учусь в университете у меня нет возможности работать в офисе полный день поэтому мой опыт,
                                    в основном, 
                                    <br/><br/>
                                    Я создаю успешные адаптивные веб-сайты, быстрые, простые в использовании и созданные с 
                                    использованием лучших практик. Основная область моих знаний — разработка интерфейса, 
                                    HTML, CSS, JS, создание малых и средних веб-приложений, пользовательских плагинов, функций, 
                                    анимации и кодирование интерактивных макетов.
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

                    <div className="container-block skills__container">
                        <div className="skills__stat-block">
                            <div className="skills__stat-block__title">
                                Front-end
                            </div>
                            
                            <div className="skills__stat">
                                <div className="skills__stat-name">
                                    HTML CSS SASS
                                </div>
                                <div className="skills__stat-line">
                                    <div className="skills__stat-line__indicator" style={{width: '95%'}}>
                                        <div className="skills__stat-line__indicator__fill"></div>
                                    </div>
                                </div>

                                <div className="skills__stat-name">
                                    JQuery
                                </div>
                                <div className="skills__stat-line">
                                    <div className="skills__stat-line__indicator" style={{width: '80%'}}>
                                        <div className="skills__stat-line__indicator__fill"></div>
                                    </div>
                                </div>
                                
                                <div className="skills__stat-name">
                                    Three.js
                                </div>
                                <div className="skills__stat-line">
                                    <div className="skills__stat-line__indicator" style={{width: '60%'}}>
                                        <div className="skills__stat-line__indicator__fill"></div>
                                    </div>
                                </div>

                                <div className="skills__stat-name">
                                    React
                                </div>
                                <div className="skills__stat-line">
                                    <div className="skills__stat-line__indicator" style={{width: '80%'}}>
                                        <div className="skills__stat-line__indicator__fill"></div>
                                    </div>
                                </div>

                                <div className="skills__stat-name">
                                    Vue
                                </div>
                                <div className="skills__stat-line">
                                    <div className="skills__stat-line__indicator" style={{width: '40%'}}>
                                        <div className="skills__stat-line__indicator__fill"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="skills__stat-block">
                            <div className="skills__stat-block__title">
                                Back-end
                            </div>
                            
                            <div className="skills__stat">
                                <div className="skills__stat-name">
                                    Express.js
                                </div>
                                <div className="skills__stat-line">
                                    <div className="skills__stat-line__indicator" style={{width: '60%'}}>
                                        <div className="skills__stat-line__indicator__fill"></div>
                                    </div>
                                </div>

                                <div className="skills__stat-name">
                                    MongoDB
                                </div>
                                <div className="skills__stat-line">
                                    <div className="skills__stat-line__indicator" style={{width: '50%'}}>
                                        <div className="skills__stat-line__indicator__fill"></div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <div className='mobile-v' style={{width: '100%'}}>
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

export default Skills