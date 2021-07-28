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
                                <div className="hero__text-position">
                                    Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. 
                                    Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала 
                                    XVI века. В то время некий безымянный печатник создал большую коллекцию 
                                    <br /><br />
                                    размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. 
                                    Lorem Ipsum не только успешно пережил без заметных изменений пять веков, 
                                    но и перешагнул в электронный дизайн. Его популяризации в новое время послужили 
                                    <br /><br />
                                    публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более 
                                    недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах 
                                    которых используется Lorem Ipsum.
                                    <br />
                                    <br />
                                    <Link to='/contact' className='link'>
                                        Lorem.
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