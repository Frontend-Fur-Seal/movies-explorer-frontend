import { Link } from "react-router-dom";

function GuestGreeting() {
    return (
      <nav className='header__unauthorized'>
        <button type="button" className="header__registration-button"><Link to="/signup" className="header__registration-link">Регистрация</Link></button>
        <button type="button" className="header__auth-button"><Link to="/signin" className="header__auth-link">Войти</Link></button>
      </nav>
    );
  }
  
  export default GuestGreeting;