import React from "react";
import styles from "./AllMovies.module.scss";
import Card from "../../components/card/Card";

function AllMovies({ header, movieList }) {
  return (
    <section className={styles.wrapper}>
      <div className="container-fluid">
        <div className="row">
          <h4 className={styles.header}>{header}</h4>
        </div>
        <div className="row mt-5">
          {movieList &&
            movieList.length > 0 &&
            movieList.map((movie) => <Card key={movie.id} movie={movie} />)}
        </div>
      </div>
    </section>
  );
}

export default AllMovies;
