import React from "react";

const SearchBox = ({ setFoundMovie, foundMovie, onSearchMobie }) => {
  const searchMovie = (e) => {
    setFoundMovie(e.target.value);
  };

  const onSearchMovie = (e) => {
    if (e.keyCode === 13) {
      onSearchMobie(foundMovie);
    }
  };
  return (
    <div>
      <input
        type="text"
        value={foundMovie}
        placeholder="Movie title... "
        onChange={searchMovie}
        onKeyDown={onSearchMovie}
      />
    </div>
  );
};

export default SearchBox;
