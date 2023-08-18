import './Home.scss'
import { useContext, useEffect } from "react"
import { UserContext } from "../../../context/ContextProvider"
import clientLodestar from "./img/clientLodestar.png"
import quoteLeft from './img/quoteLeft.png'
import quoteRight from './img/quoteRight.png'
import homerValue from './img/homeValue.png'
import timeline from './img/TIMELINE-st.png'
import star from './img/star.png'

function Home() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <section id="client-home" className="client-home">
            <div className='client-home-header'>
                <h3>LỄ HỘI VĂN HOÁ CHÀO ĐÓN TÂN SINH VIÊN UEH KHOÁ 49<br/>NỐI VÒNG TAY LỚN 2023</h3>
                <img src={clientLodestar}/>
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
                <h1>
                    Light your path,
                    <br/>
                    guide your dream
                </h1>
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
                <img src={homerValue}/>
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
                </div>
            </div>
        </section>
    )
}

export default Home