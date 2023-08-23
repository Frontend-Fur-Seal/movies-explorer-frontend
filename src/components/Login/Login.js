import FormData from "../FormData/FormData.js";
import { Formik, Form, Field } from "formik";

function Login({ handleLogin }) {

  function validateEmail(value){
    let error;
    if (!value) {
      error = 'Поле обязательно к заполнению';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Некорректный email';
    }
    return error;
  }

  function validatePassword(value){
    let error;
    if (!value) {
      error = 'Поле обязательно к заполнению';
    } else if (value.length < 2) {
      error = 'Слишком короткий пароль';
    }else if(value.length > 30){
      error = 'Пароль слишком длинный';
    }
    return error;
  }


  return (
    <main className="main">
      <FormData
        title={"Рады видеть!"}
        text={"Еще не зарегистрированы?"}
        changeLink={"Регистрация"}
        link={"/signup"}
      >
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            handleLogin(values.email, values.password);
          }}
        >
          {({ errors, touched, isValid }) => (
            <Form className="login">
              <label htmlFor="loginInput-email" className="form__label">
                E-mail
              </label>
              <Field
                validate={validateEmail}
                placeholder="E-mail"
                id="loginInput-email"
                type="email"
                className="form__input"
                name="email"
              />
              {errors.email && touched.email && (
                <p className="form__error">{errors.email}</p>
              )}
              <label htmlFor="loginInput-password" className="form__label">
                Пароль
              </label>
              <Field
                validate={validatePassword}
                placeholder="Пароль"
                id="loginInput-password"
                type="password"
                className="form__input"
                name="password"
              />
              {errors.password && touched.password && (
                <p className="form__error">{errors.password}</p>
              )}
              <button 
              type="submit" 
              disabled={!isValid || (Object.keys(touched).length === 0 && touched.constructor === Object)}
              className='form__submit-login'>
                Войти
              </button>
            </Form>
          )}
        </Formik>
      </FormData>
    </main>
  );
}

export default Login;
