import { Link } from "react-router-dom";

function UserGreeting(props) {
    return (
        <button type="button" className={props.variable}><Link to="/profile" className="header__account-link">Аккаунт</Link></button>
    );
  }
  
  export default UserGreeting;