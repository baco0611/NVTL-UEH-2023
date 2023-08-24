import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import bannerCasting from './img/bannerCasting.png'
import bannerPrimewave from './img/bannerPrimewave.png'
function LogBanner() {
    return (
        <>
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
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper logSwiper"
            >
                <SwiperSlide className='logBanner'>
                    <img src={bannerCasting}/>
                </SwiperSlide>
                <SwiperSlide className='logBanner'>
                    <img src={bannerPrimewave}/>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default LogBanner