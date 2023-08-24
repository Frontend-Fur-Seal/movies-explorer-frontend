import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";

function Movies(props) {
  return (
    <main className="main">
      <div className="movies">
        <SearchForm
          isAllMovies={true}
          newMovieFind={props.SearchMovie}
        />
        <MoviesCardList
          movies={props.movies}
          handleMovieSave={props.handleMovieSave}
          handleMovieDeleteAllMovies={props.handleMovieDeleteAllMovies}
          isAllMovies={true}
        />
      </div>
    </main>
  );
}

export default Movies;
