import { motion } from "framer-motion";
import React from "react";

import imgAddress from "../../assets/images/contacts/address.svg";
import imgPhone from "../../assets/images/contacts/phone.svg";
import imgTelegram from "../../assets/images/contacts/telegram.svg";
import imgTime from "../../assets/images/contacts/time.svg";
import imgWhatsapp from "../../assets/images/contacts/whatsapp.svg";
import imgMax from "../../assets/images/contacts/max.svg";

import { address } from "../../data/contacts";

import { MAIN_TEL, YURACH_TEL } from "../../data/phones";
import styles from "./ContactsPhones.module.scss";

interface ContactsPhonesProps {}

const ContactsPhones: React.FC<ContactsPhonesProps> = () => {
  return (
    <div className={styles.contactsPhones}>
      <div className={styles.contOne}>
        <div className={styles.itemContainer}>
          <img src={imgAddress} alt="address" className={styles.img} />
          <p className={styles.imgContainer}>{address}</p>
        </div>
        <div className={styles.itemContainer}>
          <img src={imgTime} alt="time" className={styles.img} />
          <p className={styles.imgContainerTime}>
            Понедельник - суббота <br /> с 9:00 до 21:00
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
                  <img src={imgPhone} alt="phone" className={styles.img} />
                </motion.a>
                <motion.a
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2, repeat: Infinity, repeatType: "reverse" }}
                  href={`https://wa.me/${MAIN_TEL}`}
                  className={styles.imgLink}
                  target="_blank"
                >
                  <img src={imgWhatsapp} alt="whatsapp" className={styles.img} />
                </motion.a>
                <motion.a
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3, repeat: Infinity, repeatType: "reverse" }}
                  href={`https://max.ru/u/`}
                  //!Ссылка на MAX
                  className={styles.imgLink}
                  target="_blank"
                >
                  <img src={imgMax} alt="max" className={styles.img} />
                </motion.a>
              </div>
              <p className={styles.name}>Рабочий на приемке bazaVAGa</p>
            </div>
            <div className={styles.itemContainer}>
              <div className={styles.picturesContainer}>
                <motion.a
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4, repeat: Infinity, repeatType: "reverse" }}
                  href={`tel:${YURACH_TEL}`}
                  className={styles.imgLink}
                >
                  <img src={imgPhone} alt="phone" className={styles.img} />
                </motion.a>
                <motion.a
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
                  href={`https://wa.me/${YURACH_TEL}`}
                  className={styles.imgLink}
                  target="_blank"
                >
                  <img src={imgWhatsapp} alt="whatsapp" className={styles.img} />
                </motion.a>
                <motion.a
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6, repeat: Infinity, repeatType: "reverse" }}
                  href={`https://max.ru/u/`}
                  //!Ссылка на MAX
                  className={styles.imgLink}
                  target="_blank"
                >
                  <img src={imgMax} alt="max" className={styles.img} />
                </motion.a>
              </div>
              <p className={styles.name}>Юрий Yurach</p>
            </div>
          </div>
        </div>

        <div className={styles.itemContainer}>
          <motion.a
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7, repeat: Infinity, repeatType: "reverse" }}
            href="https://t.me/bazaVAGa"
            className={styles.imgLink}
            target="_blank"
          >
            <img src={imgTelegram} alt="telegram" className={styles.img} />
          </motion.a>
          <p className={styles.name}>Группа базаВАГа в Телеграм</p>
        </div>
      </div>
    </div>
  );
};

export { ContactsPhones };
