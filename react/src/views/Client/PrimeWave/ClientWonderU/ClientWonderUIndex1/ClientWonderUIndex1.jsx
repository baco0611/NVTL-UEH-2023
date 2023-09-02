import './ClientWonderUIndex1.scss'
import backLeft from '../../ClientProudMate/ClientProudMateIndex1/img/backLeft.png'
import backRight from '../../ClientProudMate/ClientProudMateIndex1/img/backRight.png'
import header from './img/header.png'
import Text1 from '../../ClientProudMate/ClientProudMateIndex1/img/Text1.png'
import Text2 from '../../ClientProudMate/ClientProudMateIndex1/img/Text2.png'
import Text3 from '../../ClientProudMate/ClientProudMateIndex1/img/Text3.png'
import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import template from './video/template.mp4'

function ClientWonderUIndex1({ setIndex }) {
    // useEffect(() => {window.scrollTo(0, 0)}, [])

    const templateRef = useRef()
    useEffect(() => {
        if(templateRef.current)
            templateRef.current.play()
    }, [])

    return (
        <div className='client-wonder-1'>
            <div className='client-wonder-1-main'>
                <div className='client-wonder-1-left'>
                    <img className='header' src={header}/>
                    <div className='main'>
                        <p>Hãy like fanpage Ban Phong trào - Tình nguyện UEH để không bỏ lỡ những thông tin mới nhất và share bài phát động nhằm lan tỏa rộng rãi đến nhiều UEHer khác nhé!</p>
                        <div className='space'></div>
                        <ul>
                            <li>
                                <img src={Text1}/>
                                <p>Sử dụng template của Ban Tổ chức để ghép ảnh/video.</p>
                            </li>
                            <li>
                                <img src={Text2}/>
                                <p>Sau khi hoàn thành, các bạn sẽ đăng tải video lên story Facebook (ít nhất 12 tiếng) và Tiktok cá nhân kèm hashtags <span>#hello #hi</span>.</p>
                            </li>
                            <li>
                                <img src={Text3}/>
                                <p>Điền form minh chứng để được ghi nhận hoàn thành thử thách.</p>
                            </li>
                        </ul>
                    </div>
                    <div className='button'>
                        <button onClick={() => setIndex(2)} className='secondary-button'>Nộp minh chứng</button>
                        <Link to={'/'}><button className='secondary-button'>Flexing ngay</button></Link>
                    </div>
                </div>
                <div className='client-wonder-1-right'>
                    <video ref={templateRef} className='template' loop={true}>
                        <source src={template} type='video/mp4'/>
                    </video>
                </div>
            </div>
            <img className='back back-left' src={backLeft}/>
            <img className='back back-right' src={backRight}/>
        </div>
    )
}

export default ClientWonderUIndex1