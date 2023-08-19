import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";
import React, { useState, useEffect } from "react";

function SearchForm(props) {

  const [movieRequest, setmovieRequest] = useState("");
  const [isShort, setIsShort] = React.useState(false);

  useEffect(() => {
    if (movieRequest) {
      props.newMovieFind(movieRequest, isShort);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShort])

  useEffect(()=> {
    const userSavedSearch = JSON.parse(localStorage.getItem("userMovie")) || [];
    if(userSavedSearch.length !== 0){
      const {movieRequest, isShort} = userSavedSearch;
      setmovieRequest(movieRequest);
      setIsShort(isShort)
    }
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
          required={true}
          minLength={2}
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
