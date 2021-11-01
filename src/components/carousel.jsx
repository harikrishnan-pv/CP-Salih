import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react"; import "swiper/swiper-bundle.min.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

SwiperCore.use([Autoplay, Pagination, Navigation]);


export default function Carousel() {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}

                className="swiper w-full"
            >
                <SwiperSlide>
                    <div className="h-screen car1 w-full flex justify-between">
                       

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-screen car2 flex justify-between">
                       
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="logo">
                <img src="imgs/logo.png" alt="logo" />
            </div>
        </div>
    );
}
