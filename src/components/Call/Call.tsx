import React from "react";
import { motion } from "framer-motion";

import styles from "./Call.module.scss";
import { Title } from "../Title";

interface CallProps {}

const Call: React.FC<CallProps> = () => {
  return (
    <div className={styles.call}>
      <Title text="Забронировать визит" />
      <div className={styles.callContainer}>
        <p className={styles.text}>
          У вас проблемы с автомобилем или требуется техническое обслуживание? Просто позвоните нам!
        </p>
      </div>
      <motion.a
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
        href="tel:+79160773444"
        className={styles.button}
      >
        Позвонить!
        <br />
        +7 (916) 077-34-44
      </motion.a>
    </div>
  );
};

export { Call };
