import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import NotFoundMovie from "../NotFoundMovie/NotFoundMovie.js";
import Preloader from "../Preloader/Preloader.js";

function Movies(props) {
  return (
    <main className="main">
      <div className="movies">
        <SearchForm isAllMovies={true} newMovieFind={props.SearchMovie} />
        {props.loading ? (
          <Preloader />
        ) : props.notFoundMovie ? (
          <NotFoundMovie />
        ) : (
          <MoviesCardList
            movies={props.movies}
            handleMovieSave={props.handleMovieSave}
            handleMovieDeleteAllMovies={props.handleMovieDeleteAllMovies}
            isAllMovies={true}
          />
        )}
      </div>
    </main>
  );
}

export default Movies;
