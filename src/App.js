import { Routes, Route } from "react-router-dom";
import Banner from "./pages/banner/Banner";
import Header from "./pages/header/Header";
import "./App.css";
import "./GlobalStyles.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Main from "./pages/main/Main";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route
          path="/all"
          element={<Main header="All movies" path="now_playing" />}
        />
        <Route
          path="/upcoming"
          element={<Main header="Opening this week" path="upcoming" />}
        />
      </Routes>
    </>
  );
}

export default App;
