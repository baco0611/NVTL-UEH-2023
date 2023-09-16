import { useContext, useEffect } from "react"
import { UserContext } from "../../../../context/ContextProvider"
import '../WeeklyGlobal.scss'
import dayTitle from './img/day2Title.png'
import guide from '../img/guide.png'
import timelineTitle from '../img/timelineTitle.png'
import mapTitle from '../img/mapTitle.png'
import timeline from './img/timeline.png'
import map from '../img/mapDay2.png'

function Day2() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/weekly'), [])

    return (
        <section className='client-weekly client-day'>
            <img 
                src={dayTitle} 
                className="weekly-day-title"    
            />
            <div className="client-day-guide">
                <img src={guide} className="title"/>
                <p>
                    Thời gian: 28.09.2023 <br/>
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

export default Day2