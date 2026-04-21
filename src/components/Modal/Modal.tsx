import { motion } from "framer-motion";
import React, { useEffect } from "react";

import styles from "./Modal.module.scss";

import CrossRound from "../../assets/images/modal/cross-round.svg";

import { modalVariants } from "./modalVariants.ts";
import { createPortal } from "react-dom";
import { address } from "../../data/contacts.ts";

import bv1 from "../../assets/images/modal/BV1.jpg";
import bv2 from "../../assets/images/modal/BV2.jpg";

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
    } else {
      document.body.style.overflow = "unset";
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

  if (!modalIsVisible) return null;

  return createPortal(
    <div className={styles.overlay} onClick={closeModalHandleClick} role="dialog" aria-modal="true">
      <motion.div
        className={styles.container}
        onClick={(e) => e.stopPropagation()}
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
        <p className={styles.text}>Уважаемые клиенты!</p>

        <div className={styles.imgContainer}>
          <img className={styles.img} src={bv1} alt="BazaVAGa1" />
          <img className={styles.img} src={bv2} alt="BazaVAGa2" />
        </div>

        <p>
          Наш новый адрес : {address}
          <br /> С уважением, Ваша <span className={styles.red}>BazaVAGa.</span>
        </p>
        <button className={styles.close} onClick={closeModalHandleClick}>
          <img className={styles.svg} src={CrossRound} alt="close button" />
        </button>
      </motion.div>
    </div>,
    document.body
  );
};

export { Modal };
