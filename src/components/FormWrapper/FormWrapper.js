import HeaderLogo from "../HeaderLogo/HeaderLogo";
import { Link } from "react-router-dom";

function FormWrapper({
    children, 
    title,
    submit,
    text,
    link,
    changeLink
}) {

    return (
      <div className="formWrapper">
        <HeaderLogo />
        <h1 className="title__form">{title}</h1>
        {children}
        <button type="submit" className="submit__form">{submit}</button>
        <div className="form__change">
          <p className="form__change-text">{text}</p>
          <Link to={link} className="form__change-link">{changeLink}</Link>
        </div>
      </div>
    );
  }
  
  export default FormWrapper;
  