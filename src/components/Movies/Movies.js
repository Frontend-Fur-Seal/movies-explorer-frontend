import SearchForm from '../SearchForm/SearchForm.js';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import LoadMoreMovie from '../LoadMoreMovie/LoadMoreMovie.js'

function Movies() {

    return (
    <div className='movies'>
    <SearchForm />
    <FilterCheckbox />
    <MoviesCardList />
    <LoadMoreMovie />
    </div>
    );
  }
  
  export default Movies;
