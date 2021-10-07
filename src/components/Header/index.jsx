import React from 'react';
import SearchBox from './SearchBox';
import Login from './Login';
import s from './Header.module.css';

const Header = ({ setSearchText, searchText }) => {
    
    return (
        <header className={s.header}>
            <h1>Movie catalog</h1>
            <SearchBox setSearchText={setSearchText} searchText={searchText} />
            <Login />
        </header>
    );
};

export default Header;
