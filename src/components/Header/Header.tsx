import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { BurgerContainer } from "../BurgerContainer";
import styles from "./Header.module.scss";

interface HeaderProps {
  appRef: React.RefObject<HTMLDivElement>;
}

const Header: React.FC<HeaderProps> = ({ appRef }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [appComponent, setAppComponent] = useState<Element | null>(appRef.current);

  useEffect(() => {
    setAppComponent(appRef.current);
  }, []);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <h1 className={styles.logoTitle}>BazaVAGa</h1>
      </div>
      <div className={styles.line}></div>
      {width >= 960 ? (
        <nav className={styles.navigation}>
          <a className={styles.link} href="#advantages">
            Преимущества
          </a>
          <a className={styles.link} href="#services">
            Услуги
          </a>
          <a className={styles.link} href="#contacts">
            Контакты
          </a>
        </nav>
      ) : (
        appComponent && createPortal(<BurgerContainer />, appComponent)
      )}
    </header>
  );
};

export { Header };
