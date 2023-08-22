import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";

function SavedMovies(props) {

  return (
    <main className="main">
      <div className="savedMovies">
        <SearchForm newMovieFind={props.SearchSaveMovie} Movies={false}/>
        {props.savedMovies.length === 0 ? (
          <p className="savedMovies__notSave">Вы пока ничего не сохранили</p>
        ) : (
          <MoviesCardList FilterMovie={props.filterMovies} Movies={false}/>
        )}
      </div>
    </main>
  );
}

export default SavedMovies;
