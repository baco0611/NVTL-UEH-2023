import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import * as slider from './img/slider'

function Day4Slider() {
    const sliderPic = Object.keys(slider)

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
                    className="mySwiper client-day4-amazing-slider"
                >
                {
                    sliderPic.map((item, index) => {
                        return (
                            <SwiperSlide className='banner' key={index}>
                                <img src={slider[item]}/>
                            </SwiperSlide>
                        )
                    })
                }
                </Swiper>
            </>
    )
}

export default Day4Slider