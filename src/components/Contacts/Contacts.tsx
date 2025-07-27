import { motion } from "framer-motion";
import React from "react";

import imgAddress from "../../assets/images/contacts/address.svg";
import imgCall from "../../assets/images/contacts/call.svg";
import imgTelegram from "../../assets/images/contacts/telegram.svg";
import imgTime from "../../assets/images/contacts/time.svg";
import imgWhatsapp from "../../assets/images/contacts/whatsapp.svg";

import { Title } from "../Title";
import { YMap } from "../YMap";

import { ALEX_TEL, MAIN_TEL, PIRAT_TEL, YURACH_TEL } from "../../data/constants";
import styles from "./Contacts.module.scss";

interface ContactsProps {}

const Contacts: React.FC<ContactsProps> = () => {
  return (
    <section className={styles.contacts} id="contacts">
      <Title text="Контакты" />
      <div className={styles.contactsContainer}>
        <div className={styles.cont}>
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
              <img src={imgCall} alt="phone" className={styles.img} />
              <div className={styles.insidePhonesContainer}>
                <div className={styles.itemContainer}>
                  <motion.a
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                    href="tel:+79161514888"
                    className={styles.imgContainerActive}
                  >
                    {MAIN_TEL}
                  </motion.a>
                  <p className={styles.name}>рабочий на приемке bazaVAGa</p>
                </div>
                <div className={styles.itemContainer}>
                  <motion.a
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                    href="tel:+79160773444"
                    className={styles.imgContainerActive}
                  >
                    {YURACH_TEL}
                  </motion.a>
                  <p className={styles.name}>Юрий Yurach</p>
                </div>
                <div className={styles.itemContainer}>
                  <motion.a
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                    href="tel:+79163808492"
                    className={styles.imgContainerActive}
                  >
                    {PIRAT_TEL}
                  </motion.a>
                  <p className={styles.name}>Александр сервис Пират</p>
                </div>
                <div className={styles.itemContainer}>
                  <motion.a
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                    href="tel:+79258444336"
                    className={styles.imgContainerActive}
                  >
                    {ALEX_TEL}
                  </motion.a>
                  <p className={styles.name}>Александр офис</p>
                </div>
              </div>
            </div>
            <div className={styles.itemContainer}>
              <img src={imgWhatsapp} alt="whatsapp" className={styles.imgW} />
              <motion.a
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3, repeat: Infinity, repeatType: "reverse" }}
                href="https://wa.me/+79161514888"
                className={styles.imgContainerActive}
                target="_blank"
              >
                WhatsApp
              </motion.a>
            </div>
            <div className={styles.itemContainer}>
              <img src={imgTelegram} alt="telegram" className={styles.img} />
              <motion.a
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6, repeat: Infinity, repeatType: "reverse" }}
                href="https://t.me/bazaVAGa"
                className={styles.imgContainerActive}
                target="_blank"
              >
                Тelegram
              </motion.a>
            </div>
          </div>
        </div>
        <div className={styles.mapContainer}>
          <YMap lat={55.721579} lng={37.732179} />
        </div>
      </div>
    </section>
  );
};

export { Contacts };
