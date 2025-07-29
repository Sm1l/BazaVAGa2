import { motion } from "framer-motion";
import React from "react";

import imgAddress from "../../assets/images/contacts/address.svg";
import imgCallW from "../../assets/images/contacts/callW.svg";
import imgTelegram from "../../assets/images/contacts/telegram.svg";
import imgTime from "../../assets/images/contacts/time.svg";
import imgWhatsappW from "../../assets/images/contacts/whatsappW.svg";

import { ALEX_TEL, MAIN_TEL, PIRAT_TEL, YURACH_TEL } from "../../data/constants";
import styles from "./ContactsPhones.module.scss";

interface ContactsPhonesProps {}

const ContactsPhones: React.FC<ContactsPhonesProps> = () => {
  return (
    <div className={styles.contactsPhones}>
      <div className={styles.contOne}>
        <div className={styles.itemContainer}>
          <img src={imgAddress} alt="address" className={styles.img} />
          <p className={styles.imgContainer}>г. Москва, 2-й Грайвороновский пр., 8, стр. 1</p>
        </div>
        <div className={styles.itemContainer}>
          <img src={imgTime} alt="time" className={styles.img} />
          <p className={styles.imgContainerTime}>
            Понедельник - пятница <br /> с 9:00 до 21:00
          </p>
        </div>
      </div>
      <div className={styles.contTwo}>
        <div className={styles.outsidePhonesContainer}>
          <div className={styles.insidePhonesContainer}>
            <div className={styles.itemContainer}>
              <div className={styles.picturesContainer}>
                <motion.a
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.1, repeat: Infinity, repeatType: "reverse" }}
                  href={`tel:${MAIN_TEL}`}
                  className={styles.imgLink}
                >
                  <img src={imgCallW} alt="phone" className={styles.img} />
                </motion.a>
                <motion.a
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
                  href={`https://wa.me/${MAIN_TEL}`}
                  className={styles.imgLink}
                  target="_blank"
                >
                  <img src={imgWhatsappW} alt="whatsapp" className={styles.imgW} />
                </motion.a>
              </div>
              <p className={styles.name}>рабочий на приемке bazaVAGa</p>
            </div>
            <div className={styles.itemContainer}>
              <div className={styles.picturesContainer}>
                <motion.a
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2, repeat: Infinity, repeatType: "reverse" }}
                  href={`tel:${YURACH_TEL}`}
                  className={styles.imgLink}
                >
                  <img src={imgCallW} alt="phone" className={styles.img} />
                </motion.a>
                <motion.a
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6, repeat: Infinity, repeatType: "reverse" }}
                  href={`https://wa.me/${YURACH_TEL}`}
                  className={styles.imgLink}
                  target="_blank"
                >
                  <img src={imgWhatsappW} alt="whatsapp" className={styles.imgW} />
                </motion.a>
              </div>
              <p className={styles.name}>Юрий Yurach</p>
            </div>

            <div className={styles.itemContainer}>
              <div className={styles.picturesContainer}>
                <motion.a
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3, repeat: Infinity, repeatType: "reverse" }}
                  href={`tel:${PIRAT_TEL}`}
                  className={styles.imgLink}
                >
                  <img src={imgCallW} alt="phone" className={styles.img} />
                </motion.a>
                <motion.a
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.7, repeat: Infinity, repeatType: "reverse" }}
                  href={`https://wa.me/${PIRAT_TEL}`}
                  className={styles.imgLink}
                  target="_blank"
                >
                  <img src={imgWhatsappW} alt="whatsapp" className={styles.imgW} />
                </motion.a>
              </div>
              <p className={styles.name}>Александр сервис Пират</p>
            </div>

            <div className={styles.itemContainer}>
              <div className={styles.picturesContainer}>
                <motion.a
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4, repeat: Infinity, repeatType: "reverse" }}
                  href={`tel:${ALEX_TEL}`}
                  className={styles.imgLink}
                >
                  <img src={imgCallW} alt="phone" className={styles.img} />
                </motion.a>
                <motion.a
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8, repeat: Infinity, repeatType: "reverse" }}
                  href={`https://wa.me/${ALEX_TEL}`}
                  className={styles.imgLink}
                  target="_blank"
                >
                  <img src={imgWhatsappW} alt="whatsapp" className={styles.imgW} />
                </motion.a>
              </div>
              <p className={styles.name}>Александр офис</p>
            </div>
          </div>
        </div>

        <div className={styles.itemContainer}>
          <img src={imgTelegram} alt="telegram" className={styles.img} />
          <motion.a
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9, repeat: Infinity, repeatType: "reverse" }}
            href="https://t.me/bazaVAGa"
            className={styles.imgContainerActive}
            target="_blank"
          >
            Тelegram
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export { ContactsPhones };
