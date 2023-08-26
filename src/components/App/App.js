/* eslint-disable eqeqeq */
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import CurrentMoviesContext from "../../contexts/CurrentMoviesContext.js";
import * as auth from "../../utils/Auth.js";
import mainApi from "../../utils/MainApi.js";
import Main from "../Main/Main.js";
import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import Profile from "../Profile/Profile.js";
import NotFoundPage from "../NotFoundPage/NotFoundPage.js";
import Register from "../Register/Register.js";
import Login from "../Login/Login.js";
import ProtectedRouteElement from "../../utils/ProtectedRoute.js";
import MoviesApi from "../../utils/MoviesApi";
import filterData from "../../utils/FilterMovie.js";
import Infotooltip from "../Infotooltip/Infotooltip.js";

function App() {
  // Hooks

  const location = useLocation();
  const navigate = useNavigate();

  // States

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [allMovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [isInfotooltipOpenOk, setIsInfotooltipOpenOk] = useState(false);
  const [isInfotooltipOpenError, setIsInfotooltipOpenError] = useState(false);
  const [notFoundMovie, setNotFoundMovie] = useState(false);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const userSavedSearch = JSON.parse(localStorage.getItem("userMovie")) || [];
    if (userSavedSearch.length !== 0) {
      const { filteredList } = userSavedSearch;
      setMovies(filteredList);
    }
  }, []);

  // Api

  const api = new MoviesApi({
    baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
    headers: {
      "Content-Type": "application/json",
    },
  });

  // useEffects

  useEffect(() => {
    auth
      .checkToken()
      .then(() => {
        confirmUser();
      })
      .catch(() => {
        setLoggedIn(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getInitialUser()
        .then((data) => {
          setCurrentUser(data.data);
        })
        .catch((err) => console.error(err));
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getMovies()
        .then((data) => {
          setSavedMovies(data);
          setFilterMovies(data);
        })
        .catch((error) => console.log(error));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);

  // Show/hidden Header

  function showHeader() {
    const { pathname } = location;
    return (
      pathname === "/" ||
      pathname === "/movies" ||
      pathname === "/saved-movies" ||
      pathname === "/profile"
    );
  }

  // Show/hidden Footer

  function showFooter() {
    const { pathname } = location;
    return (
      pathname === "/" || pathname === "/movies" || pathname === "/saved-movies"
    );
  }
  //  Регистрация, авторизация, аутентификация

  const handleLogin = (email, password) => {
    auth
      .authorize(email, password)
      .then(() => {
        confirmUser();
      })
      .catch((error) => {
        console.log(`Ошибка ${error}`);
        handleInfotooltipOpenError();
      });
  };

  const handleRegister = (name, email, password) => {
    auth
      .register(name, email, password)
      .then(() => {
        handleLogin(email, password)
      })
      .catch((error) => {
        console.log(`Ошибка ${error}`);
        handleInfotooltipOpenError();
      });
  };

  function onSignOut() {
    mainApi
      .SignOut()
      .then(() => {
        localStorage.removeItem("userMovie");
        setLoggedIn(false);
        setMovies([]);
        navigate("/");
      })
      .catch((err) => console.error(err));
  }

  function confirmUser() {
    setLoggedIn(true);
    navigate("/movies");
  }

  // Обновление данных юзера

  function handleUpdateUser(name, email) {
    mainApi
      .postInitialUser({ name, email })
      .then((res) => {
        setCurrentUser(res.data);
        handleInfotooltipOpenOk();
      })
      .catch((err) => {
        handleInfotooltipOpenError();
        console.error(err);
      });
  }

  // Movies

  function SearchMovie(movieRequest, isShort) {
    allMovies.length === 0
      ? SearchMovieApi(movieRequest, isShort)
      : SearchMovieState(movieRequest, isShort);
  }

  function SearchMovieApi(movieRequest, isShort) {
    setLoading(true)
    api
      .getMovies()
      .then((data) => {
        setLoading(false)
        setAllMovies(data);
        addLocalStorage(data, movieRequest, isShort);
      })
      .catch((error) => console.log(error));
  }

  function SearchMovieState(movieRequest, isShort) {
    localStorage.removeItem("userMovie");
    addLocalStorage(allMovies, movieRequest, isShort);
  }

  function addLocalStorage(data, movieRequest, isShort) {
    const filteredList = filterData(data, movieRequest, isShort);
    if(filteredList.length === 0){
      setNotFoundMovie(true)
    }else{
      setNotFoundMovie(false)
      setMovies(filteredList);
      localStorage.setItem(
        "userMovie",
        JSON.stringify({ movieRequest, filteredList, isShort })
      );
    }
  }

  // Save Movies

  function SearchSaveMovie(movieRequest, isShort) {
    const filteredList = filterData(savedMovies, movieRequest, isShort);
    setFilterMovies(filteredList);
  }

  function handleMovieSave(movie) {
    mainApi
      .saveMovie({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        trailerLink: movie.trailerLink,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        thumbnail: `https://api.nomoreparties.co${movie.image.url}`,
        movieId: movie.id,
      })
      .then((movie) => {
        setSavedMovies([movie.data, ...savedMovies]);
        setFilterMovies([movie.data, ...filterMovies]);
      })
      .catch((error) => {
        console.log(`Ошибка ${error}`);
      });
  }

  function handleMovieDelete(movie) {
    mainApi.movieDelete(movie._id).then((movie) => {
      setFilterMovies((state) => state.filter((c) => c._id != movie._id));
      setSavedMovies((state) => state.filter((c) => c._id != movie._id));
    });
  }

  function handleMovieDeleteAllMovies(movie) {
    let currentMovie = filterMovies.find((elem) => elem.movieId === movie.id);
    mainApi.movieDelete(currentMovie._id).then((movie) => {
      console.log(movie);
      setFilterMovies((state) =>
        state.filter((c) => c._id != currentMovie._id)
      );
      setSavedMovies((state) => state.filter((c) => c._id != currentMovie._id));
    });
  }

  function handleInfotooltipOpenOk() {
    setIsInfotooltipOpenOk(!isInfotooltipOpenOk);
  }

  function handleInfotooltipOpenError() {
    setIsInfotooltipOpenError(!isInfotooltipOpenError);
  }

  function closeAllPopups() {
    setIsInfotooltipOpenOk(false);
    setIsInfotooltipOpenError(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentMoviesContext.Provider value={filterMovies}>
        <div className="App">
          {showHeader() && <Header loggedIn={loggedIn} />}
          <Routes>
            <Route
              path="/signin"
              element={<Login handleLogin={handleLogin} />}
            />
            <Route
              path="/signup"
              element={<Register handleRegister={handleRegister} />}
            />
            <Route path="/" element={<Main />} />
            <Route
              path="/movies"
              element={
                <ProtectedRouteElement
                  element={Movies}
                  loggedIn={loggedIn}
                  SearchMovie={SearchMovie}
                  movies={movies}
                  loading={loading}
                  handleMovieSave={handleMovieSave}
                  handleMovieDeleteAllMovies={handleMovieDeleteAllMovies}
                  notFoundMovie={notFoundMovie}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRouteElement
                  element={SavedMovies}
                  loggedIn={loggedIn}
                  SearchSaveMovie={SearchSaveMovie}
                  handleMovieDelete={handleMovieDelete}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRouteElement
                  element={Profile}
                  loggedIn={loggedIn}
                  onUpdateUser={handleUpdateUser}
                  onSignOut={onSignOut}
                />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          {showFooter() && <Footer />}
          <Infotooltip
            name={"infotool"}
            isOpen={isInfotooltipOpenOk}
            onClose={closeAllPopups}
            resOk={true}
          />
          <Infotooltip
            name={"infotool"}
            isOpen={isInfotooltipOpenError}
            onClose={closeAllPopups}
            resOk={false}
          />
        </div>
      </CurrentMoviesContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
