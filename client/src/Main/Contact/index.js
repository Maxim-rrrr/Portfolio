import { useState } from "react";
import Navigation from "../сomponents/Nav"
import TitleLitter from "../сomponents/TitleLitter"
import { YMaps, Map, Placemark } from "react-yandex-maps";

import './index.sass'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const [activePopup, setActivePopup] = useState(false)
    const [messagePopup, setMessagePopup] = useState('')

    const submit = event => {
        console.log('submit')
        setActivePopup(true)
        if (name && email && subject && message) {
            setMessagePopup('Отправлено!')
            setName('')
            setEmail('')
            setSubject('')
            setMessage('')
        } else {
            setMessagePopup('НЕ все поля заполнены :(')
        }
    }

    return (
        <>
            <Navigation />

            <section className="section section--full-screen">
                <div className="container container--two-blocks contact">
                    <div className="container-block container-block--column contact__content">
                        <div>
                            <div className="tag tag--0">{ '<html>' }</div>
                            <div className="tag tag--1">{ '<body>' }</div>
                        </div>
                        <div>

                            <div>
                                <div className="tag tag--2 fade-in-right" style={{animationDelay: '1.3s'}}>{ '<h2>' }</div>
                                
                                <h2 className="contact__title">
                                    {
                                        'Связаться со мной'.split('').map((elem, index) => {
                                            return (
                                                <TitleLitter delay={70 * index}>{elem}</TitleLitter>
                                            )
                                        })
                                    }
                                </h2>

                                <div className="tag tag--2 fade-in-right" style={{animationDelay: '1.3s'}}>{ '</h2>' }</div>
                            </div>
                            <div>
                                <div className="tag tag--2 fade-in-right" style={{animationDelay: '2s'}}>{ '<p>' }</div>
                                    <p className='contact__text-prev-form fade-in-up' style={{animationDelay: '1.7s'}}>
                                        Меня интересуют возможности фрилансера - особенно амбициозные или крупные проекты. 
                                        Однако, если у вас есть другой вопрос, не стесняйтесь использовать эту форму.
                                    </p>
                                <div className="tag tag--2 fade-in-right" style={{animationDelay: '2s'}}>{ '</p>' }</div>
                            </div>

                            <div>
                                <div className="tag tag--2 fade-in-right" style={{animationDelay: '3.5s'}}>{ '<form>' }</div>
                                <div className="contact__form">

                                    <div className='contact__input-group fade-in-up' style={{animationDelay: '2.3s'}}>
                                        <div className="contact__input contact__name">
                                            <input 
                                                value={name}
                                                onChange={event => {
                                                    setName(event.target.value)
                                                    setActivePopup(false)
                                                }}
                                                type="text" 
                                                placeholder='Имя'
                                            />
                                            <label></label>
                                        </div>

                                        <div className="contact__input contact__email">
                                            <input 
                                                value={email}
                                                onChange={event => {
                                                    setEmail(event.target.value)
                                                    setActivePopup(false)
                                                }}
                                                type="email" 
                                                placeholder='Email'
                                            />
                                            <label></label>
                                        </div>
                                    </div>

                                    <div className="contact__input contact__subject fade-in-up" style={{animationDelay: '2.6s'}}>
                                        <input 
                                            value={subject}
                                            onChange={event => {
                                                setSubject(event.target.value)
                                                setActivePopup(false)
                                            }}
                                            type="text" 
                                            placeholder='Тема'
                                        />
                                        <label></label>
                                    </div>

                                    <div className="contact__input contact__message fade-in-up" style={{animationDelay: '2.9s'}}>
                                        <textarea 
                                            value={message}
                                            onChange={event => {
                                                setMessage(event.target.value)
                                                setActivePopup(false)
                                            }}
                                            placeholder='Сообщение'
                                        ></textarea>
                                        <label></label>
                                    </div>
                                    
                                    <div onClick={submit} className="contact__btn-contact fade-in-up" style={{animationDelay: '3.2s'}}>
                                        <span className="contact__btn-contact__base"></span>
                                        <span className="contact__btn-contact__text">Отправить</span>
                                    </div>
                                </div>
                                <div className="tag tag--2 fade-in-right" style={{animationDelay: '3.5s'}}>{ '</form>' }</div>
                            </div>
                        </div>

                        <div>
                            <div className="tag tag--1 fade-in-right" style={{animationDelay: '3.7s'}}>{ '</body>' }</div>
                            <div className="tag tag--0 fade-in-right" style={{animationDelay: '3.7s'}}>{ '</html>' }</div>
                        </div>
                    </div>
                    <div className="container-block contact__map">
                        <YMaps className=''>
                            <Map
                                state={{
                                    center: [55.8101517, 49.1054825],
                                    zoom: 5,
                                }}
                                defaultState={{
                                    center: [55.8101517, 49.1054825],
                                    zoom: 5,
                                }}
                                width="100%"
                                height="100%"
                            >
                                <Placemark
                                    geometry={[55.8101517, 49.1054825]}
                                    // defaultProperties={{
                                    //     balloonContent: "М",
                                    // }}
                                    modules={["geoObject.addon.balloon"]}
                                />
                            </Map>
                        </YMaps>
                    </div>
                </div>
            </section>
            
            {
                activePopup &&
                <div className="popup fade-in-up">
                    { messagePopup }
                </div>
            }
        </>
    )
}

export default Contact