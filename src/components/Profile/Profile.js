import { useContext } from "react";
import { Formik, Form, Field } from "formik";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";

function Profile({ onUpdateUser, onSignOut }) {
  const currentUser = useContext(CurrentUserContext);

  function validateName(value) {
    let error;
    if (!value) {
      error = "Поле обязательно к заполнению";
    } else if (value.length < 2) {
      error = "Слишком короткое имя";
    } else if (value.length > 30) {
      error = "Имя слишком длинное";
    }
    return error;
  }

  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Поле обязательно к заполнению";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Некорректный email";
    }
    return error;
  }

  return (
    <main className="main">
      <section className="profile">
        <h1 className="profile__title">Привет, {currentUser.name}</h1>
        <Formik
          initialValues={{
            name: currentUser.name,
            email: currentUser.email,
          }}
          onSubmit={(values) => {
            onUpdateUser(values.name, values.email);
          }}
        >
          {({ errors, touched, isValid, dirty }) => (
            <Form className="profile__form">
              <div className="profile__inputs">
                <div className="profile__name">
                  <label htmlFor="inputChange-name" className="profile__label">
                    Имя
                  </label>
                  <Field
                    name="name"
                    validate={validateName}
                    placeholder="Имя"
                    id="inputChange-name"
                    type="text"
                    className="profile__input"
                  />
                </div>
                <p className="form__error form__error_ProfileName">{errors.name}</p>
                <div className="profile__email">
                  <label htmlFor="inputChange-email" className="profile__label">
                    Email
                  </label>
                  <Field
                    name="email"
                    validate={validateEmail}
                    placeholder="Email"
                    id="inputChange-email"
                    type="email"
                    className="profile__input"
                  />
                </div>
                <p className="form__error">{errors.email}</p>
              </div>
              <button
                type="submit"
                className="profile__change"
                disabled={!(isValid && dirty)}
              >
                Редактировать
              </button>
            </Form>
          )}
        </Formik>
        <button className="profile__signOut" onClick={onSignOut}>
          Выйти из аккаунта
        </button>
      </section>
    </main>
  );
}

export default Profile;
