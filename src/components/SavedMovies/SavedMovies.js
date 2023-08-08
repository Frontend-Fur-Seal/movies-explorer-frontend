import SearchForm from '../SearchForm/SearchForm.js';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';

function SavedMovies() {

    return (
    <div className='movies'>
    <SearchForm />
    <FilterCheckbox />
    <MoviesCardList />
    </div>
    );
  }
  
  export default SavedMovies;
