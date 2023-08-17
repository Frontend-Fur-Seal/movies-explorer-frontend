function MoviesCard(props) {
 
  const movieSaveState = false;
  const isSaved = movieSaveState ? '' : 'Сохранить';

  const movieImg = props.movie.image.url;

  function movieTime(value){
    return `${Math.trunc(value/60)}ч ${value%60}м`

  }
  
  return (
    <li className="moviesCard">
      <div className="moviesCard__img">
        <img
          className="moviesCard__element"
          src={`https://api.nomoreparties.co${movieImg}`}
          alt={props.movie.nameRU}
        />
        <button type="button" className={`${movieSaveState  ? "moviesCard__saveMovie_saved" : "moviesCard__saveMovie"}`}>{isSaved}</button>
      </div>
      <div className="moviesCard__info">
        <h2 className="moviesCard__name">{props.movie.nameRU}</h2>
        <p className="moviesCard__duration">{movieTime(props.movie.duration)}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
