import React from "react";

import { ListItem } from "../ListItem";
import { Title } from "../Title";
import styles from "./Advantages.module.scss";

interface AdvantagesProps {}

const Advantages: React.FC<AdvantagesProps> = () => {
  return (
    <section className={styles.advantages} id="advantages">
      <div className={styles.advantagesContainer}>
        <Title text="Преимущества нашей компании" />
        <div className={styles.infoContainer}>
          <ul className={styles.list}>
            <ListItem text="Доступные цены" />
            <ListItem text="Высокое качество работ" />
            <ListItem text="Наблюдение за ходом работ" />
            <ListItem text="Опыт работы с VAG более 15 лет" />
            <ListItem text="Дружественная атмосфера" />
          </ul>
          <div className={styles.companyContainer}>
            <p className={styles.company}>Наша компания:</p>
            <div className={styles.textContainer}>
              <p className={styles.text}>
                <span className={styles.circle}></span> Удерживает цены на конкурентоспособном уровне, поддерживая
                высокие стандарты качества.
              </p>
              <p className={styles.text}>
                <span className={styles.circle}></span>
                Состоит из опытных специалистов, которые обладают отличными знаниями автомобилей концерна VAG.
              </p>
              <p className={styles.text}>
                <span className={styles.circle}></span>
                Понимая, что «время-деньги», стремится выполнить сервисное обслуживание автомобиля максимально быстро. И
                это у нас неплохо получается!
              </p>
              <p className={styles.text}>
                <span className={styles.circle}></span>
                Предоставляет возможность обсуждения с мастером всех возникших вопросов, а также непосредственного
                наблюдения за ходом работ.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Advantages };
