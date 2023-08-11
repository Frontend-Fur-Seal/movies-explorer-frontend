import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import LoadMoreMovie from '../LoadMoreMovie/LoadMoreMovie.js'

function Movies() {

    return (
    <div className='movies'>
    <SearchForm />
    <MoviesCardList />
    <LoadMoreMovie />
    </div>
    );
  }
  
  export default Movies;
