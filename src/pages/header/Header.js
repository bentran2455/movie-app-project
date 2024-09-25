import React from "react";
import headerStyles from "./Header.module.scss";
import navStyles from "./../../components/navigation/NavListItem.module.scss";
import NavListItem from "../../components/navigation/NavListItem";
import { navList } from "../../data/navList";
import Search from "../../components/search/Search";
import Button from "../../components/buttons/Button";

function Header() {
  return (
    <header className={headerStyles.header}>
      <a href="/" className={headerStyles.logo}>
        Cinema
      </a>
      <ul className={navStyles.nav}>
        {navList.map((item) => (
          <NavListItem key={item._id} item={item} />
        ))}
      </ul>
      <Search />
      <Button primary icon="log-in-outline" name="Sign in" />
    </header>
  );
}

export default Header;
