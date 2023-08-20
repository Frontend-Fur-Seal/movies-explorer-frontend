import { useEffect, useState } from "react";

import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import MoviesApi from "../../utils/MoviesApi";
import filterData from "../../utils/FilterMovie.js";

function Movies() {
  const api = new MoviesApi({
    baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const [allMovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(()=> {
    const userSavedSearch = JSON.parse(localStorage.getItem("userMovie")) || [];
    if(userSavedSearch.length !== 0){
      const {filteredList} = userSavedSearch;
      setMovies(filteredList);
    }
  },[])

  function SearchMovie(movieRequest, isShort) {
    allMovies.length === 0 ? SearchMovieApi(movieRequest, isShort) : SearchMovieState(movieRequest, isShort);
  }

  function SearchMovieApi(movieRequest, isShort){
    api
      .getMovies()
      .then((data) => {
        setAllMovies(data);
        addLocalStorage(data, movieRequest, isShort)
      })
      .catch((error) => console.log(error))
  }

  function SearchMovieState(movieRequest, isShort){
    localStorage.clear();
    addLocalStorage(allMovies, movieRequest, isShort);
  }

  function addLocalStorage(data, movieRequest, isShort){
    const filteredList = filterData(data, movieRequest, isShort)
    setMovies(filteredList);
    localStorage.setItem(
      "userMovie",
      JSON.stringify({ movieRequest, filteredList, isShort })
    );
  }

  return (
    <main className="main">
      <div className="movies">
        <SearchForm newMovieFind={SearchMovie} /> 
          <MoviesCardList FilterMovie={movies} />
      </div>
    </main>
  );
}

export default Movies;
