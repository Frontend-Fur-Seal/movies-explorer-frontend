import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";
import { useState, useEffect, useContext } from "react";
import CurrentMoviesContext from "../../contexts/CurrentMoviesContext.js";

function SearchForm(props) {

  const currentMovies = useContext(CurrentMoviesContext);

  const [movieRequest, setmovieRequest] = useState("");
  const [isShort, setIsShort] = useState(false);

  useEffect(() => {
      if (movieRequest || (!props.isAllMovies && currentMovies.length !==0)) {
        props.newMovieFind(movieRequest, isShort);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShort]);

  useEffect(() => {
    if (props.isAllMovies) {
      const userSavedSearch =
        JSON.parse(localStorage.getItem("userMovie")) || [];
      if (userSavedSearch.length !== 0) {
        const { movieRequest, isShort } = userSavedSearch;
        setmovieRequest(movieRequest);
        setIsShort(isShort);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleChangeMovie(e) {
    setmovieRequest(e.target.value);
  }

  function SearchMovies(e) {
    e.preventDefault();
    props.newMovieFind(movieRequest, isShort);
  }

  function changeMoviesLength() {
    setIsShort(!isShort);
  }

  return (
    <section className="searchMovie">
      <form className="searchForm" onSubmit={SearchMovies}>
        <input
          required={props.isAllMovies}
          minLength={1}
          value={movieRequest}
          type="text"
          className="searchForm__input"
          placeholder="Фильм"
          onChange={handleChangeMovie}
        />
        <button type="submit" className="searchForm__submit"></button>
        <FilterCheckbox
          changeMoviesLength={changeMoviesLength}
          isShort={isShort}
        />
      </form>
    </section>
  );
}

export default SearchForm;
