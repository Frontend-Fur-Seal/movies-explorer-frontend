import {
  LG_ROW_CARD_COUNT,
  MD_ROW_CARD_COUNT,
  SM_ROW_CARD_COUNT,
  LG_INITIAL_CARD_COUNT,
  MD_INITIAL_CARD_COUNT,
  SM_INITIAL_CARD_COUNT,
} from "../../utils/constants.js";

import { React, Suspense, lazy, useState, useContext } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery.js";
import Preloader from "../Preloader/Preloader.js";
import LoadMoreMovie from "../LoadMoreMovie/LoadMoreMovie.js";
import CurrentMoviesContext from "../../contexts/CurrentMoviesContext.js";
const MoviesCard = lazy(() => import("../MoviesCard/MoviesCard.js"));

function MoviesCardList(props) {

  const movies = props.movies; //state movies

  const currentMovies = useContext(CurrentMoviesContext); // state saved movies

  const isDesktop = useMediaQuery("(min-width: 980px)");
  const isTablet = useMediaQuery("(min-width: 600px)");

  const cardColumnCount = isDesktop
    ? LG_ROW_CARD_COUNT
    : isTablet
    ? MD_ROW_CARD_COUNT
    : SM_ROW_CARD_COUNT;

  const initialCardCount = isDesktop
    ? LG_INITIAL_CARD_COUNT
    : isTablet
    ? MD_INITIAL_CARD_COUNT
    : SM_INITIAL_CARD_COUNT;

  const [visibleCardCount, setVisibleCardCount] = useState(initialCardCount);

  const roundedVisibleCardCount =
    (visibleCardCount / cardColumnCount) * cardColumnCount;

  const handleClick = () => {
    calculateCardCount();
  };

  const calculateCardCount = () => {
    if (isDesktop) {
      return setVisibleCardCount(visibleCardCount + LG_ROW_CARD_COUNT);
    }

    if (isTablet) {
      return setVisibleCardCount(visibleCardCount + MD_ROW_CARD_COUNT);
    }

    setVisibleCardCount(visibleCardCount + SM_ROW_CARD_COUNT);
  };

  return (
    <>
      <Suspense fallback={<Preloader />}>
        {props.isAllMovies ? (
          <ul className="moviesCardList">
            {movies?.slice(0, roundedVisibleCardCount).map((movie) => (
              <MoviesCard
                isAllMovies={props.isAllMovies}
                key={movie.id}
                movie={movie}
                handleMovieSave={props.handleMovieSave}
              />
            ))}
          </ul>
        ) : (
          <ul className="moviesCardList">
            {currentMovies.map((movie) => (
              <MoviesCard
                isAllMovies={props.isAllMovies}
                key={movie.movieId}
                movie={movie}
                handleMovieDelete={props.handleMovieDelete}
              />
            ))}
          </ul>
        )}
      </Suspense>
      {props.isAllMovies && visibleCardCount < movies.length ? (
        <LoadMoreMovie handleClick={handleClick} isShow={true} />
      ) : (
        <LoadMoreMovie handleClick={handleClick} isShow={false} />
      )}
    </>
  );
}

export default MoviesCardList;
