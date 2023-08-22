import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";

function Movies(props) {

  return (
    <main className="main">
      <div className="movies">
        <SearchForm newMovieFind={props.SearchMovie} Movies={true}/> 
          <MoviesCardList FilterMovie={props.movies} handleSaveMovie={props.handleSaveMovie} Movies={true}/>
      </div>
    </main>
  );
}

export default Movies;
