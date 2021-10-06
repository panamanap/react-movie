import React from "react";
import s from "./Movies.module.css";
import MovieItem from "./MovieItem";

const Movies = ({ movies, loading }) => {
  if (loading) {
    return <h1>Loading...</h1>;
  }

  console.log(typeof movies.Search);

  return (
    <div className={s.moviesWrapper}>
      {/* {movies.Search.map((obj, index) => (
        <MovieItem key={index} {...obj} />
      ))} */}
    </div>
  );
};

export default Movies;
