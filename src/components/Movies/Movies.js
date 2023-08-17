import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import LoadMoreMovie from "../LoadMoreMovie/LoadMoreMovie.js";
import MoviesApi from "../../utils/MoviesApi";

import Preloader from "../Preloader/Preloader.js";

import { useState } from "react";

function Movies() {
  const api = new MoviesApi({
    baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
    headers: {
      "Content-Type": "application/json",
    },
  });

  let valueSearch;

  function getStorage() {
    if (localStorage.getItem("userMovie") !== null) {
      const savedUserMovie = JSON.parse(localStorage.getItem("userMovie"));
      valueSearch = savedUserMovie.value;
      return savedUserMovie.ourList;
    }
    return [];
  }

  const [movies, setMovies] = useState(getStorage());


  // функция, которая принимает аргументом value input
  function SearchMovie(value) {
    api
      .getMovies()
      .then((data) => {
        localStorage.clear();
        setMovies(filterData(data, value));
      })
      .catch((error) => console.log(error));
  }

  function filterData(data, value) {
    const ourList = data.filter(
      (movie) =>
        checkValue(movie.nameRU, value) || checkValue(movie.nameEN, value)
    );
    function checkValue(obj, value) {
      return obj.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    }
    localStorage.setItem("userMovie", JSON.stringify({ value, ourList }));

    return ourList;
  }

  return (
    <main className="main">
      <div className="movies">
        <SearchForm inputValue = {valueSearch} newMovieFind={SearchMovie} />
        <MoviesCardList FilterMovie={movies} />
      </div>
    </main>
  );
}

export default Movies;
