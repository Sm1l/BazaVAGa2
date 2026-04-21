import React, { useRef } from "react";
import styles from "./App.module.scss";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { AnimatePresence } from "framer-motion";
import { Modal } from "./components/Modal";
import { useModalTimer } from "./hooks/useModalTimer";
import { isExpired } from "./helpers/expired";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const appRef = useRef<HTMLDivElement>(null);
  const { isVisible, setIsVisible } = useModalTimer(3000, 10000);

  return (
    <div className={styles.app} ref={appRef}>
      <Header />
      <Main />
      <Footer />
      <AnimatePresence>
        {!isExpired && isVisible && <Modal modalIsVisible={isVisible} setModalIsVisible={setIsVisible} />}
      </AnimatePresence>
    </div>
  );
};

export { App };
