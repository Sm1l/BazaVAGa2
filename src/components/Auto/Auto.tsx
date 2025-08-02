import React from "react";

import { Title } from "../Title";
import styles from "./Auto.module.scss";

import iconAudi from "../../assets/images/advantages/audi.webp";
import iconSeat from "../../assets/images/advantages/seat.webp";
import iconSkoda from "../../assets/images/advantages/skoda.webp";
import iconVW from "../../assets/images/advantages/vw.webp";

interface AutoProps {}

const Auto: React.FC<AutoProps> = () => {
  return (
    <section className={styles.auto}>
      <div className={styles.autoContainer}>
        <Title text="Обслуживаем автомобили концерна VAG" />
        <div className={styles.autoLogosContainer}>
          <div className={styles.logoItem}>
            <img className={styles.img} src={iconVW} alt="vw" />
          </div>
          <div className={styles.logoItem}>
            <img className={styles.img} src={iconSkoda} alt="skoda" />
          </div>
          <div className={styles.logoItem}>
            <img className={styles.img} src={iconSeat} alt="seat" />
          </div>
          <div className={styles.logoItem}>
            <img className={styles.img} src={iconAudi} alt="audi" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Auto };
