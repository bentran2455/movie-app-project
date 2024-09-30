import React, { useState, useEffect } from "react";
import styles from "./MovieDetail.module.scss";
import { detail, similar } from "../../ultis/Request";
import Card from "../../components/card/Card";
import { useParams } from "react-router-dom";

const prePath = "https://image.tmdb.org/t/p/w300";

function MovieDetail() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [recommendation, setRecommendation] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const result = await detail(movieId);
      setMovie(result);
    };
    fetch();
  }, [movieId]);

  useEffect(() => {
    const fetch = async () => {
      const result = await similar(movieId);
      setRecommendation(result);
    };
    fetch();
  }, [movieId]);

  function formatRunTime(runtime) {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime - 60;
    return `${hours}h ${minutes}m`;
  }
  return (
    <main className={styles.main}>
      <div className={styles.detail}>
        {movie ? (
          <div className={styles.columns}>
            <div>
              <img src={`${prePath}/${movie.poster_path}`} alt={movie.title} />
            </div>

            <div className={styles.content}>
              <h2 className={styles.title}>
                {`${movie.title} (${movie.release_date?.slice(0, 4)})`}
              </h2>
              <div className={styles.facts}>
                <ul className={styles.genres}>
                  {movie.genres?.map((el) => (
                    <li key={el.id}>{el.name}</li>
                  ))}
                  <li className={styles.runtime}>
                    <ion-icon name="hourglass-outline"></ion-icon>
                    {formatRunTime(movie.runtime)}
                  </li>
                </ul>
              </div>
              <h3 className={styles.header}>Overview</h3>
              <p>{movie.overview}</p>
              <p>
                <strong>Original language: </strong>
                {movie.spoken_languages?.map((el) => (
                  <span key={el.name}>{el.name}</span>
                ))}
              </p>
            </div>
          </div>
        ) : (
          <p>No film found</p>
        )}
      </div>
      <h3 className={styles.header}>You may also like</h3>
      <div className="row mt-5">
        {recommendation &&
          recommendation.map((movie) => <Card key={movie.id} movie={movie} />)}
      </div>
    </main>
  );
}

export default MovieDetail;
