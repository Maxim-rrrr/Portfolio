import Navigation from "../сomponents/Nav"
import { Link } from "react-router-dom"
import img_3d_gallery from "./images/3d_gallery.png"
import img_mgs from "./images/mgs.png"
import img_saytspb from "./images/saytspb.png"
import img_repair_design from "./images/repair-design.png"
import img_MERN_app_template from "./images/MERN_app_template.png"
import img_Gulp from "./images/Gulp.png"

import "./index.sass"

const Work = () => {
    return (
        <>
            <Navigation />
            <section className="section section--full-screen">
                <div className="work__container">
                    <div className="projects">
                        <a href='/3d-gallery/' target="_blank" className='project'>
                            
                            <img className="project__img" src={img_3d_gallery} alt="" />

                            <div className='project__content'>
                                <div className="project__title"> 3D Галерея </div>
                                <div className="project__description"> 
                                    Галерея с использованием 3D полотен на библиотеке Theer.js
                                </div>
                            </div>
                            <div className="project__status">demo</div>
                        </a>
                        
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

                        <a href='https://github.com/Maxim-rrrr/MERN_app_template' target="_blank" className='project'>
                            <img className="project__img" src={img_saytspb} alt="" />
                            <div className='project__content'>
                                <div className="project__title"> SAYTSPB </div>
                                <div className="project__description"> 
                                    Адаптивная вёрстка от 320px и выше, с использованием сборщика Gulp и препроцессора SASS. 
                                    Формы на сайте отправляют письма сразу на почту с помощь модуля написаного на языке PHP.
                                    Так же используется Textolite, модуль заменяющий полноценную андинистративную систему для статичных сайтов, 
                                    позволяет менять текстовый контент сайта без искользования кода. 
                                </div>
                            </div>
                            <div className="project__status">demo</div>
                        </a>

                        <a href='/repair-design/' target="_blank" className='project'>
                            <img className="project__img" src={img_repair_design} alt="" />
                            <div className='project__content'>
                                <div className="project__title"> REPAIR DESIGN </div>
                                <div className="project__description"> 
                                    Адаптивная вёрстка от 320px и выше, с использованием сборщика Gulp и препроцессора SASS. 
                                    Формы на сайте отправляют письма сразу на почту с помощь модуля написаного на языке PHP.
                                    Так же используется Textolite, модуль заменяющий полноценную андинистративную систему для статичных сайтов, 
                                    позволяет менять текстовый контент сайта без искользования кода. 
                                </div>
                            </div>
                            <div className="project__status">demo</div>
                        </a>
                    </div>

                    <h2 className='work__title'>Для разработчиков</h2>
                    <div className="projects">
                        <a href='/repair-design/' target="_blank" className='project'>
                            <img className="project__img" src={img_MERN_app_template} alt="" />
                            <div className='project__content'>
                                <div className="project__title"> Шаблон для приложений на MERN </div>
                                <div className="project__description"> 
                                    Шаблон для создания приложений на стеке MERN (MongoDB, Express, React, Node.js).
                                    Система конфигурации, система логирования, система документирования API, система авторизации по ролям, 
                                    middlewares для загрузки файлов и проверки авторизации, админка + личный кабинет пользователья.
                                    Клиент на React развёрнут c помощью CRA, добавлено 19 кастомных хуков, простоен роутинг и сразу подключен Material UI.
                                </div>
                            </div>
                            {/* <div className="project__status">demo</div> */}
                        </a>
                        <a href='https://github.com/Maxim-rrrr/Start-Assembly-Gulp' target="_blank" className='project'>
                            <img className="project__img" src={img_Gulp} alt="" />
                            <div className='project__content'>
                                <div className="project__title"> Шаблон для сайтов на со сборщиком Gulp  </div>
                                <div className="project__description"> 
                                    Шаблон постоен отталкиваясь от сборщика Gulp. Настроена сборка всех файлов сайта, 
                                    преобразование SASS, оптимизация картинок и минимизация файлов HTML, CSS и JS.  
                                </div>
                            </div>
                            {/* <div className="project__status">demo</div> */}
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Work