import { useState } from "react";
import { useLocation } from "react-router-dom";

import UserGreeting from "../UserGreeting/UserGreeting";
import GuestGreeting from "../GuestGreeting/GuestGreeting";
import SideBar from "../SideBar/SideBar.js";
import Navigation from "../Navigation/Navigation.js";
import HeaderLogo from "../HeaderLogo/HeaderLogo";

function Header(props) {

  const location = useLocation();

  const [isActiveSidebar, setIsActiveSidebar] = useState(false);
  const [isLocation, setIsLocation] = useState(location);

  function changeLocation(){
    setIsActiveSidebar(!isActiveSidebar);
  }

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
          className={`header__icon ${isActiveSidebar ? "header__icon_opened" : ""}`}
          onClick={() => setIsActiveSidebar(!isActiveSidebar)}
        ></button>
      )}
      {isActiveSidebar && <SideBar changeLocation={changeLocation} />}
    </header>
  );
}

export default Header;
