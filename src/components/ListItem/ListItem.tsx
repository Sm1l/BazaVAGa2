import React from "react";

import styles from "./ListItem.module.scss";

interface ListItemProps {
  text: string;
}

const ListItem: React.FC<ListItemProps> = ({ text }) => {
  return (
    <li className={styles.listItem}>
      <span className={styles.check}></span>
      <p>{text}</p>
    </li>
  );
};

export { ListItem };
