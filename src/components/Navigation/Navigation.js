import { NavLink } from "react-router-dom";

function Navigation() {

  const setActive = ({ isActive }) => isActive ? "navigation__films-link navigation__films-link_active" : "navigation__films-link";

  return (
    <nav className="navigation">
      <NavLink
        to="/movies"
        className={setActive}
      >
        Фильмы
      </NavLink>
      <NavLink
        to="/saved-movies"
        className={setActive}
      >
        Сохраненные фильмы
      </NavLink>
    </nav>
  );
}

export default Navigation;
