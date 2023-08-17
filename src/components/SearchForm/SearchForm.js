import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";
import React, { useState } from "react";

function SearchForm(props) {

  const [movieRequest, setmovieRequest] = useState("");

  function handleChangeMovie(e) {
    setmovieRequest(e.target.value);
  }

  function SearchMovies(e){
    e.preventDefault();
    props.newMovieFind(movieRequest);
  }

  return (
    <section className="searchMovie">
      <form className="searchForm">
        <input
          defaultValue={props.inputValue}
          required={true}
          type="text"
          className="searchForm__input"
          placeholder="Фильм"
          onChange={handleChangeMovie}
        />
        <button type="submit" className="searchForm__submit" onClick={SearchMovies}></button>
        <FilterCheckbox />
      </form>
    </section>
  );
}

export default SearchForm;
