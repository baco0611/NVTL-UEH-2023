import React, { useContext, useEffect, useRef, useState } from 'react'
import { UserContext } from '../../../../context/ContextProvider'
import { Link } from 'react-router-dom'
import "./Weekly.scss"
import title from './img/title.png'
import overview from './img/overview.png'
import news from './img/news.png'
import overviewTimeline from './img/overviewTimeline.png'
import guideVid from './video/guideVid.mp4'
import axiosClient from '../../../../context/axiosClient'
import day1 from './img/day1.png'
import day2 from './img/day2.png'
import day3 from './img/day3.png'
import day4 from './img/day4.png'

function Weekly() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/weekly'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

    const videoRef = useRef()
    const playRef = useRef()
    const day1Ref = useRef()
    const day2Ref = useRef()
    const day3Ref = useRef()
    const day4Ref = useRef()

    const playVideo = () => {
        playRef.current.classList.add('none')
        videoRef.current.play()
    }

    const [ newsValue, setNewsValue ] = useState([])

    useEffect(() => {
        axiosClient.get('/newsAdmin/weekly')
        .then(response => {
            setNewsValue(response.data.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <section id='client-weekly' className='client-weekly'>
            {/* <div className='client-weekly-title'>
                <img src={title}/>
                <div className='client-weekly-title-video'>
                    <video ref={videoRef} playsInline loop>
                        <source src={guideVid}/>
                    </video>
                    <div className='client-weekly-title-play' ref={playRef}>
                        <i 
                            className="fa-regular 
                                        fa-circle-play 
                                        animate__animated 
                                        animate__bounce 
                                        animate__infinite"
                            onClick={playVideo}
                        ></i>
                    </div>
                </div>
            </div> */}
            <div className='client-weekly-line'></div>
            <div className='client-weekly-overview'>
                <img className='title' src={overview}/>
                <div className='client-weekly-overview-link'>
                    <img className='timeline' src={overviewTimeline}/>
                    <Link 
                        to={'/weekly/day1'}
                        onMouseEnter={() => day1Ref.current.classList.add('active')}    
                        onMouseLeave={() => day1Ref.current.classList.remove('active')}    
                    ></Link>
                    <Link 
                        to={'/weekly/day2'}
                        onMouseEnter={() => day2Ref.current.classList.add('active')}    
                        onMouseLeave={() => day2Ref.current.classList.remove('active')}    
                    ></Link>
                    <Link 
                        to={'/weekly/day3'}
                        onMouseEnter={() => day3Ref.current.classList.add('active')}    
                        onMouseLeave={() => day3Ref.current.classList.remove('active')}    
                    ></Link>
                    <Link 
                        to={'/weekly/day4'}
                        onMouseEnter={() => day4Ref.current.classList.add('active')}    
                        onMouseLeave={() => day4Ref.current.classList.remove('active')}    
                    ></Link>
                    <img className='image-hover' src={day1} ref={day1Ref}/>
                    <img className='image-hover' src={day2} ref={day2Ref}/>
                    <img className='image-hover' src={day3} ref={day3Ref}/>
                    <img className='image-hover' src={day4} ref={day4Ref}/>
                </div>
            </div>
            {
                newsValue.length > 0 &&
                <>
                    <div className='client-weekly-line'></div>
                    <div className='client-weekly-news'>
                        <img className='title' src={news}/>

                        <div className='news-main'>
                        {
                            newsValue.map((item, index) => {
                                return (
                                    <div key={index} className='news-item'>
                                        <img src={item.thumbnail}/>

                                        <div className='news-item-content'>
                                            <a href={item.link} className='title' target='__blank'>{item.title}</a>
                                            <a href={item.link} className='subTitle' target='__blank'>{item.subTitle}</a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                </>
            }
        </section>
    )
}

export default Weekly