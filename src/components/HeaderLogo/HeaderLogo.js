import { Link } from "react-router-dom";
import logo from "../../images/logo.svg"

function HeaderLogo() {

    return (
          <Link to="/" className="headerLogo"><img src={logo} alt="Логотип" className="headerLogoImg" /></Link>
    );
  }
  
  export default HeaderLogo;