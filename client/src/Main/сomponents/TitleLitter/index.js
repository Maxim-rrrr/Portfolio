import { useState, useRef, useEffect } from 'react'
import './style.sass'

const TitleLitter = (props) => {
    const [animate, setAnimate] = useState(false)
    const [animation, setAnimation] = useState('zoomIn')
    const [view, setView] = useState(false)
    const [fade, setFade] = useState(false)
    const elem = useRef(null)

    const animateElem = (anim) => {
        if (!animate) {
            setAnimate(true)
            setAnimation(anim)
            setFade(true)

            const timer = setInterval(() => {
                setAnimate(false)
                clearInterval(timer)
            }, 800)
        }
    }

    useEffect(() => {
        const listener = () => {
            const docViewTop = window.scrollY
            const docViewBottom = docViewTop + window.outerHeight
            const elemTop = elem.current.offsetTop
            const elemBottom = elem.current.offsetTop + elem.current.offsetHeight

            if ((elemBottom <= docViewBottom) && (elemTop >= docViewTop)) {
                setView(true)
                setTimeout(() => {
                    animateElem('bounceIn')
                }, +props.delay)

                document.removeEventListener('scroll', listener)
            }
        }

        if (!view) {
            document.addEventListener('scroll', listener)
        }

        listener()
    }, [])

    return (
        <>  
            {
                !fade ?
                <span className="title-letter title-letter--hidden" ref={elem}>{props.children !== ' ' ? props.children : <span>&nbsp;</span>}</span> :
                <>
                    {
                        animate ?
                        <span className={"title-letter animate__animated animate__" + animation}  ref={elem}>{props.children !== ' ' ? props.children : <span>&nbsp;</span>}</span> :
                        <span className="title-letter"  ref={elem} onMouseEnter={() => {animateElem('rubberBand')}}>{props.children !== ' ' ? props.children : <span>&nbsp;</span>}</span>
                    }
                </>
            }
            
        </>
    )
}

export default TitleLitter