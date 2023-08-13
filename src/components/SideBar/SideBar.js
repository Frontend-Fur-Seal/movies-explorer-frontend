import { NavLink } from "react-router-dom";
import UserGreeting from "../UserGreeting/UserGreeting";

function SideBar() {
  return (
    <section className="sideBar">
      <div className="sideBar__navigation">
        <nav className="sideBar__links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "sideBar__link sideBar__link_active" : "sideBar__link"
            }
          >
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive ? "sideBar__link sideBar__link_active" : "sideBar__link"
            }
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) =>
              isActive ? "sideBar__link sideBar__link_active" : "sideBar__link"
            }
          >
            Сохраненные фильмы
          </NavLink>
        </nav>
        <UserGreeting variable={"sideBar__account-link"} />
      </div>
    </section>
  );
}

export default SideBar;
