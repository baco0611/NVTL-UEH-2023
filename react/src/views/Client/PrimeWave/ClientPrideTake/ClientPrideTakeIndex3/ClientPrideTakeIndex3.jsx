import { useEffect } from 'react'
import './ClientPrideTakeIndex3.scss'
import turtle from './img/turtle.png'
import shark from './img/shark.png'
import sanhophai from './img/sanhophai.png'
import sanhotrai from './img/sanhotrai.png'
import title from './img/title.png'
import subtitle from './img/subtitle.png'

function ClientPrideTakeIndex3({result, setIndex}) {
    useEffect(() => {
        if(!result) {
            setIndex(1)
        }
    }, [])

    const handleBack = () => {
        setIndex(2)
    }

    const handleDownload = async () => {
        //api

        const button = document.createElement('a')
        button.href = result
        button.download = 'yourAvata.png'
        button.click()
    }
 
    return (
        <div id="client-pride-3">
            <img className='client-background turtle' src={turtle}/>
            <img className='client-background shark' src={shark}/>
            <img className='client-background sanhotrai' src={sanhotrai}/>
            <img className='client-background sanhophai' src={sanhophai}/>
            <div className='client-pride-3'>
                <div className='client-pride-3-box'>
                    <div className='content'>
                        <img src={title}/>
                        <img src={subtitle}/>
                    </div>
                </div>
                <img className='client-pride-3-result' src={result}/>
                <div className='client-pride-3-btn'>
                    <button 
                        className='secondary-button client-pride-3-back'
                        onClick={handleBack}
                    >
                        <i className="fa-solid fa-arrow-left-long"></i>
                        Quay lại
                    </button>
                    <button 
                        className='secondary-button client-pride-3-download'
                        onClick={handleDownload}
                    >
                        <i className="fa-solid fa-circle-down"></i>
                        Tải ảnh xuống
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ClientPrideTakeIndex3