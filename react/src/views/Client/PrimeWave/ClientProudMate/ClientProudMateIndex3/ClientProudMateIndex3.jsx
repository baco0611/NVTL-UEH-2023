import { useEffect, useState } from "react"
import './ClientProudMateIndex3.scss'
import clsx from 'clsx'
import { Navigate, useNavigate } from 'react-router-dom'
import quote from './img/quote.png'
import leftCard from './img/leftCard.png'
import rightCard from './img/rightCard.png'
import template1 from '../img/Template1.png'
import template2 from '../img/Template2.png'

export default function ClientProudMateIndex3({ setIndex, proudMateInfo}) {
    if(!proudMateInfo.condition)
        setIndex(2)

    const [ select, setSelect ] = useState(0)
    const navigate = useNavigate()

    const handleSaving = () => {
        if(select) {
            const a = document.createElement('a')
            if(select == 1)
                a.href = template1
            else
                a.href = template2
    
            a.download = "proudmate-template"
            a.click()
            setTimeout(() => navigate('/primewave/proudmate'), 1200)
        }
    }

    return (
        <div className="client-proud-3">
            <img className="quote" src={quote}/>
            <h1>LỰA CHỌN CỦA BẠN LÀ</h1>
            <div className="client-proud-3-main">
                <div 
                    className={clsx("card-container", {disable: select == 2})}
                    onClick={() => setSelect(1)}
                >
                    <img 
                        className={clsx("frame", {left: select == 1})} 
                        src={leftCard}
                    />
                    <img 
                        className={clsx("template", {selected: select == 1})}  
                        src={template1}
                    />
                </div>
                <div 
                    className={clsx("card-container", {disable: select == 1})}
                    onClick={() => setSelect(2)}
                >
                    <img 
                        className={clsx("frame", {right: select == 2})} 
                        src={rightCard}
                    />
                    <img 
                        className={clsx("template", {selected: select == 2})}  
                        src={template2}
                    />
                </div>
            </div>
            <div className="client-proud-3-btn">
                <button className="secondary-button" onClick={handleSaving}>
                    <i className="fa-solid fa-cloud-arrow-down"></i>
                    Tải ảnh xuống
                </button>
            </div>
        </div>
    )
}
