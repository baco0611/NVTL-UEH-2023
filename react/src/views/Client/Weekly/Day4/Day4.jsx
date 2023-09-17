import { useContext, useEffect } from "react"
import { UserContext } from "../../../../context/ContextProvider"
import '../WeeklyGlobal.scss'
import './Day4.scss'
import dayTitle from './img/day4Title.png'
import guide from '../img/guide.png'
import timelineTitle from '../img/timelineTitle.png'
import mapTitle from '../img/mapTitle.png'
import timeline from './img/timeline.png'
import map1 from '../img/mapDay4_1.png'
import map2 from '../img/mapDay4_2.png'
import mainAct from './img/mainAct.png'
import name1 from './img/name1.png'
import name2 from './img/name2.png'
import act1 from './img/act1.png'
import act2 from './img/act2.png'
import amazing from './img/amazing.png'
import flashmob from './img/flashmob.png'
import competitionTable from './img/competitionTable.png'
import Day4Slider from "./Day4Slider"

function Day4() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/weekly'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

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
            <div className="client-day4-amazing">
                <img src={amazing} className="title"/>
                <p>
                    Là hoạt động nằm trong chương trình chào đón Tân sinh viên khóa 49 “Nối Vòng Tay Lớn 2023”, The Amazing Race giúp các bạn sinh viên có thể khám phá và hòa mình vào môi trường hoàn toàn mới và đầy sự năng động này. Đồng thời tạo ra một sân chơi bổ ích, lành mạnh, văn minh cho sinh viên trường ĐH. Kinh tế TP.HCM. Đồng thời, giúp các bạn tân sinh viên dễ dàng hòa nhập và làm quen với môi trường mới, đi cùng với việc xây dựng tinh thần tập thể và khả năng làm việc nhóm cho sinh viên.
                </p>
                <Day4Slider/>

                <div className="client-day-map">
                    <img src={mapTitle} className="title"/>
                    <img src={map1} className="main"/>
                </div>
            </div>
            <div className="client-weekly-line"></div>
            <div className="client-day4-amazing">
                <img src={flashmob} className="title"/>
                <p>
                    Cuộc thi Flashmob thuộc Tuần Lễ NVTL 2023 với chủ đề Breaking Bound mang đến thông điệp “Cùng nhau đương đầu với những khó khăn thử thách để phá tan đi giới hạn của bản thân”. Cùng với 18 Đơn vị Khoa/Viện/KTX hứa hẹn sẽ mang đến những màn trình diễn vô cùng bùng nổ và hấp dẫn.
                </p>
                <img src={competitionTable} className="competitionTable"/>
                <div className="client-day-map">
                    <img src={mapTitle} className="title"/>
                    <img src={map2} className="main"/>
                </div>
            </div>
        </section>
    )
}

export default Day4