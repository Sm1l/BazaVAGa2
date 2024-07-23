("use client");
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper.scss";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
// import "swiper/css/thumbs";
import { FreeMode, Scrollbar } from "swiper/modules";
import { sliderData } from "../../data/sliderData";

import { ServicesSlide } from "../ServicesSlide/ServicesSlide";
import styles from "./ServicesSlider.module.scss";

interface ServicesSliderProps {}

const ServicesSlider: React.FC<ServicesSliderProps> = () => {
  return (
    <div className={styles.servicesSlider}>
      <Swiper
        speed={600}
        modules={[FreeMode, Scrollbar]}
        slidesPerView={1.1}
        spaceBetween={10}
        watchSlidesProgress={true}
        scrollbar={{
          hide: true,
        }}
        breakpoints={{
          640: { slidesPerView: 2.3, spaceBetween: 10 },
          960: { slidesPerView: 3.3, spaceBetween: 20 },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="servicesSliderSwiper"
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.name}>
            <ServicesSlide data={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export { ServicesSlider };
