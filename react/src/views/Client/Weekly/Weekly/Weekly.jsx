import React, { useContext, useEffect, useRef, useState } from 'react'
import { UserContext } from '../../../../context/ContextProvider'
import { Link } from 'react-router-dom'
import "./Weekly.scss"
import title from './img/title.png'
import overview from './img/overview.png'
import news from './img/news.png'
import overviewTimeline from './img/overviewTimeline.png'
import guideVid from './video/guideVid.mp4'

function Weekly() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/weekly'), [])
    // useEffect(() => {window.scrollTo(0, 0)}, [])

    const videoRef = useRef()
    const playRef = useRef()

    const playVideo = () => {
        playRef.current.classList.add('none')
        videoRef.current.play()
    }

    const [ newsValue, setNewsValue ] = useState([
        {
            id: "1",
            title: "news 1",
            subTitle: "Được dịch từ tiếng Anh-Trong xuất bản và thiết kế đồ họa, Lorem ipsum là một văn bản giữ chỗ thường được sử dụng để thể hiện hình thức trực quan của tài liệu hoặc kiểu chữ mà không dựa vào nội dung có ý nghĩa. Lorem ipsum có thể được sử dụng làm trình giữ chỗ trước khi có bản sao cuối cùng.",
            thumbnail: "https://marketplace.canva.com/EAEqfS4X0Xw/1/0/1600w/canva-most-attractive-youtube-thumbnail-wK95f3XNRaM.jpg",
            link: "https://www.facebook.com/"
        },
        {
            id: "1",
            title: "news 1",
            subTitle: "Được dịch từ tiếng Anh-Trong xuất bản và thiết kế đồ họa, Lorem ipsum là một văn bản giữ chỗ thường được sử dụng để thể hiện hình thức trực quan của tài liệu hoặc kiểu chữ mà không dựa vào nội dung có ý nghĩa. Lorem ipsum có thể được sử dụng làm trình giữ chỗ trước khi có bản sao cuối cùng.",
            thumbnail: "https://marketplace.canva.com/EAEqfS4X0Xw/1/0/1600w/canva-most-attractive-youtube-thumbnail-wK95f3XNRaM.jpg",
            link: "https://www.facebook.com/"
        },
        {
            id: "1",
            title: "news 1",
            subTitle: "Được dịch từ tiếng Anh-Trong xuất bản và thiết kế đồ họa, Lorem ipsum là một văn bản giữ chỗ thường được sử dụng để thể hiện hình thức trực quan của tài liệu hoặc kiểu chữ mà không dựa vào nội dung có ý nghĩa. Lorem ipsum có thể được sử dụng làm trình giữ chỗ trước khi có bản sao cuối cùng.",
            thumbnail: "https://marketplace.canva.com/EAEqfS4X0Xw/1/0/1600w/canva-most-attractive-youtube-thumbnail-wK95f3XNRaM.jpg",
            link: "https://www.facebook.com/"
        }
    ])

    return (
        <section id='client-weekly' className='client-weekly'>
            <div className='client-weekly-title'>
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
            </div>
            <div className='client-weekly-line'></div>
            <div className='client-weekly-overview'>
                <img className='title' src={overview}/>
                <div className='client-weekly-overview-link'>
                    <img className='timeline' src={overviewTimeline}/>
                    <Link to={'/weekly/day1'}></Link>
                    <Link to={'/weekly/day2'}></Link>
                    <Link to={'/weekly/day3'}></Link>
                    <Link to={'/weekly/day4'}></Link>
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