import { useContext, useEffect } from "react"
import { UserContext } from "../../../../context/ContextProvider"
import '../WeeklyGlobal.scss'
import dayTitle from './img/day4Title.png'
import guide from '../img/guide.png'
import timelineTitle from '../img/timelineTitle.png'
import mapTitle from '../img/mapTitle.png'
import timeline from './img/timeline.png'
import map from '../img/mapDay4.png'
import mainAct from './img/mainAct.png'
import name1 from './img/name1.png'
import name2 from './img/name2.png'
import act1 from './img/act1.png'
import act2 from './img/act2.png'

function Day4() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/weekly'), [])

    return (
        <section className='client-weekly client-day'>
            <img 
                src={dayTitle} 
                className="weekly-day-title"    
            />
            <div className="client-day-act">
                <img src={mainAct} className="title"/>
                <div className="client-day-act-main">
                    <div>
                        <img src={name1} className="name"/>
                        <img src={act1} className="act"/>
                    </div>
                    <div>
                        <img src={name2} className="name"/>
                        <img src={act2} className="act"/>
                    </div>
                </div>
            </div>
            <div className="client-day-guide">
                <img src={guide} className="title"/>
                <p>
                    Thời gian: 30.09.2023 <br/>
                    Địa điểm: Cơ sở B, 279 Nguyễn Tri Phương, <br/>
                    Phường 5, Quận 10, TP. Hồ Chí Minh <br/>
                </p>
            </div>
            <div className="client-day-timeline">
                <img src={timelineTitle} className="title"/>
                <img src={timeline} className="main"/>
            </div>
            <div className="client-weekly-line"></div>
            <div className="client-day-map">
                <img src={mapTitle} className="title"/>
                <img src={map} className="main"/>
            </div>
        </section>
    )
}

export default Day4