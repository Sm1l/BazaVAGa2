import React from "react";
import styles from "./App.module.scss";
import { Main } from "./components/Main";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BurgerContainer } from "./components/BurgerContainer";

interface MainProps {}

const App: React.FC<MainProps> = () => {
  return (
    <div className={styles.app}>
      <BurgerContainer />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export { App };
