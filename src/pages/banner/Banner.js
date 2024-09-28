import React, { useState } from "react";
import styles from "./Banner.module.scss";
import { movieData } from "../../data/mainData";
import MovieContent from "../../components/movie-contents/MovieContent";
import MovieSlider from "../../components/slider/MovieSlider";

const prePath = "https://image.tmdb.org/t/p/w500";

function Banner() {
  const [banner, setBanner] = useState(movieData[1]);

  const handleSliderChange = (clicked_id) => {
    const clickedMovie = movieData.filter((item) => item.id === clicked_id);
    setBanner(clickedMovie[0]);
  };

  return (
    <div className={styles.banner}>
      <div className={styles.movie}>
        <img
          alt={banner.title}
          src={`${prePath}${banner.backdrop_path}`}
          className={styles.backgroundImg}
        />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <MovieContent movie={banner} />
            </div>
            <div className="col-lg-6 col-md-12">
              {movieData && (
                <MovieSlider
                  slideChange={handleSliderChange}
                  slides={movieData}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
