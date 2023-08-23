import FormData from "../FormData/FormData.js";
import { Formik, Form, Field } from "formik";

function Register({ handleRegister }) {
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

  function validatePassword(value) {
    let error;
    if (!value) {
      error = "Поле обязательно к заполнению";
    } else if (value.length < 2) {
      error = "Слишком короткий пароль";
    } else if (value.length > 30) {
      error = "Пароль слишком длинный";
    }
    return error;
  }

  return (
    <main className="main">
      <FormData
        title={"Добро пожаловать!"}
        text={"Уже зарегистрированы?"}
        changeLink={"Войти"}
        link={"/signin"}
      >
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            handleRegister(values.name, values.email, values.password);
          }}
        >
          {({ errors, touched, isValid }) => (
            <Form className="register">
              <label htmlFor="registerInput-name" className="form__label">
                Имя
              </label>
              <Field
                validate={validateName}
                placeholder="Имя"
                id="registerInput-name"
                type="text"
                className="form__input"
                name="name"
              />
              {errors.name && touched.name && (
                <p className="form__error">{errors.name}</p>
              )}
              <label htmlFor="registerInput-email" className="form__label">
                E-mail
              </label>
              <Field
                validate={validateEmail}
                placeholder="E-mail"
                id="registerInput-email"
                type="email"
                className="form__input"
                name="email"
                autoComplete="on"
              />
              {errors.email && touched.email && (
                <p className="form__error">{errors.email}</p>
              )}
              <label htmlFor="registerInput-password" className="form__label">
                Пароль
              </label>
              <Field
                validate={validatePassword}
                placeholder="Пароль"
                id="registerInput-password"
                type="password"
                className="form__input"
                name="password"
              />
              {errors.password && touched.password && (
                <p className="form__error">{errors.password}</p>
              )}
              <button
                type="submit"
                disabled={
                  !isValid ||
                  (Object.keys(touched).length === 0 &&
                    touched.constructor === Object)
                }
                className="form__submit-register"
              >
                Зарегистрироваться
              </button>
            </Form>
          )}
        </Formik>
      </FormData>
    </main>
  );
}

export default Register;
