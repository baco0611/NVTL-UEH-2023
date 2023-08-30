import './TraoRecruit.scss'
import { Link } from 'react-router-dom'
import vaotrao from './img/vaotrao.png'
import timeline from './img/timeline.png'
import vitrinhatrao from './img/vitrinhatrao.png'
import thoihanungtuyen from './img/thoihanungtuyen.png'
import timelineMap from './img/timelineMap.png'
import themeCover from './img/themeCover.png'
import ungtuyenBtn from './img/ungtuyenBtn.png'
import * as Position from './img/position'
import * as JD from './img/JD'
import { useState } from 'react'
import TraoRecruitClock from './TraoRecruitClock/TraoRecruitClock'

function TraoRecruit() {
    const [ status, setStatus ] = useState({
        creative: false,
        coms: false,
        graphic: false,
        hr: false,
        sceno: false,
        video: false
    })

    const handleOnOpen = position => {
        setStatus({
            ...status,
            [position]: true
        })
    }

    const handleOnClose = position => {
        setStatus({
            ...status,
            [position]: false
        })
    }

    return (
        <div id='trao-recruit' className='trao-recruit'>
            <div className='trao-recruit-vaotrao'>
                <img className='title' src={vaotrao}/>
                <div className='container'>
                    <img src={themeCover}/>
                    <div className='container-theme'>
                        <h1>CHỦ ĐỀ</h1>
                        <div>
                            <h1>ĐỐI TƯỢNG THAM GIA</h1>
                            <h3>Sinh viên UEH ĐHCQ K48 và K49</h3>
                            <Link to={'/recruitment/form'}>
                                <img className='ungtuyenBtn' src={ungtuyenBtn}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='line-box'>
                <div className='line'></div>
            </div>

            <div className='trao-recruit-timeline'>
                <img className='title' src={timeline}/>
                <img className='timelineMap' src={timelineMap}/>
            </div>

            <div className='line-box'>
                <div className='spaceLeft'></div>
                <div className='line'></div>
            </div>

            <div className='trao-recruit-position'>
                <img className='title' src={vitrinhatrao}/>
                <div className='container'>
                    <div className='position-head'>
                        <img src={Position.head}/>
                    </div>
                    <img src={Position.cohead1}/>
                    <img src={Position.cohead2}/>
                    <img src={Position.cohead3}/>

                    <div className='position-item'>
                        <img src={Position.creative}/>
                        <div className='position-item-button'>
                            <button onClick={() => handleOnOpen('creative')}>
                                Job<br/>Description
                            </button>
                        </div>
                        {
                            status.creative &&
                            <div 
                                className='position-item-jd cursorPointer animate__animated animate__fadeIn'
                                onClick={() => handleOnClose('creative')}
                            >
                                <img src={JD.creative}/>
                            </div>
                        }
                    </div>
                    <div className='position-item'>
                        <img src={Position.coms}/>
                        <div className='position-item-button'>
                            <button onClick={() => handleOnOpen('coms')}>
                                Job<br/>Description
                            </button>
                        </div>
                        {
                            status.coms &&
                            <div 
                                className='position-item-jd cursorPointer animate__animated animate__fadeIn'
                                onClick={() => handleOnClose('coms')}
                            >
                                <img src={JD.coms}/>
                            </div>
                        }
                    </div>
                    <div className='position-item'>
                        <img src={Position.graphic}/>
                        <div className='position-item-button'>
                            <button onClick={() => handleOnOpen('graphic')}>
                                Job<br/>Description
                            </button>
                        </div>
                        {
                            status.graphic &&
                            <div 
                                className='position-item-jd cursorPointer animate__animated animate__fadeIn'
                                onClick={() => handleOnClose('graphic')}
                            >
                                <img src={JD.graphic}/>
                            </div>
                        }
                    </div>
                    <div className='position-item'>
                        <img src={Position.video}/>
                        <div className='position-item-button'>
                            <button onClick={() => handleOnOpen('video')}>
                                Job<br/>Description
                            </button>
                        </div>
                        {
                            status.video &&
                            <div 
                                className='position-item-jd cursorPointer animate__animated animate__fadeIn'
                                onClick={() => handleOnClose('video')}
                            >
                                <img src={JD.video}/>
                            </div>
                        }
                    </div>
                    <div className='position-item'>
                        <img src={Position.sceno}/>
                        <div className='position-item-button'>
                            <button onClick={() => handleOnOpen('sceno')}>
                                Job<br/>Description
                            </button>
                        </div>
                        {
                            status.sceno &&
                            <div 
                                className='position-item-jd cursorPointer animate__animated animate__fadeIn'
                                onClick={() => handleOnClose('sceno')}
                            >
                                <img src={JD.sceno}/>
                            </div>
                        }
                    </div>
                    <div className='position-item'>
                        <img src={Position.hr}/>
                        <div className='position-item-button'>
                            <button onClick={() => handleOnOpen('hr')}>
                                Job<br/>Description
                            </button>
                        </div>
                        {
                            status.hr &&
                            <div 
                                className='position-item-jd cursorPointer animate__animated animate__fadeIn'
                                onClick={() => handleOnClose('hr')}
                            >
                                <img src={JD.hr}/>
                            </div>
                        }
                    </div>
                </div>
            </div>

            <div className='trao-recruit-clock'>
                <img className='title' src={thoihanungtuyen}/>
                <TraoRecruitClock/>
                <div className='clock-btn'>
                    <Link to={'/recruitment/form'}>
                        <img className='ungtuyenBtn' src={ungtuyenBtn}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TraoRecruit