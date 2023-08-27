import { useContext } from "react";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import CurrentMoviesContext from "../../contexts/CurrentMoviesContext.js";
import NotFoundMovie from "../NotFoundMovie/NotFoundMovie.js";

function SavedMovies(props) {

  const currentMovies = useContext(CurrentMoviesContext); // state saved movies

  return (
    <main className="main">
      <div className="savedMovies">
        <SearchForm isAllMovies={false} newMovieFind={props.SearchSaveMovie}/>
        {currentMovies.length === 0 ? (
          <NotFoundMovie />
        ) : (
          <MoviesCardList isAllMovies={false} handleMovieDelete={props.handleMovieDelete}/>
        )}
      </div>
    </main>
  );
}

export default SavedMovies;
