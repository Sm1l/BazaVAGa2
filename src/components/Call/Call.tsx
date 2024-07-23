import React from "react";

import styles from "./Call.module.scss";
import { Title } from "../Title";

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
      <a href="tel:+79160773444" className={styles.button}>
        Позвонить!
        <br />
        +7 (916) 077-34-44
      </a>
    </section>
  );
};

export { Call };
