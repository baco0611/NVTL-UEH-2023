import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../context/ContextProvider"
import './Recruitment.scss'
import clsx from 'clsx'
import TraoInformation from "./TraoInformation/TraoInformation"
import TraoRecruit from "./TraoRecruit/TraoRecruit"
import banner from './img/banner.png'


function Recruitment() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/recruitment'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])
    const [ page, setPage ] = useState(1)

    return (
        <section id="client-recruitment" className="client-recruit">
            <img style={{width: "100%"}} src={banner}/>
            <div className="client-recruit-nav">
                <div
                    className={clsx('client-recruit-nav-item', {active: page == 1})}
                    onClick={() => {setPage(1)}}
                >
                    <p>Ban Phong trào - Tình nguyện UEH</p>
                </div>
                <div
                    className={clsx('client-recruit-nav-item', {active: page == 2})}
                    onClick={() => {setPage(2)}}
                >
                    <p>Chương trình Tuyển CTV 2023</p>
                </div>
            </div>
            {
                page == 1
                ? <TraoInformation/>
                : <TraoRecruit/>
            }
        </section>
    )
}

export default Recruitment