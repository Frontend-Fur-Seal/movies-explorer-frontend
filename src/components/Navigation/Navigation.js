import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav className='navigation'>
          <Link to="/movies" className="header__films-link">Фильмы</Link>
          <Link to="/saved-movies" className="header__films-link">Сохраненные фильмы</Link>
        </nav>
    );
  }
  
  export default Navigation;