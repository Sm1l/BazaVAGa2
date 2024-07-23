import React from "react";

import styles from "./ServicesSlide.module.scss";
import { sliderImage } from "../../helpers/sliderImage";
import { TSliderData } from "../../data/sliderData";

interface ServicesSlideProps {
  data: TSliderData;
}

const ServicesSlide: React.FC<ServicesSlideProps> = ({ data }) => {
  return (
    <div className={styles.servicesSlide}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={sliderImage(data.name)} alt={data.name} />
      </div>
      <h3 className={styles.title}>{data.title}</h3>
      <p>
        {data.correction && <span className={styles.correction}>{data.correction}</span>} от {data.price} руб.
      </p>
    </div>
  );
};

export { ServicesSlide };
