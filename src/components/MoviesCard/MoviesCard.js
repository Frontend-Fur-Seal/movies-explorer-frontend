import { useState } from "react";

function MoviesCard(props) {
  const [movieSaveState, setmovieSaveState] = useState(false);
  const isSaved = movieSaveState ? "" : "Сохранить";

  const movie = props.movie;

  function movieTime(value) {
    return `${Math.trunc(value / 60)}ч ${value % 60}м`;
  }

  const {
    id,
    country,
    director,
    duration,
    year,
    description,
    trailerLink,
    nameRU,
    nameEN,
    image,
  } = movie;

  const movieSave = {
    country,
    director,
    duration,
    year,
    description,
    trailerLink,
    nameRU,
    nameEN,
    image: `https://api.nomoreparties.co${image.url}`,
    thumbnail: `https://api.nomoreparties.co${image.url}`,
    movieId: id,
  };

  function handleChangeSaveMovie() {
    props.handleChangeSaveMovie(movieSave);
  }

  return (
    <li className="moviesCard">
      <div className="moviesCard__img">
        <a href={movie.trailerLink} rel="noreferrer" target="_blank">
          <img
            className="moviesCard__element"
            src={
              props.Movies
                ? `https://api.nomoreparties.co${movie.image.url}`
                : image
            }
            alt={movie.nameRU}
          />
        </a>
          <button
            onClick={handleChangeSaveMovie}
            type="button"
            className={`${
              movieSaveState
                ? "moviesCard__saveMovie_saved"
                : "moviesCard__saveMovie"
            }`}
          >
            {isSaved}
          </button>
      </div>
      <div className="moviesCard__info">
        <h2 className="moviesCard__name">{movie.nameRU}</h2>
        <p className="moviesCard__duration">{movieTime(movie.duration)}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
