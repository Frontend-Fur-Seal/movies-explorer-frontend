import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink
        to="/movies"
        className={({ isActive }) =>
          isActive
            ? "navigation__films-link navigation__films-link_active"
            : "navigation__films-link"
        }
      >
        Фильмы
      </NavLink>
      <NavLink
        to="/saved-movies"
        className={({ isActive }) =>
          isActive
            ? "navigation__films-link navigation__films-link_active"
            : "navigation__films-link"
        }
      >
        Сохраненные фильмы
      </NavLink>
    </nav>
  );
}

export default Navigation;
