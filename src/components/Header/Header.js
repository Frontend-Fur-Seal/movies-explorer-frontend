import { useState } from "react";

import UserGreeting from "../UserGreeting/UserGreeting";
import GuestGreeting from "../GuestGreeting/GuestGreeting";
import SideBar from "../SideBar/SideBar.js";
import Navigation from '../Navigation/Navigation.js'
import HeaderLogo from "../HeaderLogo/HeaderLogo";

function Header() {

  const isAuth = true;

  const [toggle, setToggle] = useState(false)

    return (
      <header className="header">
        <HeaderLogo />
        {isAuth
        ? <Navigation />
        : ''
        }
        {isAuth
        ? <UserGreeting variable={'header__account-link'} />
        : <GuestGreeting />
        }
        {isAuth &&
        <button 
        type="button"
        className={`header__icon ${toggle  ? "header__icon_opened" : ""}`} 
        onClick={() => setToggle(!toggle)} >
        </button>
        }
        {
        toggle &&
        <SideBar />
        }
      </header>
    );
  }
  
  export default Header;