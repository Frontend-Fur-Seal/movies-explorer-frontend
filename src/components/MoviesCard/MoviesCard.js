function MoviesCard(props) {
 
  const movieSaveState = false;
  const isSaved = movieSaveState ? '' : 'Сохранить';
  
  return (
    <article className="moviesCard">
      <div className="moviesCard__img">
        <img
          className="moviesCard__element"
          src={props.card.link}
          alt={props.card.name}
        />
        <button type="button" className={`${movieSaveState  ? "moviesCard__saveMovie_saved" : "moviesCard__saveMovie"}`}>{isSaved}</button>
      </div>
      <div className="moviesCard__info">
        <h2 className="moviesCard__name">{props.card.name}</h2>
        <p className="moviesCard__duration">{props.card.duration}</p>
      </div>
    </article>
  );
}

export default MoviesCard;
