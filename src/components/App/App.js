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

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(null);
  const [currentUser, setCurrentUser] = useState({});

  // Отображение/скрытие Хедера в компонентах

  function showHeader() {
    const { pathname } = location;
    return (
      pathname === "/" ||
      pathname === "/movies" ||
      pathname === "/saved-movies" ||
      pathname === "/profile"
    );
  }

  // Отображение/скрытие Футера в компонентах

  function showFooter() {
    const { pathname } = location;
    return (
      pathname === "/" || pathname === "/movies" || pathname === "/saved-movies"
    );
  }
  //  Регистрация, авторизация, аутентификация

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

  function confirmUser() {
    setLoggedIn(true);
    navigate("/movies");
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
            />} />
          <Route path="/saved-movies" element={<ProtectedRouteElement 
            element={SavedMovies} 
            loggedIn={loggedIn}  
            />} />
            <Route path="/profile" element={<ProtectedRouteElement 
            element={Profile} 
            loggedIn={loggedIn}  
            />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {showFooter() && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
