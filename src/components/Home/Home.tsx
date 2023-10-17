import React from "react";

import styles from "./Home.module.scss";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className={styles.home} id="home">
      <div className={styles.homeContainer}>
        <h2 className={styles.text}>Диагностика, обслуживание, ремонт автомобилей концерна VAG</h2>
        <div>
          <span className={styles.span1}>Надёжное решение</span>
          <span className={styles.span2}>Для вашего автомобиля!</span>
        </div>
      </div>
    </div>
  );
};

export { Home };
