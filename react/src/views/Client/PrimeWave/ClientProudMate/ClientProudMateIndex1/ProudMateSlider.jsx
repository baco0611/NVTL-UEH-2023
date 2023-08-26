import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import template1 from '../img/Template1.png'
import template2 from '../img/Template2.png'

function ProudMateSlider() {
    return (
        <div className='client-proud-1-banner'>
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
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="proud-banner"
            >
                <SwiperSlide className='banner'>
                    <img src={template1}/>
                </SwiperSlide>
                <SwiperSlide className='banner'>
                    <img src={template2}/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default ProudMateSlider