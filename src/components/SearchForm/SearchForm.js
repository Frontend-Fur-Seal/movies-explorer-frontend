import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";
import React, { useState, useEffect } from "react";

function SearchForm(props) {

  const [movieRequest, setmovieRequest] = useState("");
  const [isShort, setIsShort] = React.useState(false);

  useEffect(() => {
    props.newMovieFind(movieRequest, isShort);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShort])

  useEffect(()=> {
    if(props.Movies){
    const userSavedSearch = JSON.parse(localStorage.getItem("userMovie")) || [];
    if(userSavedSearch.length !== 0){
      const {movieRequest, isShort} = userSavedSearch;
      setmovieRequest(movieRequest);
      setIsShort(isShort)
    }
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  function handleChangeMovie(e) {
    setmovieRequest(e.target.value);
  }

  function SearchMovies(e){
    e.preventDefault();
    props.newMovieFind(movieRequest, isShort);
  }

  function changeMoviesLength(){
    setIsShort(!isShort)
  }

  return (
    <section className="searchMovie">
      <form className="searchForm" onSubmit={SearchMovies}>
        <input
          required={props.Movies}
          minLength={1}
          value={movieRequest}
          type="text"
          className="searchForm__input"
          placeholder="Фильм"
          onChange={handleChangeMovie}
        />
        <button type="submit" className="searchForm__submit"></button>
        <FilterCheckbox changeMoviesLength={changeMoviesLength} isShort={isShort}/>
      </form>
    </section>
  );
}

export default SearchForm;
