import React from "react";
import { useState, useEffect } from "react";
import { options } from "../../ultis/Request";
import { genreList } from "../../data/genreList";
import styles from "./Schedule.module.scss";
import Card from "../../components/card/Card";

function Schedule() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/upcoming", options)
      .then((response) => response.json())

      .then((response) => {
        setMovies(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className={styles.wrapper}>
      <div className="container-fluid">
        <div className="row">
          <h4 className={styles.title}>Opening this week</h4>
        </div>
        <div className="row">
          <ul className={styles.filters}>
            {genreList.map((genre) => (
              <li className={styles.genre} key={genre.id}>
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="row mt-5">
          {movies &&
            movies.length > 0 &&
            movies.map((movie) => <Card key={movie.id} movie={movie} />)}
        </div>
      </div>
    </section>
  );
}

export default Schedule;
