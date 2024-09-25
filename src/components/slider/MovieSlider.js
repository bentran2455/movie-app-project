import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "./movieSlider.css";

const prePath = "https://image.tmdb.org/t/p/w300";

function MovieSlider({ slides, slideChange }) {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      initialSlide={2}
      slidesPerView={"5"}
      modules={[Autoplay, EffectCoverflow]}
      className="movieSlider"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <img
            src={`${prePath}${slide.poster_path}`}
            alt="Poster"
            onClick={() => slideChange(slide.id)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MovieSlider;
