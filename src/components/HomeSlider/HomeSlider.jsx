"use client";

import{ Navigation,  Autoplay, EffectFade } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import 'swiper/css/autoplay';
import mainSlider from "@/data/mainSlider";
import SingleHomeSlider from "./SingleHomeSlider";


const HomeSlider = () => {
    return (
        <div className="main-slider">
            <Swiper
                slidesPerView={1}
                loop
                navigation
                effect="fade"
                autoplay
                modules={[Navigation, EffectFade, Autoplay]}
            >
                {mainSlider.map((slider) => (
                    <SwiperSlide key={slider.id}>
                        <SingleHomeSlider slider={slider} />
                    </SwiperSlide>
                ))}
                
            </Swiper>
        </div>
    );
};

export default HomeSlider;