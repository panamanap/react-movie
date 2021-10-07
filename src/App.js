import React from 'react';
import Header from './components/Header';
import Movies from './components/Movies';
import './index.css';



function App() {
    const [movies, setMovies] = React.useState({});
    const [searchText, setSearchText] = React.useState('');
    const [currentPage, setCurrentPage] = React.useState(1);

    React.useEffect(() => {
        fetch(
            'https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=Batman&page=2'
        )
            .then((res) => res.json())
            .then((json) => setMovies(json))
            .catch((e) => alert('Ошибка при запросе данных'));
    }, []);

    return (
        <div className="wrapper">
            <Header setSearchText={setSearchText} searchText={searchText} />
            <Movies
                movies={movies.Search?.filter((obj) =>
                    obj.Title.includes(searchText)
                )}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            
        </div>
    );
}

export default App;
