import React from "react";
import Header from "./components/Header";
import Movies from "./components/Movies";

function App() {
  const [movies, setMovies] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [foundMovie, setFoundMovie] = React.useState("");

  React.useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const res = await fetch(
          "https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=Batman&page=2"
        );
        const json = await res.json();
        setMovies(json);
        setLoading(false);
      } catch (error) {
        alert("Ошибка при запросе данных");
      }
    })();
  }, []);

  const onSearchMobie = (name) => {
    setMovies({
      ...movies,
      Search: movies.Search.filter((obj) => obj.Title.includes(name))
    });
  };

  return (
    <div className="wrapper">
      <Header
        setFoundMovie={setFoundMovie}
        foundMovie={foundMovie}
        onSearchMobie={onSearchMobie}
      />
      <Movies movies={movies} loading={loading} />
    </div>
  );
}

export default App;
