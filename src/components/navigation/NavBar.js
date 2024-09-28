import React from "react";
import { NavLink } from "react-router-dom";
import navList from "../../data/navList";
import styles from "./NavBar.module.scss";

export default function NavBar() {
  return (
    <nav>
      <ul className={styles.nav}>
        {navList.map((item) => (
          <li key={item._id}>
            <NavLink className={styles.item} to={`${item.link}`}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
