import React from "react";

const SearchBox = ({ setSearchText, searchText }) => {
  const searchMovie = (e) => {
    setSearchText(e.target.value)
  };

  return (
    <div>
      <input
        type="text"
        value={searchText}
        placeholder="Movie title... "
        onChange={searchMovie}
      />
    </div>
  );
};

export default SearchBox;
