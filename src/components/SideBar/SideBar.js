import { NavLink } from "react-router-dom";
import UserGreeting from "../UserGreeting/UserGreeting";

function SideBar({ changeLocation }) {

  const setActive = ({ isActive }) => isActive ? "sideBar__link sideBar__link_active" : "sideBar__link";
  
  return (
    <section className="sideBar">
      <div className="sideBar__navigation">
        <nav className="sideBar__links">
          <NavLink
            to="/"
            className={setActive}
            onClick={changeLocation}
          >
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            className={setActive}
            onClick={changeLocation}
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={setActive}
            onClick={changeLocation}
          >
            Сохраненные фильмы
          </NavLink>
        </nav>
        <UserGreeting variable={"sideBar__account-link"} changeLocation={changeLocation}/>
      </div>
    </section>
  );
}

export default SideBar;
