import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import MoviesApi from "../../utils/MoviesApi";

import { useEffect, useState } from "react";

function Movies() {
  const api = new MoviesApi({
    baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const [allMovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [checkbox, setCheckbox] = useState(false);
  const [inputValue, setInputValue] = useState('');
  //const [error, setError] = useState(false);

  useEffect(()=> {
    const userSavedSearch = JSON.parse(localStorage.getItem("userMovie")) || [];
    if(userSavedSearch.length !== 0){
      const {filteredList, isShort, value} = userSavedSearch;
      setMovies(filteredList);
      setCheckbox(isShort);
      setInputValue(value);
    }
  },[])

  function SearchMovie(value, isShort) {
    setCheckbox(isShort);
    setInputValue(value);
    allMovies.length === 0 ? SearchMovieApi(value, isShort) : SearchMovieState(value, isShort);
  }

  function SearchMovieApi(value, isShort){
    api
      .getMovies()
      .then((data) => {
        setAllMovies(data);
        addLocalStorage(data, value, isShort)
      })
      .catch((error) => console.log(error))
  }

  function SearchMovieState(value, isShort){
    localStorage.clear();
    addLocalStorage(allMovies, value, isShort);
  }

  function addLocalStorage(data, value, isShort){
    const filteredList = filterData(data, value, isShort)
    setMovies(filteredList);
    localStorage.setItem(
      "userMovie",
      JSON.stringify({ value, filteredList, isShort })
    );
  }

  function filterData(data, value, isShort) {
    const ourList = data.filter(
      (movie) =>
        checkValue(movie.nameRU, value) ||
        checkValue(movie.nameEN, value)
    );
    function checkValue(obj, value) {
      return obj.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    }
    if (isShort) {
      return ourList.filter((movie) => movie.duration < 40);
    } 
    return ourList;
  }

  return (
    <main className="main">
      <div className="movies">
        <SearchForm newMovieFind={SearchMovie} checkbox={checkbox} inputValue={inputValue} /> 
          <MoviesCardList FilterMovie={movies} />
      </div>
    </main>
  );
}

export default Movies;
