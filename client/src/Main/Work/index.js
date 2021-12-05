import Navigation from "../сomponents/Nav"
import { Link } from "react-router-dom"
import img_3d_gallery from "./images/3d_gallery.png"
import img_mgs from "./images/mgs.png"
import "./index.sass"

const Work = () => {
    return (
        <>
            <Navigation />
            <section className="section section--full-screen">
                <div className="work__container">
                    <div className="projects">
                            <Link to='/3d-gallery' className='project'>
                                <img className="project__img" src={img_3d_gallery} alt="" />
                                <div className='project__content'>
                                    <div className="project__title"> 3D Галерея </div>
                                    <div className="project__description"> 
                                        Галерея с использованием 3D полотен на библиотеке Theer.js
                                    </div>
                                </div>
                                <div className="project__status">demo</div>
                            </Link>
                            
                            <a href='https://mgsavto.com/' target="_blank" className='project'>
                                <img className="project__img" src={img_mgs} alt="" />
                                <div className='project__content'>
                                    <div className="project__title"> Интернет магазин компании "Магистраль Авто" </div>
                                    <div className="project__description"> 
                                        Интернет магазин для ООО "Магистраль Авто". 
                                        На стеке технологий MERN (MongoDB, Express, React, Node.js). 
                                        Управление контентом и настройками сайта реализованы через Административную панель.
                                        (Ещё не вступил в полноценное использование) 
                                    </div>
                                </div>
                                {/* <div className="project__status">demo</div> */}
                            </a>

                            {/* <Link to='' className='project'>
                                <img className="project__img" src={img_3d_galley} alt="" />
                                <div className='project__content'>
                                    <div className="project__title"> Проект 1 </div>
                                    <div className="project__description"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus labore recusandae totam voluptatum, quae alias. </div>
                                </div>
                                <div className="project__status">demo</div>
                            </Link> */}
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default Work