import './ClientProudMateIndex1.scss'
import title from './img/title.png'
import Text1 from './img/Text1.png'
import Text2 from './img/Text2.png'
import Text3 from './img/Text3.png'
import ProudMateSlider from './ProudMateSlider'
import backLeft from './img/backLeft.png'
import backRight from './img/backRight.png'
import { useEffect } from 'react'

function ClientProudMateIndex1({ setIndex }) {

    return (
        <div className='client-proud-1'>
            <div className='client-proud-1-main'>
                <div className='client-proud-1-mainLeft'>
                    <img className='title' src={title}/>
                    <p className='subTitle'>Dòng nước xoáy cuồn cuộn, bạn sẽ đồng hành cùng ai<br/>trong đại dương bao la kia? </p>
                    <div className='client-proud-1-content'>
                        <p>
                        Hãy like fanpage Ban Phong trào - Tình nguyện UEH để không bỏ lỡ những thông tin mới nhất và share bài phát động nhằm lan tỏa rộng rãi đến nhiều UEHer khác nhé!
                        </p>

                        <ul>
                            <li>
                                <img src={Text1}/>
                                <p>Thực hiện 3 trong 9 thử thách để theo đường dọc/ngang/chéo.</p>
                            </li>
                            <li>
                                <img src={Text2}/>
                                <p>Sau khi hoàn thành, các bạn chèn hình ảnh minh chứng 3 hoạt động lên template tương ứng và đăng tải lên Story Facebook trong vòng 12 tiếng.</p>
                            </li>
                            <li>
                                <img src={Text3}/>
                                <p>Điền form minh chứng để được ghi nhận hoàn thành thử thách.</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='client-proud-1-mainRight'>
                    <ProudMateSlider/>
                </div>
            </div>
            <div className='client-proud-1-nav'>
                <div>
                    <button className='secondary-button' onClick={() => setIndex(4)}>Nộp minh chứng</button>
                </div>
                <div>
                    <button className='secondary-button' onClick={() => setIndex(2)}>Who are your mates?</button>
                </div>
            </div>
            <img className='back back-left' src={backLeft}/>
            <img className='back back-right' src={backRight}/>
        </div>
    )
}

export default ClientProudMateIndex1