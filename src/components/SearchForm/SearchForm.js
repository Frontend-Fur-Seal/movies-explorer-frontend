import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js"

function SearchForm() {

    return (
      <form className="searchForm">
        <input className="searchForm__input" placeholder="Фильм"></input>
        <button type="submit" className="searchForm__submit"></button>
        <FilterCheckbox />
      </form>
    );
  }
  
  export default SearchForm;