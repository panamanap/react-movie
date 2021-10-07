import React from 'react';
import s from './Movies.module.css';
import MovieItem from './MovieItem';
import Pagination from './Pagination';

const amountOfElements = 3;

const Movies = ({ movies, currentPage, setCurrentPage }) => {
    
    const lastElem = currentPage * amountOfElements;
    const firstElem = lastElem - amountOfElements;

    if (!movies) {
        return <h1>Loading...</h1>;
    }

    return (
        <main className={s.content}>
            <div className={s.moviesWrapper}>
                {movies.slice(firstElem, lastElem).map((obj, index) => (
                    <MovieItem key={index} {...obj} />
                ))}
            </div>
            <Pagination
                movies={movies}
                amountOfElements={amountOfElements}
                setCurrentPage={setCurrentPage}
            />
        </main>
    );
};

export default Movies;
