import React from 'react';
import s from './Pagination.module.css';

function Pagination({ setCurrentPage, movies, amountOfElements }) {
    const pages = [];
    for (let i = 1; i < movies.length / amountOfElements + 1; i++) {
        pages.push(i);
    }

    return (
        <ul className={s.footerPagination}>
            {pages.map((page, index) => (
                <li key={index} onClick={() => setCurrentPage(page)}>
                    {page}
                </li>
            ))}
        </ul>
    );
}

export default Pagination;
