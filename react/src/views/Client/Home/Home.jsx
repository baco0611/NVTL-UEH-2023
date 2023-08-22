import './Home.scss'
import { useContext, useEffect, useRef, useState } from "react"
import { UserContext } from "../../../context/ContextProvider"
import clientLodestar from "./img/clientLodestar.png"
import quoteLeft from './img/quoteLeft.png'
import quoteRight from './img/quoteRight.png'
import timeline from './img/TIMELINE-st.png'
import star from './img/star.png'
import glow from './img/glow.png'
import block1 from './img/block1.png'
import block2 from './img/block2.png'
import block3 from './img/block3.png'
import block4 from './img/block4.png'
import block5 from './img/block5.png'
import message from './img/message.png'

function Home() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

    const messageRef = useRef()
    const block1Ref = useRef()
    const block2Ref = useRef()
    const block3Ref = useRef()
    const block4Ref = useRef()
    const block5Ref = useRef()
    const screenHeigh = window.innerHeight
    
    const handleScroll = () => {
        
        if(messageRef) {
            if(messageRef.current.getBoundingClientRect().top < screenHeigh - 100) {
                messageRef.current.classList.remove('visible')
                messageRef.current.classList.add('animate__animated', 'animate__fadeInLeftBig')
            }
        }

        if(block1Ref && block2Ref && block3Ref && block4Ref && block5Ref) {
            if(block1Ref.current.getBoundingClientRect().top < screenHeigh - 100) {
                setTimeout(() => {
                    block1Ref.current.classList.remove('visible')
                    block1Ref.current.classList.add('animate__animated', 'animate__flipInY')
                    setTimeout(() => {
                        block2Ref.current.classList.remove('visible')
                        block2Ref.current.classList.add('animate__animated', 'animate__flipInY')  
                        setTimeout(() => {
                            block3Ref.current.classList.remove('visible')
                            block3Ref.current.classList.add('animate__animated', 'animate__flipInY')  
                            setTimeout(() => {
                                block4Ref.current.classList.remove('visible')
                                block4Ref.current.classList.add('animate__animated', 'animate__flipInY')  
                                setTimeout(() => {
                                    block5Ref.current.classList.remove('visible')
                                    block5Ref.current.classList.add('animate__animated', 'animate__flipInY')  
                                }, 375)
                            }, 375)
                        }, 375)
                    }, 375)
                }, 0)
            }
        }
    }

    useEffect(() => {

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <section id="client-home" className="client-home">
            <div className='client-home-header'>
                <h3>LỄ HỘI VĂN HOÁ CHÀO ĐÓN TÂN SINH VIÊN UEH KHOÁ 49<br/>NỐI VÒNG TAY LỚN 2023</h3>
                <img className='animate__animated animate__flash animate__infinite' src={clientLodestar}/>
            </div>
            <div className='client-home-quote'>
                <div className='client-home-quote-box'>
                    <p>
                        Chỉ bạn mới biết đâu mới là thế mạnh của mình,
                        <br/>
                        cùng Nối Vòng Tay Lớn tự do phát triển bản thân 
                        <br/>
                        theo cách mà bạn mong muốn.
                    </p>
                    <img className='quote-left quote' src={quoteLeft}/>
                    <img className='quote-right quote' src={quoteRight}/>
                </div>
            </div>
            <div className='client-home-message'>
                <img className='visible' ref={messageRef} src={message}/>
            </div>
            <div className='client-home-quote'>
                <div className='client-home-quote-box'>
                    <p>
                        Nối Vòng Tay Lớn 2023 định hướng các tân sinh viên 
                        <br/>
                        bước trên con đường phát triển phù hợp. 
                        <br/>
                        Từ đó, các bạn có thể dẫn lối ước mơ tới hiện thực 
                        <br/>
                        theo nền tảng phát triển trước.
                    </p>
                    <img className='quote-left quote' src={quoteLeft}/>
                    <img className='quote-right quote' src={quoteRight}/>
                </div>
            </div>
            <div className='client-home-value'>
                <h2>NHỮNG CON SỐ ẤN TƯỢNG CỦA<br/>NỐI VÒNG TAY LỚN 2022: BESIDE U</h2>
                <div className='client-home-value-container'>
                    <div>
                        <img ref={block1Ref} className='visible' src={block1}/>
                    </div>
                    <div>
                        <img ref={block2Ref} className='visible' src={block2}/>
                    </div>
                    <div>
                        <img ref={block3Ref} className='visible' src={block3}/>
                    </div>
                    <div>
                        <img ref={block4Ref} className='visible' src={block4}/>
                    </div>
                    <div>
                        <img ref={block5Ref} className='visible' src={block5}/>
                    </div>
                </div>
            </div>
            <div className='client-home-timeline'>
                <h2>TIMELINE</h2>
                <div className='client-home-timeline-box'>
                    <img className='timeline' src={timeline}/>
                    <img className='star star-1' src={star}/>
                    <img className='star star-2' src={star}/>
                    <img className='star star-3' src={star}/>
                    <img className='star star-4' src={star}/>
                    <img className='star star-5' src={star}/>
                    <img className='star star-6' src={star}/>
                    <img className='glow glow-1' src={glow}/>
                    <img className='glow glow-2' src={glow}/>
                    <img className='glow glow-3' src={glow}/>
                    <img className='glow glow-4' src={glow}/>
                    <img className='glow glow-5' src={glow}/>
                    <img className='glow glow-6' src={glow}/>
                </div>
            </div>
            <div className='client-home-ntt'>
                <h1>ĐỐI TÁC</h1>
                <div className='client-home-ntt-item'>
                    <h1>Đơn vị tổ chức</h1>
                    <div>
                        <img className='tochuc' src='https://i.imgur.com/djga35X.png'/>
                        <img className='tochuc' src='https://i.imgur.com/s2Z2UPG.png'/>
                    </div>
                </div>
                <div className='client-home-ntt-item'>
                    <h1>Nhà tài trợ kim cương</h1>
                    <div>
                        <img className='kimcuong' src='https://i.imgur.com/N1I4pGj.png'/>
                    </div>
                </div>
                <div className='client-home-ntt-item'>
                    <h1>Nhà tài trợ bạc</h1>
                    <div>
                        <img className='bac' src="https://i.imgur.com/KLUcG3w.png"/>
                    </div>
                </div>
                <div className='client-home-ntt-item'>
                    <h1>Bảo trợ truyền thông</h1>
                    <div>
                        <img className='truyenthong' src="https://i.imgur.com/mxNiCqx.png"/>
                        <img className='truyenthong' src="https://i.imgur.com/yDkruGN.png"/>
                        <img className='truyenthong' src="https://i.imgur.com/LbFHp2k.png"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home