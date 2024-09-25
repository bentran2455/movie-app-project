import React from "react";
import styles from "./Search.module.scss";

function Search() {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="Search" className={styles.input} />
      <ion-icon name="search-outline"></ion-icon>
    </div>
  );
}

export default Search;
