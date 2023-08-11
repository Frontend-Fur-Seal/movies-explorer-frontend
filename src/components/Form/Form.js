import HeaderLogo from "../HeaderLogo/HeaderLogo";
import { Link } from "react-router-dom";

function FormWrapper({
    children, 
    title,
    submit,
    text,
    link,
    changeLink,
    formTypeSubmit
}) {

    return (
      <section className="form">
        <HeaderLogo />
        <h2 className="form__title">{title}</h2>
        {children}
        <button type="submit" className={formTypeSubmit}>{submit}</button>
        <div className="form__change">
          <p className="form__change-text">{text}</p>
          <Link to={link} className="form__change-link">{changeLink}</Link>
        </div>
      </section>
    );
  }
  
  export default FormWrapper;
  