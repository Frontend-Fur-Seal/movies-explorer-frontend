import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
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

function App() {
  // Hooks

  const location = useLocation();
  const navigate = useNavigate();

  // States

  const [loggedIn, setLoggedIn] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [allMovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);

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
    mainApi
      .getMovies()
      .then((data) => {
        setSavedMovies(data);
        setFilterMovies(data);
      })
      .catch((error) => console.log(error));
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
      });
  };

  const handleRegister = (name, email, password) => {
    auth
      .register(name, email, password)
      .then(() => {
        navigate("/signin");
      })
      .catch((error) => {
        console.log(`Ошибка ${error}`);
      });
  };

  function onSignOut(){
    mainApi.SignOut()
    .then(() => {
      localStorage.removeItem("userMovie");
      setLoggedIn(false); 
      navigate('/')
    })
    .catch((err) => console.error(err));
  }

  function confirmUser() {
    setLoggedIn(true);
    navigate("/movies");
  }

  // Обновление данных юзера

  function handleUpdateUser({ name, email }) {
    mainApi
      .postInitialUser({ name, email })
      .then((res) => {
        setCurrentUser(res.data);
      })
      .catch((err) => console.error(err));
  }

  // Movies

  useEffect(()=> {
    const userSavedSearch = JSON.parse(localStorage.getItem("userMovie")) || [];
    if(userSavedSearch.length !== 0){
      const {filteredList} = userSavedSearch;
      setMovies(filteredList);
    }
  },[])

  function SearchMovie(movieRequest, isShort) {
    allMovies.length === 0 ? SearchMovieApi(movieRequest, isShort) : SearchMovieState(movieRequest, isShort);
  }

  function SearchMovieApi(movieRequest, isShort){
    api
      .getMovies()
      .then((data) => {
        setAllMovies(data);
        addLocalStorage(data, movieRequest, isShort)
      })
      .catch((error) => console.log(error))
  }

  function SearchMovieState(movieRequest, isShort){
    localStorage.removeItem("userMovie");
    addLocalStorage(allMovies, movieRequest, isShort);
  }

  function addLocalStorage(data, movieRequest, isShort){
    const filteredList = filterData(data, movieRequest, isShort)
    setMovies(filteredList);
    localStorage.setItem(
      "userMovie",
      JSON.stringify({ movieRequest, filteredList, isShort })
    );
  }

  // Save Movies

  function SearchSaveMovie(movieRequest, isShort) {
    const filteredList = filterData(savedMovies, movieRequest, isShort);
    setFilterMovies(filteredList);
  }

  function handleSaveMovie(movie){
    console.log(movie)
    mainApi
    .saveMovie(movie)
    .then((movie) => {
      setFilterMovies([movie, ...savedMovies])
    })
    .catch((error) => {
      console.log(`Ошибка ${error}`);
    });

  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        {showHeader() && <Header loggedIn={loggedIn} />}
        <Routes>
          <Route 
            path="/signin" 
            element={<Login handleLogin={handleLogin} />} />
          <Route
            path="/signup"
            element={<Register handleRegister={handleRegister} />}
          />
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<ProtectedRouteElement 
            element={Movies} 
            loggedIn={loggedIn}  
            SearchMovie={SearchMovie}
            movies={movies}
            handleSaveMovie={handleSaveMovie}
            />} />
          <Route path="/saved-movies" element={<ProtectedRouteElement 
            element={SavedMovies} 
            loggedIn={loggedIn}  
            SearchSaveMovie={SearchSaveMovie}
            savedMovies={savedMovies}
            filterMovies={filterMovies}
            />} />
            <Route path="/profile" element={<ProtectedRouteElement 
            element={Profile} 
            loggedIn={loggedIn}  
            onUpdateUser={handleUpdateUser}
            onSignOut={onSignOut}
            />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {showFooter() && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
