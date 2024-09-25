import React from "react";
import styles from "./NavListItem.module.scss";
function NavListItem({ item }) {
  return (
    <li className={styles.item}>
      <a className={styles.itemLink} href={item.link}>
        {item.name}
      </a>
    </li>
  );
}

export default NavListItem;
