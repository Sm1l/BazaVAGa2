import React, { useEffect, useState } from "react";
import { slide as Burger } from "react-burger-menu";

import styles from "./BurgerContainer.module.scss";
import "./burger.scss";

interface BurgerContainerProps {}

const BurgerContainer: React.FC<BurgerContainerProps> = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  return (
    <div className={styles.burgerContainer}>
      {width < 960 && (
        <Burger right width={"200px"}>
          <a className="menu-item" href="#home">
            Главная
          </a>
          <a className="menu-item" href="#advantages">
            Преимущества
          </a>
          <a className="menu-item" href="#services">
            Услуги
          </a>
          <a className="menu-item" href="#contacts">
            Контакты
          </a>
        </Burger>
      )}
    </div>
  );
};

export { BurgerContainer };
