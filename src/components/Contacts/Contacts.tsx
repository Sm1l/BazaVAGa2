import React from "react";

import { Title } from "../Title";
import { YMap } from "../YMap";
import { coords } from "../../data/contacts";

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
          <YMap lat={coords.lat} lng={coords.lng} />
        </div>
      </div>
    </section>
  );
};

export { Contacts };
