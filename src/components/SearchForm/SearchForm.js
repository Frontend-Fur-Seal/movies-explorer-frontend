import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js"

function SearchForm() {

    return (
      <section className="searchMovie">
      <form className="searchForm">
        <input className="searchForm__input" placeholder="Фильм"></input>
        <button type="submit" className="searchForm__submit"></button>
        <FilterCheckbox />
      </form>
      </section>
    );
  }
  
  export default SearchForm;