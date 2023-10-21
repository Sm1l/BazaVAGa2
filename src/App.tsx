import React from "react";
import styles from "./App.module.scss";
import { Main } from "./components/Main";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div className={styles.app} id="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export { App };
