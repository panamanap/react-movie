import React from "react";
import SearchBox from "./SearchBox";
import Login from "./Login";
import s from "./Header.module.css";

const Header = ({ setFoundMovie, foundMovie, onSearchMobie }) => {
  return (
    <header className={s.header}>
      <h1>Movie catalog</h1>
      <SearchBox
        onSearchMobie={onSearchMobie}
        setFoundMovie={setFoundMovie}
        foundMovie={foundMovie}
      />
      <Login />
    </header>
  );
};

export default Header;
