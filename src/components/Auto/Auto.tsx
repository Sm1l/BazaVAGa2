import React from "react";

import styles from "./Auto.module.scss";
import { Title } from "../Title";

import iconVW from "../../assets/images/advantages/vw.png";
import iconSkoda from "../../assets/images/advantages/skoda.png";
import iconSeat from "../../assets/images/advantages/seat.png";
import iconAudi from "../../assets/images/advantages/audi.png";

interface AutoProps {}

const Auto: React.FC<AutoProps> = () => {
  return (
    <div className={styles.auto}>
      <Title text="Обслуживаем автомобили концерна VAG" />
      <div className={styles.autoContainer}>
        <div className={styles.logoItem}>
          <img src={iconVW} alt="vw" />
        </div>
        <div className={styles.logoItem}>
          <img src={iconSkoda} alt="skoda" />
        </div>
        <div className={styles.logoItem}>
          <img src={iconSeat} alt="seat" />
        </div>
        <div className={styles.logoItem}>
          <img src={iconAudi} alt="audi" />
        </div>
      </div>
    </div>
  );
};

export { Auto };
