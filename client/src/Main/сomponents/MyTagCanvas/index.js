import { useRef, useEffect, useState } from 'react'
import './style.sass'

const MyTagCanvas = () => {
    const elem = useRef('')
    const [size, setSize] = useState({
        height: 0,
        width: 0,
    })

    useEffect(() => {
        setSize({
            height: elem.current.clientHeight,
            width: elem.current.clientWidth
        })
    }, [])
    return (
        <>
            <div id="myCanvasContainer" ref={elem}>
                <canvas width={size.width} height={size.height} id="myCanvas">
                    <p>Anything in here will be replaced on browsers that support the canvas element</p>
                </canvas>
            </div>
            <div id="tags">
                <ul>
                    <li><a href="" color='#1D1D1D'>HTML</a></li>
                    <li><a href="" color='#1D1D1D'>CSS</a></li>
                    <li><a href="" color='#1D1D1D'>SASS</a></li>
                    <li><a href="" color='#1D1D1D'>JavaScript</a></li>
                    <li><a href="" color='#1D1D1D'>React</a></li>
                    <li><a href="" color='#1D1D1D'>Node.js</a></li>
                    <li><a href="" color='#1D1D1D'>MongoDB</a></li>
                    <li><a href="" color='#1D1D1D'>Git</a></li>
                    <li><a href="" color='#1D1D1D'>JQuery</a></li>
                    <li><a href="" color='#1D1D1D'>Gulp</a></li>
                    <li><a href="" color='#1D1D1D'>BEM</a></li>
                    <li><a href="" color='#1D1D1D'>Bootstrap</a></li>
                    <li><a href="" color='#1D1D1D'>Maretrial-UI</a></li>
                </ul>
            </div>
        </>
    )
}

export default MyTagCanvas