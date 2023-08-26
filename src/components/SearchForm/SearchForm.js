import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";
import { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";

function SearchForm(props) {
  const [movieRequest, setmovieRequest] = useState("");
  const [isShort, setIsShort] = useState(false);

  useEffect(() => {
    if (props.isAllMovies) {
      const userSavedSearch =
        JSON.parse(localStorage.getItem("userMovie")) || [];
      if (userSavedSearch.length !== 0) {
        const { movieRequest, isShort } = userSavedSearch;
        setmovieRequest(movieRequest);
        setIsShort(isShort);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (movieRequest) {
      props.newMovieFind(movieRequest, isShort);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShort]);

  function changeMoviesLength() {
    setIsShort(!isShort);
  }

  function validateSearch(value){
    let error;
    if (!value) {
      error = "Нужно ввести ключевое слово";
    } 
    return error;
  }

  function handleChange(e){
    setmovieRequest(e.target.value)
  }

  return (
    <section className="searchMovie">
      <Formik
        initialValues={{
          search: movieRequest,
        }}
        enableReinitialize={true}
        onSubmit={(values) => {
          props.newMovieFind(values.search, isShort);
        }}
      >
        {({ errors, touched, isValid }) => (
          <Form className="searchForm">
            <Field
              validate={validateSearch}
              name="search"
              type="text"
              className="searchForm__input"
              placeholder="Фильм"
              onChange={handleChange}          
            />
            <button type="submit" className="searchForm__submit"></button>
            <p className="searchForm__error">{errors.search}</p>
            <FilterCheckbox
              changeMoviesLength={changeMoviesLength}
              isShort={isShort}
              movieRequest={movieRequest}
            />
          </Form>
        )}
      </Formik>
    </section>
  );
}

export default SearchForm;
