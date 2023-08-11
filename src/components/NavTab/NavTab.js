import { Link } from "react-scroll";

function NavTab() {

  return (
    <nav className="navTab">
      <ul className="navTab__links">
        <li className="navTab__link">
          <Link
          className="navTab__link-id"
          to="aboutProject"
          smooth={true}
          offset={-70}
          duration={500}
          >О проекте</Link>  
        </li>
        <li className="navTab__link">
          <Link
          className="navTab__link-id"
          to="technology"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          >Технологии</Link> 
        </li>
        <li className="navTab__link">
          <Link
          className="navTab__link-id"
          to="student"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          >Студент</Link> 
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;