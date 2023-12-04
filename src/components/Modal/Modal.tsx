import { motion } from "framer-motion";
import React, { useEffect } from "react";

import styles from "./Modal.module.scss";

import CrossRound from "../../assets/images/modal/cross-round.svg";

import { modalVariants } from "./modalVariants.ts";

interface ModalProps {
  modalIsVisible: boolean;
  setModalIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ modalIsVisible, setModalIsVisible }) => {
  const closeModalHandleClick = () => {
    setModalIsVisible(false);
  };

  //*disable scroll
  useEffect(() => {
    if (modalIsVisible) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalIsVisible]);

  //*close modal "Escape"
  useEffect(() => {
    const escCloseModal = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        closeModalHandleClick();
      }
    };
    if (modalIsVisible) {
      window.addEventListener("keydown", escCloseModal);
    }
    return () => {
      window.removeEventListener("keydown", escCloseModal);
    };
  }, [modalIsVisible]);

  return (
    <div className={styles.overlay} onClick={closeModalHandleClick}>
      <motion.div
        className={styles.container}
        onClick={(e: React.SyntheticEvent<EventTarget>) => e.stopPropagation()}
        initial={"hidden"}
        animate={"visible"}
        exit={"exit"}
        key="container"
        transition={{
          duration: 0.5,
          type: "spring",
        }}
        variants={modalVariants}
      >
        <p className={styles.text}>
          Уважаемые клиенты!
          <br />В связи временным отсутствием достаточного количества подъемников, время записи в наш сервис увеличено.
          Также мы пока вынуждены не принимать в работу автомобили с регламентным ТО, дабы акцентировать внимание на
          решении более сложных вопросов наших клиентов.
          <br /> Мы делаем все, чтобы поскорее решить возникшие трудности!
          <br /> Приносим извинения за временные неудобства!
          <br /> С уважением, Ваша <span className={styles.red}>BazaVAGa.</span>
        </p>
        <button className={styles.close} onClick={closeModalHandleClick}>
          <img className={styles.svg} src={CrossRound} alt="close button" />
        </button>
      </motion.div>
    </div>
  );
};

export { Modal };
