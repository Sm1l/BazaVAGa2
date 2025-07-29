import React from "react";

import { Title } from "../Title";
import { YMap } from "../YMap";

import { ContactsPhones } from "../ContactsPhones";
import styles from "./Contacts.module.scss";

interface ContactsProps {}

const Contacts: React.FC<ContactsProps> = () => {
  return (
    <section className={styles.contacts} id="contacts">
      <Title text="Контакты" />
      <div className={styles.contactsContainer}>
        <ContactsPhones />
        <div className={styles.mapContainer}>
          <YMap lat={55.721579} lng={37.732179} />
        </div>
      </div>
    </section>
  );
};

export { Contacts };
