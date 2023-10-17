import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/element/bundle";
import "swiper/swiper-bundle.css";

import styles from "./slider.module.scss";
import sliderData from "./sliderData.json";
import "./swiper.scss";

// type TSlider = {
//   name: string;
//   image: string;
//   title: string;
//   correction: string;
//   price: string;
// };

interface SliderProps {}

const Slider: React.FC<SliderProps> = () => {
  const swiperRef = useRef(null);
  const paginationRef = useRef(null);
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      // console.log("swiper init");
      const swiper = new Swiper(swiperRef.current, {
        slidesPerView: 1.3,
        spaceBetween: 10,
        speed: 600,
        navigation: {
          nextEl: nextButtonRef.current,
          prevEl: prevButtonRef.current,
        },
        pagination: {
          el: paginationRef.current,
          clickable: true,
          renderBullet: function (_, className) {
            return `<span class="${className}"></span>`;
          },
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 2.3,
            spaceBetween: 10,
          },
          960: {
            slidesPerView: 3.3,
            spaceBetween: 20,
          },
        },
      });

      return () => {
        swiper.destroy();
      };
    }
  }, []);

  return (
    <div className={styles.sliderContainer}>
      <div className="swiper swiper-container" ref={swiperRef}>
        <div className="swiper-wrapper">
          {sliderData.map((item) => (
            <div key={item.name} className="swiper-slide">
              <div className={styles.item}>
                <div className={styles.imgContainer}>
                  <img className={styles.img} src={item.image} alt="фотография" />
                </div>
                <h3>{item.title}</h3>
                <p>
                  {item.correction && <span className={styles.correction}>{item.correction}</span>} от {item.price} руб.
                </p>
              </div>
            </div>
          ))}
        </div>
        <div ref={paginationRef} className="swiper-pagination"></div>
        <div ref={nextButtonRef} className="swiper-button-next"></div>
        <div ref={prevButtonRef} className="swiper-button-prev"></div>
      </div>
    </div>
  );
};

export { Slider };
