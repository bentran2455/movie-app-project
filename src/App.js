import "./App.css";
import "./GlobalStyles.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Banner from "./pages/banner/Banner";
import Header from "./pages/header/Header";
import Main from "./pages/main/Main";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Main />
    </>
  );
}

export default App;
