import CurrentMoviesContext from "../../contexts/CurrentMoviesContext.js";
import { useContext } from "react";

function MoviesCard(props) {
  const currentMovies = useContext(CurrentMoviesContext);
  const movie = props.movie;

  const isSaved = currentMovies.some((elem) => elem.movieId === movie.id);

  const MovieSaveButtonClassName = `moviesCard__saveMovie ${
    isSaved && "moviesCard__saveMovie_saved"
  }`;

  function movieTime(value) {
    return `${Math.trunc(value / 60)}ч ${value % 60}м`;
  }

  function handleMovieDelete() {
    props.handleMovieDelete(movie);
  }

  function handleMovieDeleteAllMovies(){
    props.handleMovieDeleteAllMovies(movie)
  }

  function handleMovieSave() {
    props.handleMovieSave(movie);
  }

  return (
    <li className="moviesCard">
      <div className="moviesCard__img">
        <a href={movie.trailerLink} rel="noreferrer" target="_blank">
          <img
            className="moviesCard__element"
            src={
              props.isAllMovies
                ? `https://api.nomoreparties.co${movie.image.url}`
                : movie.image
            }
            alt={movie.nameRU}
          />
        </a>
        {props.isAllMovies ? (
          <button
            onClick={isSaved ? handleMovieDeleteAllMovies : handleMovieSave}
            type="button"
            className={MovieSaveButtonClassName}
          >
            {isSaved ? "" : "Сохранить"}
          </button>
        ) : (
          <button
            onClick={handleMovieDelete}
            type="button"
            className="moviesCard__saveMovie_delete"
          ></button>
        )}
      </div>
      <div className="moviesCard__info">
        <h2 className="moviesCard__name">{movie.nameRU}</h2>
        <p className="moviesCard__duration">{movieTime(movie.duration)}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
