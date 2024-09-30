import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";
import styles from "./Search.module.scss";

function Search({ searchText, searchTextFn, movieOnSearch }) {
  const [tippyDisplay, setTippyDisplay] = useState(false);
  useEffect(() => {
    function handleScroll() {
      setTippyDisplay(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <Tippy
      interactive
      visible={tippyDisplay}
      onClickOutside={() => setTippyDisplay(false)}
      maxWidth={300}
      placement="bottom"
      popperOptions={{
        positionFixed: true,
      }}
      render={(attrs) => (
        <div {...attrs} className={styles.list} tabIndex="-1">
          <ul className={styles.searchUl}>
            {movieOnSearch.map((movie) => (
              <li key={movie.id} onClick={() => setTippyDisplay(false)}>
                <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    >
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search"
          className={styles.input}
          value={searchText}
          onChange={(e) => {
            setTippyDisplay(true);
            searchTextFn(e.target.value);
          }}
        />
        <ion-icon name="search-outline"></ion-icon>
      </div>
    </Tippy>
  );
}

export default Search;
