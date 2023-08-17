import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  
  const filterMovies = props.FilterMovie;

  console.log(filterMovies);

  return (
    <ul className="moviesCardList">
      {filterMovies.map((movie) => (
        <MoviesCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}

export default MoviesCardList;
