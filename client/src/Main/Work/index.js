import Navigation from "../сomponents/Nav"
import { Link } from "react-router-dom"
import img_3d_galley from "./images/3d_gallery.png"
import "./index.sass"

const Work = () => {
    return (
        <>
            <Navigation />
            <section className="section section--full-screen">
                <div className="work__container">
                    <div className="projects">
                            <Link to='/3d-gallery' className='project'>
                                <img className="project__img" src={img_3d_galley} alt="" />
                                <div className='project__content'>
                                    <div className="project__title"> Проект 1 </div>
                                    <div className="project__description"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus labore recusandae totam voluptatum, quae alias. </div>
                                </div>
                                <div className="project__status">demo</div>
                            </Link>
                            
                            {/* <Link to='' className='project'>
                                <img className="project__img" src={img_3d_galley} alt="" />
                                <div className='project__content'>
                                    <div className="project__title"> Проект 1 </div>
                                    <div className="project__description"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus labore recusandae totam voluptatum, quae alias. </div>
                                </div>
                                <div className="project__status">demo</div>
                            </Link>

                            <Link to='' className='project'>
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