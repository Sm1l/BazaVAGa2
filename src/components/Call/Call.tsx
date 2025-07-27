import React from "react";

import { MAIN_TEL } from "../../data/constants";
import { Title } from "../Title";
import styles from "./Call.module.scss";

interface CallProps {}

const Call: React.FC<CallProps> = () => {
  return (
    <section className={styles.call}>
      <Title text="Забронировать визит" />
      <div className={styles.callContainer}>
        <p className={styles.text}>
          У вас проблемы с автомобилем или требуется техническое обслуживание?
          <br /> Просто позвоните нам!
        </p>
      </div>
      <a href="tel:+79161514888" className={styles.button}>
        Позвонить!
        <br />
        {MAIN_TEL}
      </a>
    </section>
  );
};

export { Call };
