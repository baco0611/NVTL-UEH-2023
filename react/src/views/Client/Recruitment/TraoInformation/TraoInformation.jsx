import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './TraoInformation.scss'
import venhatrao from './img/venhatrao.png'
import banphongtraologo from './img/banphongtraologo.png'
import traolam from './img/traolam.png'
import daigiadinh from './img/daigiadinh.png'
import khamphathem from './img/khamphathem.png'
import * as TraoLam from './img/traolam'
import * as DaiGiaDinh from './img/daigiadinh'
import * as KhamPhaThem from './img/khamphathem'

function TraoInformation() {

    return (
        <div id="trao-information" className='trao-information'>
            <div className='trao-information-venhatrao'>
                <img className='title' src={venhatrao}/>
                <div className='container'>
                    <div className='container-left'>
                        <img src={banphongtraologo}/>
                        <p>Tiên phong - Bản lĩnh - Sáng tạo</p>
                    </div>
                    <div className='container-right'>
                        <p>Là một trong trong sáu Ban Chuyên môn trực thuộc Đoàn - Hội UEH, Ban Phong trào - Tình nguyện UEH tiên phong trong việc tổ chức các hoạt động phong trào có quy mô cấp trường.</p>
                        <div className='space'></div>
                        <p>Ban Phong trào - Tình nguyện UEH luôn là đầu tàu dẫn dắt trong hoạt động sinh viên UEH nói riêng và TP. HCM nói chung, không chỉ lớn mạnh về quy mô, chất lượng, về phong trào mà còn mang sứ mệnh truyền tải những thông điệp ý nghĩa đến các thế hệ sinh viên.</p>
                    </div>
                </div>
            </div>
            <div className='line-box'>
                <div className='spaceLeft'></div>
                <div className='line'></div>
            </div>
            <div className='trao-information-rightTitle'>
                <img className='title' src={traolam}/>
                <div className='container'>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide className='banner'>
                            <img src={TraoLam.UYF2023_1}/>
                        </SwiperSlide>
                        <SwiperSlide className='banner'>
                            <img src={TraoLam.UYF2023_2}/>
                        </SwiperSlide>
                        <SwiperSlide className='banner'>
                            <img src={TraoLam.UYF2023_3}/>
                        </SwiperSlide>
                        <SwiperSlide className='banner'>
                            <img src={TraoLam.NVTL2022_1}/>
                        </SwiperSlide>
                        <SwiperSlide className='banner'>
                            <img src={TraoLam.NVTL2022_2}/>
                        </SwiperSlide>
                        <SwiperSlide className='banner'>
                            <img src={TraoLam.NVTL2022_3}/>
                        </SwiperSlide>
                        <SwiperSlide className='banner'>
                            <img src={TraoLam.UYF2022_1}/>
                        </SwiperSlide>
                        <SwiperSlide className='banner'>
                            <img src={TraoLam.UYF2022_2}/>
                        </SwiperSlide>
                        <SwiperSlide className='banner'>
                            <img src={TraoLam.NVTL2021_1}/>
                        </SwiperSlide>
                        <SwiperSlide className='banner'>
                            <img src={TraoLam.NVTL2021_2}/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            {/*Trào sharing*/}

            <div className='line-box'>
                <div className='spaceLeft'></div>
                <div className='line'></div>
            </div>
            <div className='trao-information-rightTitle'>
                <img className='title' src={daigiadinh}/>
                <div className='container'>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide className='banner'>
                            <img src={DaiGiaDinh.daigiadinh1}/>
                        </SwiperSlide>
                        <SwiperSlide className='banner'>
                            <img src={DaiGiaDinh.daigiadinh2}/>
                        </SwiperSlide>
                        <SwiperSlide className='banner'>
                            <img src={DaiGiaDinh.daigiadinh3}/>
                        </SwiperSlide>
                        <SwiperSlide className='banner'>
                            <img src={DaiGiaDinh.daigiadinh4}/>
                        </SwiperSlide>
                        <SwiperSlide className='banner'>
                            <img src={DaiGiaDinh.daigiadinh5}/>
                        </SwiperSlide>
                        <SwiperSlide className='banner'>
                            <img src={DaiGiaDinh.daigiadinh6}/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>


            <div className='line-box'>
                <div className='line'></div>
            </div>
            <div className='trao-information-leftTitle'>
                <img className='title' src={khamphathem}/>
                <div className='nav-container'>
                    <div className='nav-box'>
                        <a href='https://www.facebook.com/BPTUEH/' target='blank'>
                            <img src={KhamPhaThem.facebook}/>
                        </a>
                        <a href='https://www.instagram.com/banphongtrao.ueh/' target='blank'>
                            <img src={KhamPhaThem.instagram}/>
                        </a>
                        <a href='https://youth.ueh.edu.vn/' target='blank'>
                            <img src={KhamPhaThem.website}/>
                        </a>
                        <a href='https://www.youtube.com/channel/UCukkP4Wu3VH5kqK1inZNOAg' target='blank'>
                            <img src={KhamPhaThem.youtube}/>
                        </a>
                        <a href='https://www.tiktok.com/@bptueh' target='blank'>
                            <img src={KhamPhaThem.tiktok}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TraoInformation