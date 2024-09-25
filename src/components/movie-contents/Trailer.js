import React from "react";
import styles from "./Trailer.module.scss";
function Trailer() {
  return (
    <div className={styles.trailer}>
      <a href="/" className={styles.playBtn}>
        <ion-icon name="play-outline"></ion-icon>
      </a>
      <p className={styles.video}>Watch Trailer</p>
    </div>
  );
}

export default Trailer;
