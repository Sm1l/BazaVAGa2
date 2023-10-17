import React from "react";

import styles from "./Services.module.scss";
import { Title } from "../Title";
import { Slider } from "../Slider";

interface ServicesProps {}

const Services: React.FC<ServicesProps> = () => {
  return (
    <div className={styles.services} id="services">
      <div className={styles.servicesContainer}>
        <div className={styles.infoContainer}>
          <Title text="Услуги" />
          <p className={styles.text}>Мы предоставляем широкий спектр услуг по приятным ценам:</p>
        </div>
        <Slider />
      </div>
    </div>
  );
};

export { Services };
