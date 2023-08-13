import { useState } from "react";
import { Link } from "react-router-dom";

function Profile() {
  const [disableInput, setDisableInput] = useState(true);

  function editUser(e) {
    e.preventDefault();
    setDisableInput(!disableInput);
  }

  return (
    <main className="main">
      <section className="profile">
        <h1 className="profile__title">Привет, Владимир</h1>
        <form className="profile__form">
          <div className="profile__inputs">
            <div className="profile__name">
              <label htmlFor="inputChange-name" className="profile__label">
                Имя
              </label>
              <input
                placeholder="Имя"
                value={"Владимир"}
                id="inputChange-name"
                minLength={2}
                maxLength={20}
                type="text"
                className="profile__input"
                disabled={disableInput}
                ref={input => input && input.focus()}
              />
            </div>
            <div className="profile__email">
              <label htmlFor="inputChange-email" className="profile__label">
                Email
              </label>
              <input
                placeholder="Email"
                value={"test@test.ru"}
                id="inputChange-email"
                minLength={2}
                maxLength={20}
                type="email"
                className="profile__input"
                disabled={disableInput}
              />
            </div>
          </div>
          {disableInput ? (
            <button
              type="button"
              className="profile__change"
              onClick={editUser}
            >
              Редактировать
            </button>
          ) : (
            <button
              type="submit"
              className="profile__change"
              onClick={editUser}
            >
              Сохранить
            </button>
          )}
        </form>
        <Link to="/" className="profile__signOut">
          Выйти из аккаунта
        </Link>
      </section>
    </main>
  );
}

export default Profile;
