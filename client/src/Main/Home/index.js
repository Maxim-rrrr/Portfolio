import Navigation from "../сomponents/Nav"
import './style.sass'


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
                            <span className="title-letter">П</span>
                            <span className="title-letter">р</span>
                            <span className="title-letter">и</span>
                            <span className="title-letter">в</span>
                            <span className="title-letter">е</span>
                            <span className="title-letter">т</span>
                            <span className="title-letter">,</span>
                            <br/>
                            <span className="title-letter">Я </span>
                            <span className="title-letter">М</span>
                            <span className="title-letter">а</span>
                            <span className="title-letter">к</span>
                            <span className="title-letter">с</span>
                            <span className="title-letter">,</span>
                            <br/>
                            <span className="title-letter">В</span>
                            <span className="title-letter">е</span>
                            <span className="title-letter">б</span>
                            <span className="title-letter">-</span>
                            <span className="title-letter">Р</span>
                            <span className="title-letter">а</span>
                            <span className="title-letter">з</span>
                            <span className="title-letter">р</span>
                            <span className="title-letter">а</span>
                            <span className="title-letter">б</span>
                            <span className="title-letter">о</span>
                            <span className="title-letter">т</span>
                            <span className="title-letter">ч</span>
                            <span className="title-letter">и</span>
                            <span className="title-letter">к</span>
                        </h1>
                        <div className="tag tag--3">{ '</h1>' }</div>

                        <div className="hero__position-box">
                            <div className="tag tag--3">{ '<p>' }</div>
                            <div className="hero__text-position">
                                Front-End / Back-End Developer
                            </div>
                            <div className="tag tag--3">{ '<p/>' }</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home