import React from "react";

import { Advantages } from "../Advantages";
import { Auto } from "../Auto";
import { Call } from "../Call";
import { Contacts } from "../Contacts";
import { Home } from "../Home";
import { Services } from "../Services";
import styles from "./Main.module.scss";

interface MainProps {}

const Main: React.FC<MainProps> = () => {
  return (
    <main className={styles.main}>
      <Home />
      <Advantages />
      <Auto />
      <Services />
      <Call />
      <Contacts />
    </main>
  );
};

export { Main };
