import { Link } from "react-router-dom";

function GuestGreeting() {
    return (
      <nav>
        <ul className='header__unauthorized'>
          <li className="header__registration-button">
            <Link to="/signup" className="header__registration-link">Регистрация</Link>
         </li>
          <li className="header__auth-button">
            <Link to="/signin" className="header__auth-link">Войти</Link>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default GuestGreeting;