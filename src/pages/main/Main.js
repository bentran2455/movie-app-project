import React from "react";
import styles from "./Main.module.scss";
import Schedule from "../schedule/Schedule";

function Main() {
  return (
    <main className={styles.wrapper}>
      <Schedule />
    </main>
  );
}

export default Main;
