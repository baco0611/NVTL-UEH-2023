import pic1 from './img/pic1.png'
import pic2 from './img/pic2.png'
import pic3 from './img/pic3.png'
import pic4 from './img/pic4.png'
import pic5 from './img/pic5.png'
import pic6 from './img/pic6.png'
import pic7 from './img/pic7.png'
import pic8 from './img/pic8.png'
import pic9 from './img/pic9.png'
import pic10 from './img/pic10.png'
import pic11 from './img/pic11.png'
import pic12 from './img/pic12.png'
import { useEffect, useState } from 'react'

function CastingSlider() {
    const [ index , setIndex ] = useState(0)
    const width = Math.max(window.innerWidth, 500) * 0.75
    
    const addIndex = () => {
        if(index == 3) setIndex(0)
        else setIndex(index + 1)
    }

    const minusIndex = () => {
        if(index == 0) setIndex(3)
        else setIndex(index - 1)
    }

    return (
        <div className="client-casting-carousel">
            <div className="carousel-btn">
                <i className="fa-solid fa-caret-left" onClick={minusIndex}></i>
            </div>
            <div className="carousel-main">
                <div className='carousel-box' style={{transform: `translateX(-${index * width}px)`}}>
                    <img src={pic1}/>
                    <img src={pic2}/>
                    <img src={pic3}/>
                </div>   
                <div className='carousel-box' style={{transform: `translateX(-${index * width}px)`}}>
                    <img src={pic4}/>
                    <img src={pic5}/>
                    <img src={pic6}/>
                </div>   
                <div className='carousel-box' style={{transform: `translateX(-${index * width}px)`}}>
                    <img src={pic7}/>
                    <img src={pic8}/>
                    <img src={pic9}/>
                </div>   
                <div className='carousel-box' style={{transform: `translateX(-${index * width}px)`}}>
                    <img src={pic10}/>
                    <img src={pic11}/>
                    <img src={pic12}/>
                </div>   
            </div>
            <div className="carousel-btn">
                <i className="fa-solid fa-caret-right" onClick={addIndex}></i>
            </div>
        </div>
    )
}

export default CastingSlider