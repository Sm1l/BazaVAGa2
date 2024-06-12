import React, { useEffect, useState } from "react";

import logo from "../../assets/images/home/logoBazaVagaWhite.png";
import { BurgerButton } from "../BurgerButton";
import { BurgerMenu } from "../BurgerMenu";
import styles from "./Header.module.scss";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);
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
        <img className={styles.logo} src={logo} alt="BazaVAGa" />
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
        <>
          <BurgerButton menuIsActive={menuIsActive} setMenuIsActive={setMenuIsActive} />
          <BurgerMenu menuIsActive={menuIsActive} setMenuIsActive={setMenuIsActive} />
        </>
      )}
    </header>
  );
};

export { Header };
