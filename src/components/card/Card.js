import React from "react";
import styles from "./Card.module.scss";

const prePath = "https://image.tmdb.org/t/p/w300";
function Card({ movie }) {
  return (
    <div className="col-lg-2 col-md-4 col-sm-6">
      <div className={styles.cards}>
        <img
          src={`${prePath}${movie.poster_path}`}
          alt="Preview"
          className="img-fluid"
        />
        <p className={styles.category}>Category</p>
        <div className={styles.content}>
          <h4 className={styles.title}>{movie.title}</h4>
          <div className={styles.icon}>
            <ion-icon name="add-outline"></ion-icon>
            <ion-icon name="play-outline"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
