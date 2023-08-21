import { Link } from "react-router-dom";

function UserGreeting(props) {
    return (
        <Link to="/profile" className={props.variable} onClick={props.changeLocation}>Аккаунт</Link>
    );
  }
  
  export default UserGreeting;