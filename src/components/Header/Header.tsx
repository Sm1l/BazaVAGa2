import React, { useState, useEffect } from "react";

import styles from "./Header.module.scss";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [width, setWidth] = useState(window.innerWidth);
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
      {width >= 960 && (
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
      )}
    </header>
  );
};

export { Header };
