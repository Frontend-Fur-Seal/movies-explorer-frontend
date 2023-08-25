import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import NotFoundMovie from "../NotFoundMovie/NotFoundMovie.js";

function Movies(props) {
  return (
    <main className="main">
      <div className="movies">
        <SearchForm isAllMovies={true} newMovieFind={props.SearchMovie} />
        {props.movies.length === 0 ? (
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
