import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import { Advantages } from "../Advantages";
import { Auto } from "../Auto";
import { Call } from "../Call";
import { Contacts } from "../Contacts";
import { Home } from "../Home";
import { Services } from "../Services";
import styles from "./Main.module.scss";
import { Modal } from "../Modal";

interface MainProps {
  appRef: React.RefObject<HTMLDivElement>;
}

const Main: React.FC<MainProps> = ({ appRef }) => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [appComponent, setAppComponent] = useState<Element | null>(appRef.current);

  useEffect(() => {
    setAppComponent(appRef.current);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setModalIsVisible(true);
    }, 5000);
  }, []);

  return (
    <main className={styles.main}>
      <Home />
      <Advantages />
      <Auto />
      <Services />
      <Call />
      <Contacts />
      {modalIsVisible &&
        appComponent &&
        createPortal(<Modal modalIsVisible={modalIsVisible} setModalIsVisible={setModalIsVisible} />, appComponent)}
    </main>
  );
};

export { Main };
