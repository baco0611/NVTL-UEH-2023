import { useContext, useEffect, useRef } from "react"
import { UserContext } from "../../../context/ContextProvider"
import { Link } from 'react-router-dom'
import './NightFest.scss'
import title from './img/title.png'
import stageTitle from './img/stageTitle.png'
import guide1 from './img/guide1.png'
import guide2 from './img/guide2.png'
import guide3 from './img/guide3.png'
import stage1 from './img/stage1.png'
import stage2 from './img/stage2.png'
import stage3 from './img/stage3.png'
import stage4 from './img/stage4.png'
import stage5 from './img/stage5.png'
import actTitle from './img/actTitle.png'
import act1 from './img/act1.png'
import act2 from './img/act2.png'
import singerTitle from './img/singerTitle.png'
import singerMask from './img/singerMask.png'
import singer1 from './img/singer1.png'
import singer2 from './img/singer2.png'
import singer3 from './img/singer3.png'
import NightCountdown from "./NightCoundown/NightCountdown"

function NightFest() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/nightfest'), [])
    // useEffect(() => {window.scrollTo(0, 0)}, [])

    const singer1Ref = useRef()
    const singer2Ref = useRef()
    const singer3Ref = useRef()

    return (
        <section id="client-night" className="client-night">
            <img src={title} className="night-title"/>

            <div className="client-night-container client-night-guide">
                <img src={guide1}/> 
                <img src={guide2}/> 
                <img src={guide3}/> 
            </div>

            <div className="client-night-container client-night-stage">
                <img src={stageTitle} className="title"/>
                <div className="client-night-stage-main">
                    <img src={stage1}/>
                    <img src={stage2}/>
                    <img src={stage3}/>
                    <img src={stage4}/>
                    <img src={stage5}/>
                </div>
            </div>

            <div className="client-night-container client-night-act">
                <img src={actTitle} className="doubleTitle"/>
                <img src={act1} className="act"/>
                <img src={act2} className="act"/>
            </div>

            <div className="client-night-container client-night-singer">
                <img src={singerTitle} className="doubleTitle"/>
                <div className="client-night-singer-main">
                    <div className="singer-block left" ref={singer1Ref}>
                        <img src={singerMask} className="mask" onClick={() => singer1Ref.current.classList.add('open')}/>
                        <img src={singer1} className="singer"/>
                    </div>
                    <div className="singer-block main" ref={singer2Ref}>
                        <img src={singerMask} className="mask" onClick={() => singer2Ref.current.classList.add('open')}/>
                        <img src={singer2} className="singer"/>
                    </div>
                    <div className="singer-block right" ref={singer3Ref}>
                        <img src={singerMask} className="mask" onClick={() => singer3Ref.current.classList.add('open')}/>
                        <img src={singer3} className="singer"/>
                    </div>
                </div>
                <NightCountdown/>
            </div>

            <Link to={'/'} className="secondary-button client-night-button">ĐĂNG KÝ THAM GIA ĐÊM NHẠC HỘI</Link>
        </section>
    )
}

export default NightFest