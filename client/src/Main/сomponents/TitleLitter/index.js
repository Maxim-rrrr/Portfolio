import { useState } from 'react'
import './style.sass'

const TitleLitter = (props) => {
    
    const [animate, setAnimate] = useState(false)

    const hoverHandler = () => {
        console.log(123)

        if (!animate) {
            setAnimate(true)
        }

        const timer = setInterval(() => {
            setAnimate(false)

            clearInterval(timer)
        }, 800)
    }

    return (
        <>
            {
                animate ?
                <span className="title-letter animate__animated animate__rubberBand">{props.children}</span> :
                <span className="title-letter" onMouseEnter={() => {hoverHandler()}}>{props.children}</span>
            }
        </>
    )
}

export default TitleLitter