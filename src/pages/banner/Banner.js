import React, { useEffect, useState } from "react";
import styles from "./Banner.module.scss";
import { options } from "../../ultis/Request";
import MovieContent from "../../components/movie-contents/MovieContent";
import MovieSlider from "../../components/slider/MovieSlider";

const prePath = "https://image.tmdb.org/t/p/w500";

function Banner() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/now_playing", options)
      .then((response) => response.json())
      .then((response) => {
        setMovies(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSliderChange = (clicked_id) => {
    const clickedMovie = movies.filter((item) => item.id === clicked_id);
    setMovies(clickedMovie);
  };
  return (
    <div className={styles.banner}>
      {movies &&
        movies.length > 0 &&
        movies.slice(0, 1).map((movie) => (
          <div className={styles.movie} key={movie.id}>
            <img
              alt={movie.title}
              src={`${prePath}${movie.backdrop_path}`}
              className={styles.backgroundImg}
            />
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <MovieContent movie={movie} />
                </div>
                <div className="col-lg-6 col-md-12">
                  {movies && (
                    <MovieSlider
                      slideChange={handleSliderChange}
                      slides={movies}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Banner;
