function MoviesCard(props) {

  const movie = props.movie;

  const savedMovie = props.movie;

  //const isSaved = movie.id === savedMovie.movieId;

  const isSaved = false;

  const MovieSaveButtonClassName = `moviesCard__saveMovie ${
    isSaved && "moviesCard__saveMovie_saved"
  }`;

  function movieTime(value) {
    return `${Math.trunc(value / 60)}ч ${value % 60}м`;
  }

  const movieSave = {
    country: movie.country,
    director: movie.director,
    duration: movie.duration,
    year: movie.year,
    description: movie.description,
    trailerLink: movie.trailerLink,
    nameRU: movie.nameRU,
    nameEN: movie.nameEN,
    image: `https://shapka-youtube.ru/wp-content/uploads/2021/03/kartinka-na-avatarku-dlya-devushek.jpg`,
    thumbnail: `https://shapka-youtube.ru/wp-content/uploads/2021/03/kartinka-na-avatarku-dlya-devushek.jpg`,
    movieId: movie.id,
  };

  function handleMovieDelete() {
    props.handleMovieDelete(movieSave);
  }

  function handleMovieSave() {
    props.handleMovieSave(movie);
  }

  return (
    <li className="moviesCard">
      <div className="moviesCard__img">
        <a
          href={movie.trailerLink}
          rel="noreferrer"
          target="_blank"
        >
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
        <button
          onClick={isSaved ? handleMovieDelete : handleMovieSave}
          type="button"
          className={MovieSaveButtonClassName}
        >
          {isSaved ? "" : "Сохранить"}
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
