import React from "react";
import styles from "./MovieContent.module.scss";
import Button from "../buttons/Button";

function MovieContent({ movie }) {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>{movie.title}</h1>
      <h4 className={styles.overview}>
        <span>2024</span>
        <span>
          <i>{movie.adult ? "18+" : "13+"}</i>
        </span>
        <span>{movie.vote_average}/10</span>
      </h4>
      <p className={styles.desc}>{movie.overview}</p>
      <div className={styles.btnWrapper}>
        <Button primary icon="play-outline" name="Watch" />
        <Button outlined icon="add-outline" name="My List" />
      </div>
    </div>
  );
}

export default MovieContent;
