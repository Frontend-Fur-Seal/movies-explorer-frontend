import { Link } from "react-router-dom";
import UserGreeting from "../UserGreeting/UserGreeting";

function SideBar() {
    return (
        <section className="sideBar">
          <div className="sideBar__navigation">
          <nav className="sideBar__links">
            <Link to="/" className="sideBar__link">Главная</Link>
            <Link to="/movies" className="sideBar__link">Фильмы</Link>
            <Link to="/saved-movies" className="sideBar__link">Сохраненные фильмы</Link>
          </nav>
          <UserGreeting variable={'header__account-link_sideBar'}/>
          </div>
        </section>
    );
  }
  
  export default SideBar;