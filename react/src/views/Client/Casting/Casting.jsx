import { useContext, useEffect } from "react"
import { UserContext } from "../../../context/ContextProvider"
import './Casting.scss'
import iconWave from './img/iconWave.png'
import iconFlower from './img/iconFlower.png'
import iconFire from './img/iconFire.png'
import iconStar from './img/iconStar.png'
import casting from './img/Casting.png'
import CastingSlider from "./CastingSlider/CastingSlider"
import { Link } from 'react-router-dom'
import timeline from './img/timeline.png'

function Casting() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/casting'), [])
    // useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <section id="client-casting" className="client-casting">
            <h1>LÀM "SAO" ĐỂ THỂ HIỆN "CHẤT RIÊNG"<br/>TẠI NỐI VÒNG TAY LỚN 2023?</h1>
            <div className="client-casting-content">
                <div className="client-casting-content-main">
                    <p><span></span>Lễ hội Văn hóa Chào đón Tân Sinh viên UEH Khóa 49 - Nối Vòng Tay Lớn 2023 đã chính thức quay trở lại với vô vàn những hoạt động lôi cuốn, hấp dẫn!</p>
                    <img src={iconWave}/>
                </div>
                <div className="client-casting-spacing"></div>
                <p>Nếu bạn muốn:</p>
                <ul>
                    <li>
                        <div className="client-casting-content-main">
                            <p><span></span>Có cơ hội thể hiện tài năng của bản thân</p>
                            <img src={iconFlower}/>
                        </div>
                    </li>
                    <li>
                        <div className="client-casting-content-main">
                            <p><span></span>Tìm một nơi có thể cháy hết mình với đam mê của tuổi trẻ.</p>
                            <img src={iconFire}/>
                        </div>
                    </li>
                    <li>
                        <div className="client-casting-content-main">
                            <p><span></span>Trở thành một mảnh ghép đặc biệt tạo nên sự thành công của lễ hội Nối Vòng Tay Lớn 2023.</p>
                            <img src={iconStar}/>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="client-casting-quote">
                <img src={casting}/>
            </div>

            <h1>CÁC TIẾT MỤC BÙNG SỨC NÓNG<br/>CỦA NỐI VÒNG TAY LỚN</h1>
            <CastingSlider></CastingSlider>

            <img className="client-casting-timeline" src={timeline}/>

            <h1>CÒN CHẦN CHỜ GÌ NỮA<br/>HÃY CASTING THÔI</h1>
            <div className="client-casting-nav">
                <Link className="secondary-button" to={'/casting/stage'}>VĂN NGHỆ</Link>
                <Link className="secondary-button" to={'/casting/mc'}>MC</Link>
            </div>
        </section>
    )
}

export default Casting