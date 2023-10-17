import React from "react";

import styles from "./Footer.module.scss";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <p>© Все права защищены. BazaVAGa 2023</p>
      </div>
    </div>
  );
};

export { Footer };
