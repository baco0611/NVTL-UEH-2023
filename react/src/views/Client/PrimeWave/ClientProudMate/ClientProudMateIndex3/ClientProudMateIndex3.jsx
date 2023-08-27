import { useContext, useEffect, useState } from "react"
import './ClientProudMateIndex3.scss'
import clsx from 'clsx'
import { Navigate, useNavigate } from 'react-router-dom'
import quote from './img/quote.png'
import leftCard from './img/leftCard.png'
import rightCard from './img/rightCard.png'
import template1 from '../img/Template1.png'
import template2 from '../img/Template2.png'
import axiosClient from "../../../../../context/axiosClient"
import { UserContext } from "../../../../../context/ContextProvider"

export default function ClientProudMateIndex3({ setIndex, proudMateInfo}) {
    useEffect(() => {
        if(!proudMateInfo.condition)
            setIndex(2)
    }, [])

    const [ choice, setChoice ] = useState(proudMateInfo.teamInformation ? proudMateInfo.teamInformation.choice : 0)
    const navigate = useNavigate()
    const { getUserId } = useContext(UserContext)

    const handleSaving = () => {
        if(choice) {
            const a = document.createElement('a')
            if(choice == 1)
                a.href = template1
            else
                a.href = template2
    
            a.download = "proudmate-template"
            a.click()
            setTimeout(() => navigate('/primewave/proudmate'), 1200)
        }
    }

    const setChangeChoice = (select) => {
        setChoice(select)
        axiosClient.post('/updateTemplateChoice', {
            idProudMate: getUserId(proudMateInfo.teamInformation.idProudMate).real,
            choice: select
        })
    }

    if(proudMateInfo.condition)
        return (
            <div className="client-proud-3">
                <img className="quote" src={quote}/>
                <h1>LỰA CHỌN CỦA BẠN LÀ</h1>
                <div className="client-proud-3-main">
                    <div 
                        className={clsx("card-container", {disable: choice == 2})}
                        onClick={() => setChangeChoice(1)}
                    >
                        <img 
                            className={clsx("frame", {left: choice == 1})} 
                            src={leftCard}
                        />
                        <img 
                            className={clsx("template", {selected: choice == 1})}  
                            src={template1}
                        />
                    </div>
                    <div 
                        className={clsx("card-container", {disable: choice == 1})}
                        onClick={() => setChangeChoice(2)}
                    >
                        <img 
                            className={clsx("frame", {right: choice == 2})} 
                            src={rightCard}
                        />
                        <img 
                            className={clsx("template", {selected: choice == 2})}  
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
    else
        return <></>
}
