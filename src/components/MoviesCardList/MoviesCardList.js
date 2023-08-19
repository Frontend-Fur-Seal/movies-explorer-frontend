import { React, Suspense, lazy } from "react";
import Preloader from "../Preloader/Preloader.js";
const MoviesCard = lazy(() => import("../MoviesCard/MoviesCard.js"));

function MoviesCardList(props) {
  
  const filterMovies = props.FilterMovie;

  return (
    <Suspense fallback={<Preloader />}>
    <ul className="moviesCardList">
    {filterMovies.map((movie) => (
          <MoviesCard key={movie.id} movie={movie} />
        ))}
    </ul>
  </Suspense>
  );
}

export default MoviesCardList;
