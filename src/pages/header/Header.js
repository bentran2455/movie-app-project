import React, { useEffect, useState, useRef } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { search } from "../../ultis/Request";
import headerStyles from "./Header.module.scss";
import NavBar from "../../components/navigation/NavBar";
import Search from "../../components/search/Search";

function Header() {
  const [searchValue, setSearchValue] = useState("");
  const [movieOnSearch, setMovieOnSearch] = useState([]);
  const debouncedValue = useDebounce(searchValue, 1000);

  const headerRef = useRef();

  useEffect(() => {
    const fetch = async () => {
      const result = await search(debouncedValue);
      setMovieOnSearch(result);
    };
    fetch();
  }, [debouncedValue]);

  useEffect(() => {
    function addScroll() {
      headerRef.current.classList.add("scrolled");
    }
    window.addEventListener("scroll", addScroll);
    return () => {
      window.removeEventListener("scroll", addScroll);
    };
  });
  return (
    <div className="container">
      <header className={headerStyles.header} ref={headerRef}>
        <a href="/" className={headerStyles.logo}>
          Cinema
        </a>
        <NavBar />
        <Search
          searchText={searchValue}
          searchTextFn={setSearchValue}
          movieOnSearch={movieOnSearch}
        />
      </header>
    </div>
  );
}

export default Header;
