import { useState } from "react";

import UserGreeting from "../UserGreeting/UserGreeting";
import GuestGreeting from "../GuestGreeting/GuestGreeting";
import SideBar from "../SideBar/SideBar.js";
import Navigation from "../Navigation/Navigation.js";
import HeaderLogo from "../HeaderLogo/HeaderLogo";

function Header(props) {

  const [toggle, setToggle] = useState(false);

  return (
    <header className="header">
      <HeaderLogo />
      {props.loggedIn ? <Navigation /> : ""}
      {props.loggedIn ? (
        <UserGreeting variable={"header__account-link"} />
      ) : (
        <GuestGreeting />
      )}
      {props.loggedIn && (
        <button
          type="button"
          className={`header__icon ${toggle ? "header__icon_opened" : ""}`}
          onClick={() => setToggle(!toggle)}
        ></button>
      )}
      {toggle && <SideBar />}
    </header>
  );
}

export default Header;
