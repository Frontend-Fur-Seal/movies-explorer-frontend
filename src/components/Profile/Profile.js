import { useState, useContext, useEffect } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";

function Profile(props) {
  const [name, setNewName] = useState("");
  const [description, setNewDescription] = useState("");

  const currentUser = useContext(CurrentUserContext);

  function handleChangeName(e) {
    setNewName(e.target.value);
  }

  function handleChangeDescription(e) {
    setNewDescription(e.target.value);
  }

  useEffect(() => {
    setNewName(currentUser.name);
    setNewDescription(currentUser.email);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      email: description,
    });
  }

  return (
    <main className="main">
      <section className="profile">
        <h1 className="profile__title">Привет, {currentUser.name}</h1>
        <form className="profile__form" onSubmit={handleSubmit}>
          <div className="profile__inputs">
            <div className="profile__name">
              <label htmlFor="inputChange-name" className="profile__label">
                Имя
              </label>
              <input
                placeholder="Имя"
                value={name || ""}
                id="inputChange-name"
                minLength={2}
                maxLength={20}
                type="text"
                className="profile__input"
                onChange={handleChangeName}
              />
            </div>
            <div className="profile__email">
              <label htmlFor="inputChange-email" className="profile__label">
                Email
              </label>
              <input
                placeholder="Email"
                value={description || ""}
                id="inputChange-email"
                minLength={2}
                maxLength={20}
                type="email"
                className="profile__input"
                onChange={handleChangeDescription}
              />
            </div>
          </div>
            <button type="submit" 
            className="profile__change"
            >
              Редактировать
            </button>
          
        </form>
        <button className="profile__signOut" onClick={props.onSignOut}>
          Выйти из аккаунта
        </button>
      </section>
    </main>
  );
}

export default Profile;
