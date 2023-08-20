import { NavLink } from "react-router-dom";
import UserGreeting from "../UserGreeting/UserGreeting";

function SideBar() {

  const setActive = ({ isActive }) => isActive ? "sideBar__link sideBar__link_active" : "sideBar__link";
  
  return (
    <section className="sideBar">
      <div className="sideBar__navigation">
        <nav className="sideBar__links">
          <NavLink
            to="/"
            className={setActive}
          >
            Главная
          </NavLink>
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
        <UserGreeting variable={"sideBar__account-link"} />
      </div>
    </section>
  );
}

export default SideBar;
