import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './Banner.scss'
import bannerCasting from './img/bannerCasting.png'
import bannerPrimewave from './img/bannerPrimewave.png'
import { useContext } from 'react';
import { UserContext } from '../../context/ContextProvider';
function Banner() {
    const { path } = useContext(UserContext)

    if(!['/login', '/recruitment', '/user'].includes(path))
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
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide className='banner'>
                        <img src={bannerCasting}/>
                    </SwiperSlide>
                    <SwiperSlide className='banner'>
                        <img src={bannerPrimewave}/>
                    </SwiperSlide>
                </Swiper>
            </>
        )
    else return <></>
}

export default Banner