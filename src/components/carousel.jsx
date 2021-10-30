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
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
               
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="h-screen w-screen flex justify-between">
                        <div className="car1 w-screen">
                            fklgn
                        </div>
                       
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-screen flex justify-between">
                        <div className="">
                            fklgn
                        </div>
                        <div>

                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
}
