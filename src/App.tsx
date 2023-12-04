import React, { useRef } from "react";
import styles from "./App.module.scss";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const appRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.app} ref={appRef}>
      <Header appRef={appRef} />
      <Main appRef={appRef} />
      <Footer />
    </div>
  );
};

export { App };
