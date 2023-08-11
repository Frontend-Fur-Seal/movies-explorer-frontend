import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js"

function SearchForm() {

    return (
      <section className="searchMovie">
      <form className="searchForm">
        <input type="text" className="searchForm__input" placeholder="Фильм" />
        <button type="submit" className="searchForm__submit"></button>
        <FilterCheckbox />
      </form>
      </section>
    );
  }
  
  export default SearchForm;