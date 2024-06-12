import React from "react";
import { Slider } from "../Slider";
import { Title } from "../Title";
import styles from "./Services.module.scss";

interface ServicesProps {}

const Services: React.FC<ServicesProps> = () => {
  return (
    <section className={styles.services} id="services">
      <div className={styles.servicesContainer}>
        <div className={styles.infoContainer}>
          <Title text="Услуги" />
          <p className={styles.text}>Мы предоставляем широкий спектр услуг по приятным ценам:</p>
        </div>
        <Slider />
      </div>
    </section>
  );
};

export { Services };
