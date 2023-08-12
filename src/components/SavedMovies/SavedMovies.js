import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";

function SavedMovies() {
  return (
    <main className="main">
      <div className="movies">
        <SearchForm />
        <MoviesCardList />
      </div>
    </main>
  );
}

export default SavedMovies;
