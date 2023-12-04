import { motion } from "framer-motion";
import React from "react";

import imgAddress from "../../assets/images/contacts/address.svg";
import imgCall from "../../assets/images/contacts/call.svg";
import imgTime from "../../assets/images/contacts/time.svg";
import imgWhatsapp from "../../assets/images/contacts/whatsapp.svg";

import { Title } from "../Title";
import { YMap } from "../YMap";

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
              <p className={styles.imgContainer}>г. Москва, 2-й Грайвороновский пр., 8, стр. 7</p>
            </div>
            <div className={styles.itemContainer}>
              <img src={imgTime} alt="time" className={styles.img} />
              <p className={styles.imgContainerTime}>
                Понедельник - суббота <br /> с 9:00 до 21:00
              </p>
            </div>
          </div>
          <div className={styles.contTwo}>
            <div className={styles.itemContainer}>
              <img src={imgCall} alt="phone" className={styles.img} />
              <motion.a
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                href="tel:+79160773444"
                className={styles.imgContainerActive}
              >
                +7 (916) 077-34-44
              </motion.a>
            </div>
            <div className={styles.itemContainer}>
              <img src={imgWhatsapp} alt="whatsapp" className={styles.imgW} />
              <motion.a
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                href="https://wa.me/+79160773444"
                className={styles.imgContainerActive}
                target="_blank"
              >
                Написать
              </motion.a>
            </div>
          </div>
        </div>
        <div className={styles.mapContainer}>
          <YMap lat={55.7225} lng={37.73144} />
        </div>
      </div>
    </section>
  );
};

export { Contacts };
