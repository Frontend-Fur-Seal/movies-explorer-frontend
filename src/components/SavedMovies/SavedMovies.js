import { useContext } from "react";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import CurrentMoviesContext from "../../contexts/CurrentMoviesContext.js";

function SavedMovies(props) {

  const currentMovies = useContext(CurrentMoviesContext); // state saved movies

  return (
    <main className="main">
      <div className="savedMovies">
        <SearchForm isAllMovies={false} newMovieFind={props.SearchSaveMovie}/>
        {currentMovies.length === 0 ? (
          <p className="savedMovies__notSave">Вы пока ничего не сохранили</p>
        ) : (
          <MoviesCardList isAllMovies={false} handleMovieDelete={props.handleMovieDelete}/>
        )}
      </div>
    </main>
  );
}

export default SavedMovies;
