import { Routes, Route } from "react-router-dom";
import Banner from "./pages/banner/Banner";
import Header from "./pages/header/Header";
import MovieDetail from "./pages/detail/MovieDetail";
import "./App.css";
import "./GlobalStyles.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Main from "./pages/main/Main";
import ScrollToTop from "./components/effect/ScrollToTop";

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/all" element={<Main />} />
        <Route path="/movie/:movieId" element={<MovieDetail />} />
      </Routes>
    </>
  );
}

export default App;
