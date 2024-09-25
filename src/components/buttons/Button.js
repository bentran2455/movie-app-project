import React from "react";
import styles from "./Button.module.scss";

function Button({ primary = false, outlined = false, icon = false, name }) {
  let extraClass;
  if (primary) {
    extraClass = "primary";
  } else if (outlined) {
    extraClass = "outlined";
  }
  return (
    <button className={`${styles.button} ${styles[extraClass]}`}>
      {<ion-icon name={icon}></ion-icon>} {name}
    </button>
  );
}

export default Button;
