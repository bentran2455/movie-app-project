import React from "react";
import { useState, useEffect } from "react";
import { request } from "../../ultis/Request";
import { filterList } from "../../data/filterList";
import styles from "./Main.module.scss";
import Card from "../../components/card/Card";

function Main({ header, path }) {
  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState(filterList);

  useEffect(() => {
    setFilter(filterList);
    const fetch = async () => {
      const result = await request(path);
      setData(result);
    };
    fetch();
  }, [path]);

  useEffect(() => {
    setMovies(data);
  }, [data]);

  function getGenre(genre) {
    if (genre.id === 1) {
      setMovies(data);
      setFilter(filterList);
      return;
    }
    const clickedGenre = filter.map((el) =>
      el.id === genre.id && genre.id !== 1
        ? { ...el, active: true }
        : { ...el, active: false }
    );
    console.log(clickedGenre);
    setFilter(clickedGenre);
    const movieByGenre = movies.filter((movie) => {
      return movie.genre_ids.includes(genre.id);
    });
    setMovies(movieByGenre);
  }
  return (
    <main className={styles.main}>
      <section className={styles.wrapper}>
        <div className="container-fluid">
          <div className="row">
            <h4 className={styles.header}>{header}</h4>
            <ul className={styles.filters}>
              {filter.map((genre) => (
                <li
                  className={`${styles.genre} ${
                    genre.active ? styles.active : ""
                  }`}
                  key={genre.id}
                  onClick={() => {
                    getGenre(genre);
                  }}
                >
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
    </main>
  );
}

export default Main;
