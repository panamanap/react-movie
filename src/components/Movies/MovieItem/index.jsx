import React from "react";
import s from "./MovieItem.module.css";

const MovieItem = ({ Poster, Title, Year, imdbID, Type }) => {
  return (
    <div className={s.movieItem}>
      <img
        className={s.poster}
        src={
          Poster
            ? Poster
            : "https://raw.githubusercontent.com/julien-gargot/images-placeholder/master/placeholder-portrait.png"
        }
        alt="poster"
      />
      <div className={s.discription}>
        <p>Name:{Title}</p>
        <p>Year: {Year}</p>
        <p>imdbID: {imdbID}</p>
        <p>Type: {Type}</p>
      </div>
    </div>
  );
};

export default MovieItem;
