import React from "react";

import { MAIN_TEL } from "../../data/constants";
import styles from "./BurgerMenu.module.scss";

interface BurgerMenuProps {
  menuIsActive: boolean;
  setMenuIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ menuIsActive, setMenuIsActive }) => {
  const closeHandleClick = () => {
    setMenuIsActive(false);
  };
  return (
    <div className={menuIsActive ? `${styles.burgerMenu} ${styles.active}` : `${styles.burgerMenu}`}>
      <div className={styles.background} onClick={closeHandleClick}></div>
      <div className={menuIsActive ? `${styles.content} ${styles.active}` : `${styles.content}`}>
        <nav className={styles.navigation}>
          <ul className={styles.navList}>
            <li>
              <a className={styles.navLink} href="#home">
                Главная
              </a>
            </li>
            <li>
              <a className={styles.navLink} href="#advantages">
                Преимущества
              </a>
            </li>
            <li>
              <a className={styles.navLink} href="#services">
                Услуги
              </a>
            </li>
            <li>
              <a className={styles.navLink} href="#contacts">
                Контакты
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.contactsContainer}>
          <h3>Контакты</h3>
          <div className={styles.contacts}>
            <p>БазаВАГа</p>
            <a className={styles.link} href="tel:+79161514888">
              <p>{MAIN_TEL}</p>
            </a>
            <a className={styles.link} href="https://wa.me/+79161514888" target="_blank">
              <p>WhatsApp</p>
            </a>
            <a className={styles.link} href="https://t.me/bazaVAGa" target="_blank">
              <p>Telegram</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BurgerMenu };
