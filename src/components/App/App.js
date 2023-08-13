import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js'
import Footer from '../Footer/Footer.js'
import Header from '../Header/Header.js';
import Profile from '../Profile/Profile.js'
import NotFoundPage from '../NotFoundPage/NotFoundPage.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';

function App () {

  let location = useLocation();

  function showHeader(){
    const { pathname } = location;
    return (
      pathname === '/' ||
      pathname === '/movies' ||
      pathname === '/saved-movies' ||
      pathname === '/profile'
    )
  }

  function showFooter(){
    const { pathname } = location;
    return (
      pathname === '/' ||
      pathname === '/movies' ||
      pathname === '/saved-movies' 
    )
  }


  return (
    <div className="App">
      {
        showHeader() &&
        <Header />
      }
        <Routes>
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {
        showFooter() &&
        <Footer />
      }
    </div>
  );
}

export default App;
