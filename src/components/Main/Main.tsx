import React from "react";

import styles from "./Main.module.scss";
import { Home } from "../Home";
import { Advantages } from "../Advantages";
import { Auto } from "../Auto";
import { Services } from "../Services";
import { Call } from "../Call";
import { Contacts } from "../Contacts";

interface MainProps {}

const Main: React.FC<MainProps> = () => {
  return (
    <div className={styles.main}>
      <Home />
      <Advantages />
      <Auto />
      <Services />
      <Call />
      <Contacts />
    </div>
  );
};

export { Main };
